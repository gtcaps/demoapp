CREATE DATABASE demodb;

USE demodb;

CREATE TABLE Prestamos (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	dpi VARCHAR(13) NOT NULL,
	nombre VARCHAR(200) NOT NULL,
	monto DOUBLE NOT NULL,
	cuotas INTEGER NOT NULL,
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



INSERT INTO Prestamos (dpi, nombre, monto, cuotas) 
VALUES ('2989023540101', 'Aybson Mercado', 520.34, 5)

SELECT * FROM Prestamos;