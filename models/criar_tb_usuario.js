// PostgreSQL configurações
const pg = require('pg');
var con = [];
con = require('../pg.json');
const conString = process.env.DATABASE_URL || 'postgreSQL://'+con.login+':'+con.senha+'@'+con.servidor+':'+con.porta+'/'+con.banco;
const client = new pg.Client(conString);

// Conectando PostgreSQL
client.connect();
const query = client.query(
"DROP TABLE IF EXISTS public.tb_usuario;"+
"CREATE TABLE public.tb_usuario"+
"( cd_usuario  Serial,"+
  "cd_perfil   integer,"+
  "cd_cliente  integer,"+
  "mn_usuario  character varying(50),"+
  "cd_email    character varying(100),"+
  "cd_senha    character varying(200),"+
  "fg_ativo    integer,"+
  "dh_ins      timestamp(3),"+
  "dh_ult_alt  timestamp(3),"+
  "CONSTRAINT cd_usuario_pkey PRIMARY KEY (cd_usuario)) WITH (OIDS=FALSE);"+
  "INSERT INTO public.tb_usuario(cd_cliente, mn_usuario, cd_email, cd_senha, fg_ativo)"+
  "VALUES (0, 'Administrador', 'admin@mktec.com.br', 'df248763306b25ebde4d8c61570f2b00', 1);"
);
query.on('end', () => { client.end(); });
//mkt3c;

console.log('==> Tabela usuario criada.');