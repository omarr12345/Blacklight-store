-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2022 at 09:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ff`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `username`, `password`) VALUES
(1, 'fekry_farouk', 'YNOG92GO4RP73*Q5Sj0syN@@W'),
(3, 'Khaled Fouad', 'WhF2rk36YCq1S1%ph!t95Y'),
(4, 'mohamed hussien', 'c@zu0E4CP2H06Tl6Kf&2'),
(5, 'nour fouad', 'i3IRd9Z0zYT$6Wdbobi@E');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `customer_name` text NOT NULL,
  `customer_address` varchar(255) NOT NULL,
  `customer_num` text NOT NULL,
  `customer_sec_num` text NOT NULL,
  `customer_notes` varchar(1000) NOT NULL,
  `product_name` text NOT NULL,
  `product_code` varchar(255) NOT NULL,
  `product_quantity` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`customer_name`, `customer_address`, `customer_num`, `customer_sec_num`, `customer_notes`, `product_name`, `product_code`, `product_quantity`, `id`) VALUES
('fekry_farouk', 'الجيزه', '01119489093', '01005101122', 'اللون أحمر', 'تي شيرت ابيض', 'refe12', 2, 25),
('omar', 'الجيزه', '01119489093', '01224686185', 'el loon azraq', 'تي شيرت ابيض', 'clothes', 3, 28);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(255) NOT NULL,
  `name` text NOT NULL,
  `category` text NOT NULL,
  `details` varchar(255) NOT NULL,
  `price` int(255) NOT NULL,
  `first_img` varchar(255) NOT NULL,
  `sec_img` varchar(255) NOT NULL,
  `third_img` varchar(255) NOT NULL,
  `forth_img` varchar(255) NOT NULL,
  `fifth_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `details`, `price`, `first_img`, `sec_img`, `third_img`, `forth_img`, `fifth_img`) VALUES
(76, 'تي شيرت ابيض', '1EDERFA', '', 75, '61+0ymiicUL._AC_SX679_.jpg', 'download.jpg', 'download (1).jpg', 'plain-white-t-shirt-100-cotton-xlarge-p4619-4119_image.jpg', 'istockphoto-1168895928-612x612.jpg'),
(78, 'تي شيرت ابيض', 'clothes', '', 75, 'istockphoto-1217002161-612x612.jpg', 'istockphoto-1168895928-612x612.jpg', '61+0ymiicUL._AC_SX679_.jpg', 'download (1).jpg', 'download.jpg'),
(79, 'test', '1eedfrr', 'ay haga', 100, 'plain-white-t-shirt-100-cotton-xlarge-p4619-4119_image.jpg', '61+0ymiicUL._AC_SX679_.jpg', 'download.jpg', 'download (1).jpg', 'istockphoto-1217002161-612x612.jpg'),
(80, 'test', '1eedfrr', 'ay haga', 100, 'plain-white-t-shirt-100-cotton-xlarge-p4619-4119_image.jpg', '61+0ymiicUL._AC_SX679_.jpg', 'download.jpg', 'download (1).jpg', 'istockphoto-1217002161-612x612.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
