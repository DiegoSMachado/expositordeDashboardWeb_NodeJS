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
"DROP TABLE IF EXISTS public.tb_gestor;"+
"CREATE TABLE public.tb_gestor"+
"( cd_gestor      Serial,"+
  "cd_cargo       integer,"+
  "mn_gestor      character varying(50),"+
  "cd_matr_gestor character varying(50),"+
  "fg_ativo       integer,"+
  "dh_ins         timestamp(3),"+
  "dh_ult_alt     timestamp(3),"+
  "CONSTRAINT cd_gestor_pkey PRIMARY KEY (cd_gestor)) WITH (OIDS=FALSE);"
);
query.on('end', () => { client.end(); });

console.log('==> Tabela gestor criada.');