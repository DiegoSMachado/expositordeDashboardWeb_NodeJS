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
//"DROP TABLE public.tb_agente;"+
"CREATE TABLE public.tb_agente"+
"( cd_agente         Serial,"+
  "cd_operacao       integer,"+
  "cd_campanha       integer,"+
  "cd_celula         integer,"+
  "cd_cargo          integer,"+
  "cd_status         integer,"+
  "cd_cpf            character varying(11),"+
  "mn_agente         character varying(50),"+
  "cd_sexo           character varying(1),"+
  "dt_nascimento     date,"+
  "cd_matricula      character varying(50),"+
  "cd_login_discador character varying(50),"+
  "dt_admissao       date,"+
  "fg_ativo          integer,"+
  "dh_ins            timestamp(3),"+
  "dh_ult_alt        timestamp(3),"+
  "CONSTRAINT cd_agente_pkey PRIMARY KEY (cd_agente)) WITH (OIDS=FALSE);"
);
query.on('end', () => { client.end(); });