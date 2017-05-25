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
"DROP TABLE IF EXISTS public.tb_cliente;"+
"CREATE TABLE public.tb_cliente"+
"( cd_cliente          Serial,"+
  "mn_cliente          character varying(50),"+
  "mn_banco            character varying(50),"+
  "mn_login_banco      character varying(50),"+
  "cd_senha_banco      character varying(200),"+
  "nm_responsavel      character varying(50),"+
  "ds_email_resp       character varying(100),"+
  "nr_tel_fixo_resp    character varying(11),"+
  "ds_endereco_cliente character varying(200),"+
  "fg_ativo            integer,"+
  "dh_ins              timestamp(3),"+
  "dh_ult_alt          timestamp(3),"+
  "CONSTRAINT cd_cliente_pkey PRIMARY KEY (cd_cliente)) WITH (OIDS=FALSE);"+
"INSERT INTO public.tb_cliente (mn_cliente, nm_responsavel, ds_email_resp, nr_tel_fixo_resp, ds_endereco_cliente, fg_ativo)"+
    " VALUES ('MKTEC', 'Fábio Ribeiro', 'fabio@mktec.com', '2124935232', '', 1);"
);
query.on('end', () => { client.end(); });

console.log('==> Tabela cliente criada.');