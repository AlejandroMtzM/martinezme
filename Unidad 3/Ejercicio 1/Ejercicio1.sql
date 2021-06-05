create database martinezme;
use martinezme;

DROP TABLE IF EXISTS empleado;
CREATE TABLE IF NOT EXISTS empleado (
  idUsuario smallint(6) NOT NULL AUTO_INCREMENT,
  nombre varchar(25) DEFAULT NULL,
  apPaterno varchar(25) DEFAULT NULL,
  apMaterno varchar(25) DEFAULT NULL,
  area varchar(10) DEFAULT NULL,
  RFC varchar(13) DEFAULT NULL,
  PRIMARY KEY (idUsuario)
);

INSERT INTO empleado  (nombre, apPaterno, apMaterno, area, RFC) VALUES
('Marcos', 'Martinez', 'Mendoza', 'WEB', 'MAMM8305281H0'),
('Cristina', 'Urbina', 'Arredondo', 'Sistemas', 'CRIS8305281H0');
