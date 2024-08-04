-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2024 at 09:51 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `auth_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@admin.com', '$2b$10$NmUKmt0kUOWloOLHCBaZ6e7r8I/sEqNE45.8kn0lyZWqyLm2XjS8O', NULL, '2024-07-10 19:29:11', '2024-07-10 19:53:08'),
(2, 'superadmin', 'superadmin@superadmin.com', '$2b$10$9qxT7QVL0C3AVYrPbhX7keu2TFcbiUw4XXEazExJspkPHPboCqmum', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJzdXBlcmFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluQHN1cGVyYWRtaW4uY29tIiwiaWF0IjoxNzIwNjQyNzk1LCJleHAiOjE3MjA3MjkxOTV9.H0cfA3hU7oUF8KqUQuTwEgs_pES-e016Sea3O4zpzoQ', '2024-07-10 19:29:31', '2024-07-10 20:19:55'),
(3, 'user', 'user@user.com', '$2b$10$nLhX7GGjyXk0mkimd3oRY.twfrbV7YYg19n0Me1OCsizj9uXxExZW', NULL, '2024-07-10 19:33:19', '2024-07-10 19:33:19'),
(4, 'test', 'test@gmail.com', '$2b$10$AJctCC.9vpV4VQq9uB4RsuD90A8t75k5CCOl9qL6SI0qcyQvvUr/S', NULL, '2024-07-23 08:43:31', '2024-08-04 07:50:05'),
(5, 'xo', 'xo@gmail.com', '$2b$10$.eZkmteLyjuq./kMn4RnNeKo7JvEcUpBYTsYMBtP4g3tZEemtJMYa', NULL, '2024-07-25 03:39:07', '2024-07-25 03:55:26'),
(6, 'Joe', 'joe@gmail.com', '$2b$10$hDNu2O/9zABhIjMVQC6Agu4CluB2d.pgrGcPlHB2T/0SyjNuP9636', NULL, '2024-07-25 04:04:18', '2024-07-25 04:09:08'),
(7, 'Doe', 'doe@gmail.com', '$2b$10$t2iSpzirq32nfpiJEJTxnOJOBq.IHnTSfjj.dxWswvGvxDV/IdsUu', NULL, '2024-07-25 04:10:42', '2024-07-25 04:14:50');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
