/*
SQLyog Community v12.0 (64 bit)
MySQL - 5.6.20-log : Database - tu_chance
*********************************************************************
*/


 SET NAMES utf8 ;

 SET SQL_MODE='';

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE  IF NOT EXISTS `tuchance`  DEFAULT CHARACTER SET utf8  ;

USE `tuchance`;

/*Table structure for table `apuestas` */

DROP TABLE IF EXISTS `apuestas`;

CREATE TABLE `apuestas` (
  `idapuestas` int(11) NOT NULL AUTO_INCREMENT,
  `valor_apuesta` int(11) NOT NULL,
  `valor_premio` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `numero` int(11) NOT NULL,
  `serie` int(11) NOT NULL,
  `loteria` int(11) NOT NULL,
  `usuarios_idusuarios` int(11) NOT NULL,
  PRIMARY KEY (`idapuestas`,`loteria`,`usuarios_idusuarios`),
  KEY `fk_apuestas_loterias1_idx` (`loteria`),
  KEY `fk_apuestas_usuarios1_idx` (`usuarios_idusuarios`),
  CONSTRAINT `fk_apuestas_loterias1` FOREIGN KEY (`loteria`) REFERENCES `loterias` (`idloterias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_apuestas_usuarios1` FOREIGN KEY (`usuarios_idusuarios`) REFERENCES `usuarios` (`idusuarios`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `apuestas` */

insert  into `apuestas`(`idapuestas`,`valor_apuesta`,`valor_premio`,`fecha`,`numero`,`serie`,`loteria`,`usuarios_idusuarios`) values (3,500,300000,'2016-05-20 19:10:57',2584,22,3,26),(4,1000,600000,'2016-05-20 19:20:54',324,120,6,25),(5,2500,120000000,'2016-05-20 19:25:14',234,23,6,26),(6,500,8000,'2016-06-01 00:00:00',2584,22,6,26),(7,600,360000,'2016-06-01 00:00:00',500,54,7,22),(8,600,360000,'2016-06-01 00:00:00',500,54,7,22),(9,600,360000,'2016-06-01 00:00:00',500,54,7,22),(10,600,360000,'2016-06-01 00:00:00',500,54,7,22),(11,8900,5340000,'2016-06-01 00:00:00',789,54,7,22),(12,8900,5340000,'2016-06-01 00:00:00',789,54,7,22),(13,8900,5340000,'2016-06-01 00:00:00',789,54,7,22),(14,500,300000,'2016-06-03 00:00:00',584,80,22,42),(15,500,300000,'2016-06-03 00:00:00',584,80,22,42),(16,500,300000,'2016-06-03 00:00:00',584,80,22,42),(17,500,300000,'2016-06-03 00:00:00',584,80,22,42),(18,500,300000,'2016-06-03 00:00:00',584,80,22,42),(19,500,300000,'2016-06-03 00:00:00',584,80,22,42),(20,800,480000,'2016-06-03 02:30:12',888,75,12,42),(21,800,480000,'2016-06-03 02:30:12',888,75,12,42),(22,800,480000,'2016-06-03 02:30:12',888,75,12,42),(23,800,480000,'2016-06-03 02:30:12',888,75,12,42),(24,800,480000,'2016-06-03 02:30:12',888,75,12,42),(25,800,480000,'2016-06-03 02:30:12',888,75,12,42),(26,800,480000,'2016-06-03 02:30:12',888,75,12,42),(27,800,480000,'2016-06-03 02:30:12',888,75,12,42),(28,800,480000,'2016-06-03 02:30:12',888,75,12,42),(29,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(30,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(31,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(32,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(33,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(34,2000,9000000,'2016-06-03 03:15:03',2584,110,14,41),(35,2000,9000000,'2016-06-03 03:15:04',2584,110,14,41);

/*Table structure for table `loterias` */

DROP TABLE IF EXISTS `loterias`;

CREATE TABLE `loterias` (
  `idloterias` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`idloterias`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8;

/*Data for the table `loterias` */

insert  into `loterias`(`idloterias`,`nombre`) values (1,'Cafeterito Noche'),(2,'Cafeterito Tarde'),(3,'Cash Three Día'),(4,'Cash Three Noche'),(5,'Chontico Dia'),(6,'Chontico Noche'),(7,'El Dorado Mañana'),(8,'El Dorado Noche'),(9,'El Dorado Tarde'),(10,'Evening'),(11,'La Bolita Dia'),(12,'La Bolita Noche'),(13,'La Caribeña Dia'),(14,'La Caribeña Noche'),(15,'La Culona'),(16,'Lotería de Bogota'),(17,'Loteria de Boyaca'),(20,'Loteria de Manizales'),(21,'Lotería de Medellin'),(22,'Lotería de Risaralda'),(23,'Lotería de Santander'),(24,'Lotería del Cauca'),(25,'Lotería del Huila'),(26,'Loteria del Meta'),(27,'Lotería del Quindio'),(28,'Loteria del Tolima'),(29,'Loteria del Valle'),(30,'Motilon Noche'),(31,'Motilon Tarde'),(32,'Paisa Lotto'),(33,'Paisita 3'),(34,'Paisita Dia'),(35,'Paisita Noche'),(36,'Pijao de Oro'),(37,'Play Four Dia'),(38,'Play Four Noche'),(39,'Samán de la Suerte'),(40,'Sinuano Dia'),(41,'Sinuano Noche'),(43,'Super Astro Luna'),(44,'Super Astro Sol'),(45,'Win 4'),(48,'sinuano');

/*Table structure for table `numbloqueados` */

DROP TABLE IF EXISTS `numbloqueados`;

CREATE TABLE `numbloqueados` (
  `idumBloqueados` int(11) NOT NULL AUTO_INCREMENT,
  `numBloqueado` int(11) DEFAULT NULL,
  `loteriasIdloterias` int(11) NOT NULL,
  PRIMARY KEY (`idumBloqueados`,`loteriasIdloterias`),
  KEY `fk_num_bloqueados_loterias1_idx` (`loteriasIdloterias`),
  CONSTRAINT `fk_num_bloqueados_loterias1` FOREIGN KEY (`loteriasIdloterias`) REFERENCES `loterias` (`idloterias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `numbloqueados` */

insert  into `numbloqueados`(`idumBloqueados`,`numBloqueado`,`loteriasIdloterias`) values (1,23,15),(2,1234,12),(3,767,12),(4,978,12);

/*Table structure for table `serie` */

DROP TABLE IF EXISTS `serie`;

CREATE TABLE `serie` (
  `idserie` int(11) NOT NULL AUTO_INCREMENT,
  `numSerie` int(11) NOT NULL,
  `idloterias` int(11) NOT NULL,
  PRIMARY KEY (`idserie`,`idloterias`),
  KEY `fk_serie_loterias_idx` (`idloterias`),
  CONSTRAINT `fk_serie_loterias` FOREIGN KEY (`idloterias`) REFERENCES `loterias` (`idloterias`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

/*Data for the table `serie` */

insert  into `serie`(`idserie`,`numSerie`,`idloterias`) values (1,121,11),(2,128,26),(3,38,32),(4,5,40),(5,104,39),(6,24,6),(7,135,37),(8,79,20),(9,73,4),(10,79,4),(11,50,26),(12,105,30),(13,38,1),(14,80,22),(15,132,22),(16,134,21),(17,111,22),(18,140,31),(19,70,22),(20,134,24),(21,18,20),(22,29,39),(23,54,45),(24,68,34),(25,130,26),(26,36,32),(27,147,12),(28,110,14),(29,46,22),(30,54,7),(31,122,20),(33,103,14),(34,12,27),(35,138,15),(36,15,20),(37,67,13),(38,56,27),(39,110,34),(40,75,12),(41,7,30),(42,119,37),(43,71,21),(44,92,36),(45,115,23),(47,142,39),(48,132,39),(49,92,22),(50,128,2),(51,118,7),(52,95,15),(53,2,27),(55,122,45),(56,99,11),(57,77,33),(58,98,26),(59,47,37),(60,106,32),(61,149,23),(62,96,12),(63,97,34),(64,70,25),(65,136,32),(68,88,12),(69,26,29),(70,8,39),(71,94,27),(72,105,21),(73,1,37),(74,107,24),(75,20,39),(76,91,23),(77,61,43),(78,52,20),(79,118,30),(81,134,33),(82,11,5),(84,103,1),(85,90,32),(86,72,45),(87,6,26),(88,58,28),(89,100,25),(90,124,14),(91,129,44),(92,48,3),(93,93,25),(95,44,29),(96,37,12),(97,66,25),(98,97,39),(99,17,35),(100,46,40);

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `idusuarios` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(15) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `username` varchar(20) NOT NULL,
  `bloqueado` tinyint(1) NOT NULL DEFAULT '1',
  `administrador` tinyint(1) NOT NULL,
  `password` varchar(150) NOT NULL,
  PRIMARY KEY (`idusuarios`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `usuarios` */

insert  into `usuarios`(`idusuarios`,`cedula`,`nombre`,`apellido`,`username`,`bloqueado`,`administrador`,`password`) values (21,'1194255347','Douglas','Hicks','dhicks0',0,1,'12345'),(22,'1194284979','Larry','Ruiz','lruiz1',0,0,'12345'),(23,'1194314611','Jack','Phillips','jphillips2',1,1,'12345'),(24,'1194344243','Alice','Black','ablack3',1,1,'12345'),(25,'1194373875','Carl','Morris','cmorris4',1,1,'12345'),(26,'1194403507','Marilyn','Harrison','mharrison5',1,1,'12345'),(27,'1194433139','Edward','Lawrence','elawrence6',1,1,'12345'),(28,'1194462771','Irene','Mills','imills7',1,1,'12345'),(29,'1194492403','Dorothy','Porter','dporter8',1,1,'12345'),(30,'1194522035','Sarah','Bradley','sbradley9',1,1,'12345'),(31,'1194551667','Joyce','Hart','jharta',1,0,'12345'),(32,'1194581299','Pamela','Lynch','plynchb',1,1,'12345'),(33,'1194610931','Kevin','Hanson','khansonc',1,1,'12345'),(34,'1194640563','Craig','Baker','cbakerd',1,1,'12345'),(35,'1194670195','Harry','Diaz','hdiaze',1,1,'12345'),(36,'1194699827','Christine','Lane','clanef',1,1,'12345'),(37,'1194729459','Juan','Jenkins','jjenkinsg',1,1,'12345'),(38,'1194759091','Jose','Schmidt','jschmidth',1,1,'12345'),(39,'1194788723','Ryan','Harvey','rharveyi',1,0,'12345'),(40,'1194818355','Virginia','Butler','vbutlerj',1,0,'12345'),(41,'1099683171','Jhoner','Silva','jesilva',0,0,'35c2ad9444865ed1526da71334c878a0919b65f1'),(42,'976454','juan','perez','pepe',0,0,'b1b3773a05c0ed0176787a4f1574ff0075f7521e');

/*Table structure for table `ventas` */

DROP TABLE IF EXISTS `ventas`;

/*!50001 DROP VIEW IF EXISTS `ventas` */;
/*!50001 DROP TABLE IF EXISTS `ventas` */;

/*!50001 CREATE TABLE  `ventas`(
 `username` varchar(20) ,
 `total` bigint(21) 
)*/;

/*View structure for view ventas */

/*!50001 DROP TABLE IF EXISTS `ventas` */;
/*!50001 DROP VIEW IF EXISTS `ventas` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ventas` AS select `usuarios`.`username` AS `username`,count(0) AS `total` from (`apuestas` join `usuarios` on((`usuarios`.`idusuarios` = `apuestas`.`usuarios_idusuarios`))) where (`apuestas`.`fecha` = curdate()) group by `apuestas`.`usuarios_idusuarios` */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
