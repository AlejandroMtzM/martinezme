create database loginEmpresa;
use loginEmpresa;

DROP TABLE IF EXISTS Cliente;
CREATE TABLE IF NOT EXISTS Cliente (
  idCliente smallint(6) NOT NULL,
  nombre varchar(25) DEFAULT NULL,
  direccion varchar(50) DEFAULT NULL,
  CP smallint(5) DEFAULT NULL,
  telefono varchar(10) DEFAULT NULL,
  ciudad varchar(15) DEFAULT NULL,
  estado varchar(15) DEFAULT NULL,
  pais varchar(15) DEFAULT NULL,
  PRIMARY KEY (idCliente)
);

INSERT INTO Cliente (idCliente, nombre, CP, area, telefono, ciudad, estado, pais) VALUES
(1, 'Marcos', 88290, 'web', '1234', 'nuevo laredo', 'tamaulipas', 'mexico');