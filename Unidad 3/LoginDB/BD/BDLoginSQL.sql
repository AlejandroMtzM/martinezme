create database loginEmpresa;
use loginEmpresa;

DROP TABLE IF EXISTS desarrollador;
CREATE TABLE IF NOT EXISTS desarrollador (
  idUsuario smallint(6) NOT NULL AUTO_INCREMENT,
  nombre varchar(25) DEFAULT NULL,
  apPaterno varchar(25) DEFAULT NULL,
  apMaterno varchar(25) DEFAULT NULL,
  area varchar(10) DEFAULT NULL,
  login varchar(10) DEFAULT NULL,
  password varchar(50) DEFAULT NULL,
  PRIMARY KEY (idUsuario)
);

INSERT INTO desarrollador (nombre, apPaterno, apMaterno, area, login, password) VALUES
('Marcos', 'Martinez', 'Mendoza', 'WEB', 'marcos', 'martinez'),
('Cristina', 'Urbina', 'Arredondo', 'Sistemas', 'Xris', '8d8b1040f9408f0cb5f7f1fff8bfc463');

