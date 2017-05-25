// PostgreSQL configurações
const pg = require('pg');
var con = [];
con = require('../pg.json');
const conString = process.env.DATABASE_URL || 'postgreSQL://'+con.login+':'+con.senha+'@'+con.servidor+':'+con.porta+'/'+con.banco;
const client = new pg.Client(conString);
//console.log('-- Conectando à '+conString);

// Conectando PostgreSQL
client.connect();
const query = client.query(
"DROP TABLE IF EXISTS public.tb_perfil_usu;"+
"CREATE TABLE public.tb_perfil_usu"+
"( cd_perfil   Serial,"+
  "mn_perfil   character varying(20),"+
  "fg_ativo    integer,"+
  "dh_ins      timestamp(3),"+
  "dh_ult_alt  timestamp(3),"+
  "CONSTRAINT cd_perfil_pkey PRIMARY KEY (cd_perfil)) WITH (OIDS=FALSE);"+
"INSERT INTO public.tb_perfil_usu(mn_perfil, fg_ativo)"+
    "VALUES ('Administrador', 1);"
);
query.on('end', () => { client.end(); });

console.log('==> Tabela perfil de usuário criada.');

