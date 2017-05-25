//./app.js
//_________________________________________________________________________________________________________

//                                    Arquivo de configuração do Servidor
//_________________________________________________________________________________________________________

const express = require('express');            // Modulo base do servidor
const path = require('path');                  // Modulo de caminho
const favicon = require('serve-favicon');      // Modulo de icone de favoritos
const logger = require('morgan');              // Modulo de log do console
const cookieParser = require('cookie-parser'); // Modulo de leitura do cookie
const bodyParser = require('body-parser');     // Modulo de leitura do corpo do HTML
const session = require('express-session');
const app = express();
var passport = require('passport');



//_________________________________________________________________________________________________________
// Motor de renderização de HTML, baseado em jade
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Motor de renderização de HTML Estático 
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Requisitor de dados da página
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//_________________________________________________________________________________________________________
// Sessão de acesso
app.use(session({ 
  secret: 'transformemsepelarenovacao',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Configuring Passport
app.use(passport.initialize());
app.use(passport.session());


//_________________________________________________________________________________________________________
// Rota para ./routes/index.js
const index  = require('./routes/index');
app.use('/', index);

// Em caso de não encontrado, erro 404
app.use(function(req, res, next) {
  var err = new Error('Não encontrado.');
  err.status = 404;
  next(err);
});

// Em caso de erro de desenvolvimento, erro 500
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('erro');
});

//_________________________________________________________________________________________________________
// Acesso global a as configurações do app
module.exports = app;