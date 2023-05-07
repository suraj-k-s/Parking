-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 07, 2023 at 06:25 PM
-- Server version: 8.0.28
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_mainproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

DROP TABLE IF EXISTS `tbl_admin`;
CREATE TABLE IF NOT EXISTS `tbl_admin` (
  `admin_id` int NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(50) NOT NULL,
  `admin_mail` varchar(50) NOT NULL,
  `admin_password` varchar(50) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`admin_id`, `admin_name`, `admin_mail`, `admin_password`) VALUES
(1, 'mathews', 'admin@gmail.com', '6282');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

DROP TABLE IF EXISTS `tbl_booking`;
CREATE TABLE IF NOT EXISTS `tbl_booking` (
  `booking_id` int NOT NULL AUTO_INCREMENT,
  `booking_date` varchar(100) NOT NULL,
  `booking_from_date` varchar(100) NOT NULL,
  `booking_to_date` varchar(100) NOT NULL,
  `booking_from_time` varchar(100) NOT NULL,
  `booking_for_time` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `airport` varchar(100) NOT NULL,
  `slot` varchar(100) NOT NULL,
  `status` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`booking_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`booking_id`, `booking_date`, `booking_from_date`, `booking_to_date`, `booking_from_time`, `booking_for_time`, `user_id`, `airport`, `slot`, `status`) VALUES
(19, '2023-05-02', '2023-05-02', '2023-05-16', '00:27', '21:27', '7', 'Kannur', 'P1', 1),
(20, '2023-05-02', '2023-05-02', '2023-05-24', '00:36', '20:36', '7', 'Kannur', 'P2', 1),
(21, '2023-05-03', '2023-05-03', '2023-05-26', '10:51', '11:48', '8', 'Kannur', 'P1', 1),
(22, '2023-05-03', '2023-05-11', '2023-05-04', '13:38', '13:38', '8', 'Kannur', 'P7', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_district`
--

DROP TABLE IF EXISTS `tbl_district`;
CREATE TABLE IF NOT EXISTS `tbl_district` (
  `district_id` int NOT NULL AUTO_INCREMENT,
  `district_name` varchar(20) NOT NULL,
  PRIMARY KEY (`district_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_district`
--

INSERT INTO `tbl_district` (`district_id`, `district_name`) VALUES
(1, 'Idukki'),
(15, 'Kottayam'),
(16, 'kochi'),
(17, 'huvhjbn');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_manager`
--

DROP TABLE IF EXISTS `tbl_manager`;
CREATE TABLE IF NOT EXISTS `tbl_manager` (
  `manager_id` int NOT NULL AUTO_INCREMENT,
  `manager_name` varchar(50) NOT NULL,
  `manager_contact` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `manager_address` varchar(100) NOT NULL,
  `manager_mail` varchar(50) NOT NULL,
  `manager_password` varchar(50) NOT NULL,
  `airport` varchar(100) NOT NULL,
  PRIMARY KEY (`manager_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_manager`
--

INSERT INTO `tbl_manager` (`manager_id`, `manager_name`, `manager_contact`, `manager_address`, `manager_mail`, `manager_password`, `airport`) VALUES
(1, 'Krishna prasad', '9898989767', 'thodupuzha', 'krishna@gmail.com', '6282', 'Kannur');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_place`
--

DROP TABLE IF EXISTS `tbl_place`;
CREATE TABLE IF NOT EXISTS `tbl_place` (
  `district_id` int NOT NULL,
  `place_id` int NOT NULL AUTO_INCREMENT,
  `place_name` varchar(20) NOT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_place`
--

INSERT INTO `tbl_place` (`district_id`, `place_id`, `place_name`) VALUES
(1, 1, 'thodupuzha');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(50) NOT NULL,
  `user_contact` varchar(13) NOT NULL,
  `user_address` varchar(50) NOT NULL,
  `user_mail` varchar(30) NOT NULL,
  `user_photo` varchar(30) NOT NULL,
  `user_password` varchar(30) NOT NULL,
  `place_id` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_contact`, `user_address`, `user_mail`, `user_photo`, `user_password`, `place_id`) VALUES
(8, 'Mathews T', '6282530319', 'Pazhayidathu(h) , kudayathoor P.O. , kolapra', 'mathews@gmail.com', 'IMG_20220904_175638_769.jpg', '6282', 1),
(34, 'josh', '5656565656', 'tda', 'josh@gmail.com', '', '6282', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
