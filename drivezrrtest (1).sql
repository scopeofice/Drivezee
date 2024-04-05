-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 28, 2024 at 08:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `drivezrrtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `booking_date` date DEFAULT NULL,
  `booking_time` time DEFAULT NULL,
  `booking_day` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id`, `user_id`, `instructor_id`, `booking_date`, `booking_time`, `booking_day`) VALUES
(1, 1, 1, '2024-03-01', '12:00:00', 'Monday'),
(2, 2, 2, '2024-03-02', '13:00:00', 'Tuesday'),
(3, 3, 3, '2024-03-03', '14:00:00', 'Wednesday');

-- --------------------------------------------------------

--
-- Table structure for table `instructors`
--

CREATE TABLE `instructors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructors`
--

INSERT INTO `instructors` (`id`, `name`) VALUES
(1, 'John Doe'),
(2, 'Jane Smith'),
(3, 'Michael Johnson');

-- --------------------------------------------------------

--
-- Table structure for table `instructor_schedule`
--

CREATE TABLE `instructor_schedule` (
  `id` int(11) NOT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `day_of_week` varchar(10) DEFAULT NULL,
  `time_slot` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `instructor_schedule`
--

INSERT INTO `instructor_schedule` (`id`, `instructor_id`, `day_of_week`, `time_slot`) VALUES
(1, 1, 'Monday', '12:00:00'),
(2, 1, 'Tuesday', '13:00:00'),
(3, 1, 'Wednesday', '14:00:00'),
(4, 2, 'Monday', '15:00:00'),
(5, 2, 'Tuesday', '16:00:00'),
(6, 2, 'Wednesday', '17:00:00'),
(7, 2, 'Monday', '12:00:00'),
(8, 2, 'Tuesday', '13:00:00'),
(9, 2, 'Wednesday', '14:00:00'),
(10, 1, 'Monday', '15:00:00'),
(11, 1, 'Tuesday', '16:00:00'),
(12, 1, 'Wednesday', '17:00:00'),
(13, 1, 'Wednesday', '12:00:00'),
(14, 1, 'Wednesday', '12:00:00'),
(15, 1, 'Wednesday', '12:00:00'),
(16, 1, 'Wednesday', '12:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `id` int(11) NOT NULL,
  `day_of_week` varchar(10) DEFAULT NULL,
  `time_slot` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`id`, `day_of_week`, `time_slot`) VALUES
(1, 'Monday', '12:00:00'),
(2, 'Monday', '13:00:00'),
(3, 'Monday', '14:00:00'),
(4, 'Monday', '15:00:00'),
(5, 'Monday', '16:00:00'),
(6, 'Monday', '17:00:00'),
(7, 'Monday', '18:00:00'),
(8, 'Monday', '19:00:00'),
(9, 'Tuesday', '12:00:00'),
(10, 'Tuesday', '13:00:00'),
(11, 'Tuesday', '14:00:00'),
(12, 'Tuesday', '15:00:00'),
(13, 'Tuesday', '16:00:00'),
(14, 'Tuesday', '17:00:00'),
(15, 'Tuesday', '18:00:00'),
(16, 'Tuesday', '19:00:00'),
(17, 'Wednesday', '12:00:00'),
(18, 'Wednesday', '13:00:00'),
(19, 'Wednesday', '14:00:00'),
(20, 'Wednesday', '15:00:00'),
(21, 'Wednesday', '16:00:00'),
(22, 'Wednesday', '17:00:00'),
(23, 'Wednesday', '18:00:00'),
(24, 'Wednesday', '19:00:00'),
(25, 'Thursday', '12:00:00'),
(26, 'Thursday', '13:00:00'),
(27, 'Thursday', '14:00:00'),
(28, 'Thursday', '15:00:00'),
(29, 'Thursday', '16:00:00'),
(30, 'Thursday', '17:00:00'),
(31, 'Thursday', '18:00:00'),
(32, 'Thursday', '19:00:00'),
(33, 'Friday', '12:00:00'),
(34, 'Friday', '13:00:00'),
(35, 'Friday', '14:00:00'),
(36, 'Friday', '15:00:00'),
(37, 'Friday', '16:00:00'),
(38, 'Friday', '17:00:00'),
(39, 'Friday', '18:00:00'),
(40, 'Friday', '19:00:00'),
(41, 'Saturday', '12:00:00'),
(42, 'Saturday', '13:00:00'),
(43, 'Saturday', '14:00:00'),
(44, 'Saturday', '15:00:00'),
(45, 'Saturday', '16:00:00'),
(46, 'Saturday', '17:00:00'),
(47, 'Saturday', '18:00:00'),
(48, 'Saturday', '19:00:00'),
(49, 'Sunday', '12:00:00'),
(50, 'Sunday', '13:00:00'),
(51, 'Sunday', '14:00:00'),
(52, 'Sunday', '15:00:00'),
(53, 'Sunday', '16:00:00'),
(54, 'Sunday', '17:00:00'),
(55, 'Sunday', '18:00:00'),
(56, 'Sunday', '19:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- Indexes for table `instructors`
--
ALTER TABLE `instructors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `instructor_schedule`
--
ALTER TABLE `instructor_schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `instructors`
--
ALTER TABLE `instructors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `instructor_schedule`
--
ALTER TABLE `instructor_schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`);

--
-- Constraints for table `instructor_schedule`
--
ALTER TABLE `instructor_schedule`
  ADD CONSTRAINT `instructor_schedule_ibfk_1` FOREIGN KEY (`instructor_id`) REFERENCES `instructors` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
