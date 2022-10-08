
 create table Clientes 
(
	IdCliente 		int Not NULL auto_increment	   ,
	Nombres_Apellidos 	varchar (50) Not NULL	   ,
	Correo_electronico	varchar (50) Not NULL      ,
	Telefono		varchar (50) Not NULL          ,
	Comentarios		varchar (100)	               ,
	PRIMARY KEY 		(IdCliente)
)	ENGINE=InnoDB;		                   

use sysventas;
create table Ventas 						
(
	IdVenta			Int Not NULL auto_increment		 ,
	fecha_registro		date                     	 ,
	IdCliente		int Not NULL              	 	 ,
	PRIMARY KEY 		(IdVenta)		   			 ,
	CONSTRAINT		IdCliente FOREIGN KEY (IdCliente)
    REFERENCES		Clientes (IdCliente)
)	ENGINE=InnoDB;	
								 
use sysventas;
Create table Productos 					   
(
	IdProducto		Int Not NULL auto_increment		,
	Nombre_producto		varchar (45) Not NULL	    ,
	precio			decimal(18,2) Not NULL     		,
	PRIMARY KEY 		(IdProducto)		  	    
)	ENGINE=InnoDB;	

use sysventas;
Create table DetalleVentas									  
(
	IdDetalleVenta		Int Not NULL auto_increment			  					,
	IdVenta			Int Not NULL		   					 					,
	IdProducto		Int Not NULL		   					  					,
	cantidad		Int Not NULL		   					  					,
	descuento		decimal (18,2)		   					  					,
	PRIMARY KEY 		(IdDetalleVenta) 								   		,
	CONSTRAINT		IdVenta FOREIGN KEY (IdVenta)    REFERENCES Ventas (IdVenta)  ,
    CONSTRAINT   IdProducto FOREIGN KEY (IdProducto) REFERENCES Productos (IdProducto)
)