//./routes/index.js
//_________________________________________________________________________________________________________
//                          Arquivo de criação de GET e POST (gerador de rotas)
//_________________________________________________________________________________________________________

const express = require('express');
const router = express.Router();
const session = require('express-session');
const md5 = require('md5');
const parser = require('json-parser');


// PostgreSQL configurações
const pg = require('pg');
var con = [];
con = require('../pg.json');
/* ------------------------------------------------
Faz parte do .gitignore
As Informações do servidor estão dentro de /pg.json
o texto se encontra como no formato abaixo.
{
"login" : "usuario",
"senha" : "123",
"porta" : "5432",
"servidor" : "localhost",
"banco" : "empresa"
}
---------------------------------------------*/
const conString = process.env.DATABASE_URL || 'postgreSQL://'+con.login+':'+con.senha+'@'+con.servidor+':'+con.porta+'/'+con.banco;
const client = new pg.Client(conString);


// variaveis
var alerta = 'oi';
var sess = '';
var login = '';


//__ PAGINA LOGADA _______________________________________________________________________________________
router.get('/', function(req, res, next) {
  if (sess.login == undefined){res.redirect('/login');}
  console.log('Página Principal | Logado:'+sess.login);
  res.render('index',{ logshow : sess.login });
});


//__ LOGIN ________________________________________________________________________________________________
router.get('/login', (req, res, next) => {
  alerta= '';
  res.render('login',{ logshow : sess.login });
  //res.render("board", { gameState : game.gameState });
});

// --- Recebendo resultados do Submit
router.post('/login',(req, res, next) => {
  results = [];
  login = req.body.inputLogin;
  senha = md5(req.body.inputSenha);
  console.log('=== LOGIN =====================================');
  console.log('==> Requerendo:     '+login);
  console.log('==> Senha Digitada: '+senha);
  //--- Consultando o usuário e senha no PostgreSQL
  const data = req.params.data;
  pg.connect(conString, (err, client, done) => {
    if(err) {
      done();
      console.log('Erro do SQL: '+err);
      return res.status(500).json({success: false, data: err});
    }
    const query = client.query("SELECT * FROM tb_usuario WHERE cd_email = '"+login+"' AND cd_senha = '"+senha+"';");
    query.on('row', (row) => {
      results.push(row);
      console.log(results[0]);
      email = results[0]['cd_email'];
      usuario = results[0]['nm_usuario'];
      empresa = results[0]['cd_cliente'];
      senha = results[0]['cd_senha'];
      ativo = results[0]['fg_ativo'];
      perfil = results[0]['cd_perfil'];
    });
    //--- Resultado do login
    query.on('end', () => {
      //console.log('Resultado do banco '+ result.rows);
      if(ativo == 1){
        if (sess.views) {
          sess.views++;
          sess.login = email;
          sess.usuario = usuario;
          sess.empresa = empresa;
          sess.senha = senha;
          sess.perfil = perfil;
        } else {
          sess = req.session;
          sess.views = 1;
          sess.login = email;
          sess.usuario = usuario;
          sess.empresa = empresa;
          sess.senha = senha;
          sess.perfil = perfil;
        }
        console.log('==> Sessão: ' + sess.views);
        console.log('==> Expira em: ' + (sess.cookie.maxAge / 1000)+ ' seg');
        res.redirect('/');
      }else {
        console.log('==> Senha errada <> '+login+' <>');
        req.session.destroy();
        alerta = '<div class="alert alert-danger" role="alert">Senha Errada!</div>';
        res.redirect('/login');
      }
      console.log('===============================================');
      done();
    });
  });
});

//__ CADASTRO _____________________________________________________________________________________________

router.get('/novousuario', (req, res, next) => {
  if (sess.login == undefined){res.redirect('/login');} // Verificando sessão
  sess = req.session;
  sess.login = login;
  res.render('novousuario');
});

router.get('/mudarsenha', (req, res, next) => {
  if (sess.login == undefined){res.redirect('/login');} // Verificando sessão
  email = sess.login;
  usuario = sess.usuario;
  empresa = sess.empresa;
  senha = sess.senha;
  perfil = sess.perfil;
  senhaold = req.body.pwdold;
  senhanew = md5(req.body.pwdnew);
  if(senha =! senhaold){res.redirect('/novousuario');}
  pg.connect(conString, (err, client, done) => {
  // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
  // Stream results back one row at a time
    const query = client.query("UPDATE INTO tb_usuario (cd_senha) VALUES ('"+senhanew+"');");
    query.on('row', (row) => {
      results.push(row);
    });
    // After all data is returned, close connection and return results
    query.on('end', () => {
      return res.redirect('/');
      done();
      //return res.json(results);
    });
  });
});



//API lista usuario versão 1.0
router.get('/api/v1/listausu', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(conString, (err, client, done) => {
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM tb_usuario;");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
  // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

router.post('/novousuario', (req, res, next) => {
  //if (sess.login == undefined){res.redirect('/login');} // Verificando sessão
  email = sess.login;
  usuario = sess.usuario;
  empresa = sess.empresa;
  senha = sess.senha;
  perfil = sess.perfil;
  const results = [];
  const data = req.params.data;
  // Get a Postgres client from the connection pool
  login = req.body.novoLogin;
  senha = md5(req.body.novaSenha);
  usuario = req.body.novoUsuario;
  data = new Date(Date.now());
  pg.connect(conString, (err, client, done) => {
    // Handle connection errors
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // Stream results back one row at a time
    const query = client.query("INSERT INTO tb_usuario (cd_email,mn_usuario,cd_senha,cd_perfil,cd_cliente,fg_ativo,dh_ins,dh_ult_alt) VALUES ('"+login+"','"+usuario+"','"+senha+"','"+perfil+"','"+empresa+"',1,current_timestamp,current_timestamp);");
    query.on('row', (row) => {results.push(row);});
    // After all data is returned, close connection and return results
    query.on('end', () => {
      return res.redirect('/');
      done();
    });
  });
});


//API lista usuario versão 1.0
router.get('/api/v1/listausu', (req, res, next) => {
  const results = [];
  // Get a Postgres client from the connection pool
  pg.connect(conString, (err, client, done) => {
   // Handle connection errors
    if (err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    // SQL Query > Select Data
    const query = client.query("SELECT * FROM tb_usuario;");
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });
  // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});


router.get('/sair', function(req, res, next) {
  if (sess.login == undefined){res.redirect('/login');}
  res.redirect('/login');
});
module.exports = sess;
module.exports = router;
