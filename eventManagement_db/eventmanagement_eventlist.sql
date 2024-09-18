-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: eventmanagement
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventlist`
--

DROP TABLE IF EXISTS `eventlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventlist` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(200) NOT NULL,
  `cover` varchar(45) DEFAULT NULL,
  `date_of_event` date NOT NULL DEFAULT '2024-01-01',
  `time_of_event` time DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventlist`
--

LOCK TABLES `eventlist` WRITE;
/*!40000 ALTER TABLE `eventlist` DISABLE KEYS */;
INSERT INTO `eventlist` VALUES (1,'Footabll','it is final game','football.png','2024-09-17','01:34:00'),(2,'volleyball','first group game','cover from backend','2024-09-18','05:35:00'),(4,'new game 1','new descripton','new cover','2024-09-19','10:35:00'),(6,'Hollyday','happy new year 2017','happy-New-Year.png','2024-09-20','03:36:00'),(7,'technology event','by the development ','technology.png','2024-10-05','01:36:00'),(16,'abcd','opopop','cbcbbc','2024-10-03','06:36:00'),(20,'new year','it is 20','new year.png','2024-09-27','22:41:00'),(30,'from add ','from add dws','','2024-09-13','11:52:00'),(31,'2017 New year','happy new year','','2024-09-19','17:45:00');
/*!40000 ALTER TABLE `eventlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-10 17:40:04
