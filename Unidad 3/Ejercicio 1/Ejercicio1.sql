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
('Cristina', 'Urbina', 'Arredondo', 'Sistemas', 'CRIS8305281H0'),
('Alejandro', 'Martinez', 'Mendoza', 'WEB', 'ALAL8305281H0'),
('Guadalupe', 'Urbina', 'Arredondo', 'Sistemas', 'GUAG305281H0'),
('Mauricio', 'Alvarado', 'Sandoval', 'Matematicas', 'MAUU8305281H0'),
('Jos', 'Olguin', 'Perales', 'Sistemas', 'JOSS8305281H0'),
('Gabriela', 'Santana', 'Mendoza', 'WEB', 'GABY8305281H0'),
('Antonio', 'Perez', 'Pineda', 'Mecatronica', 'ANTY8305281H0');

