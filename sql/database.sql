
CREATE TABLE IF NOT EXISTS usuario (
    id_usuario              SERIAL          PRIMARY KEY,
	username_usuario        VARCHAR ( 50 ),
	password_usuario        VARCHAR ( 255 )  NOT NULL,
	email_usuario           VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_on              TIMESTAMP,
    estado_usuario          INTEGER       
);

CREATE TABLE IF NOT EXISTS  rol(
   id_rol           SERIAL        PRIMARY KEY,
   descripcion_rol  VARCHAR (255) UNIQUE NOT NULL,
   created_on       TIMESTAMP,
   estado_rol       INTEGER
);

CREATE TABLE IF NOT EXISTS  usuario_x_rol(
  id_usuario    INT  NOT NULL ,
  id_rol        INT  NOT NULL ,
  created_on    TIMESTAMP,
  PRIMARY KEY   (id_usuario , id_rol),
  FOREIGN KEY   (id_rol)
      REFERENCES rol (id_rol),
  FOREIGN KEY (id_usuario)
      REFERENCES usuario (id_usuario)
);

CREATE TABLE IF NOT EXISTS area (
    id_area             SERIAL PRIMARY KEY,
    nombre_area         VARCHAR (50),
    descripcion_area    VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS oficina(
    id_oficina          SERIAL PRIMARY KEY,
    id_area             INT NOT NULL,
    nombre_oficina      VARCHAR (50),
    descripcion_oficina VARCHAR (255),
    piso_oficina        INTEGER,
    latitud_oficina     NUMERIC,
    longitud_oficina    NUMERIC,
    imagen_oficina      VARCHAR(255),
    created_on          TIMESTAMP,
    estado_oficina      INTEGER,
    FOREIGN KEY         (id_area)
        REFERENCES area  (id_area)
);


CREATE TABLE IF NOT EXISTS visita(
    id_visita           SERIAL PRIMARY KEY,
    id_tipo_visitante   INT NOT NULL,
    created_on          TIMESTAMP,
    FOREIGN KEY         (id_tipo_visitante)
        REFERENCES tipoVisitante (id_tipo_visitante)
);
CREATE TABLE IF NOT EXISTS tipoVisitante(
    id_tipo_visitante   SERIAL PRIMARY KEY,
    descripcion         VARCHAR(255),
    created_on          TIMESTAMP
);


