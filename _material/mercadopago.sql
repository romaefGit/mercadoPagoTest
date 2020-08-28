-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2020 a las 17:34:56
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mercadopago`
--
CREATE DATABASE IF NOT EXISTS `mercadopago` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `mercadopago`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idcategory` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idcategory`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Electrónica, Audio y Video', '2020-08-26 16:45:56', '2020-08-26 16:45:56'),
(2, 'iPod', '2020-08-26 16:46:36', '2020-08-26 16:46:36'),
(3, 'Reproductores', '2020-08-26 16:46:54', '2020-08-26 16:46:54'),
(4, 'iPod touch', '2020-08-26 16:47:04', '2020-08-26 16:47:04'),
(5, '32GB', '2020-08-26 16:47:14', '2020-08-26 16:47:14'),
(6, 'iPhone', '2020-08-26 16:47:27', '2020-08-26 16:47:27'),
(7, 'Celulares', '2020-08-26 16:47:34', '2020-08-26 16:47:34'),
(8, '64GB', '2020-08-26 16:47:42', '2020-08-26 16:47:42'),
(9, '16GB', '2020-08-26 16:51:29', '2020-08-26 16:51:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `currencies`
--

CREATE TABLE `currencies` (
  `idcurrency` int(11) NOT NULL,
  `type` varchar(100) NOT NULL,
  `ammount` int(11) NOT NULL,
  `decimal` decimal(10,0) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `currencies`
--

INSERT INTO `currencies` (`idcurrency`, `type`, `ammount`, `decimal`, `createdAt`, `updatedAt`) VALUES
(5, 'COP', 1980, '0', '2020-08-26 16:19:23', '2020-08-26 16:19:23'),
(6, 'COP', 5980, '12', '2020-08-26 16:19:41', '2020-08-26 16:19:41'),
(7, 'COP', 750000, '45', '2020-08-26 16:20:03', '2020-08-26 16:20:03'),
(8, 'COP', 1750000, '0', '2020-08-26 16:20:16', '2020-08-26 16:20:16'),
(9, 'COP', 3050000, '15', '2020-08-28 14:41:32', '2020-08-28 14:41:32'),
(10, 'COP', 1500000, '50', '2020-08-28 14:45:52', '2020-08-28 14:45:52'),
(11, 'COP', 2500000, '50', '2020-08-28 14:48:06', '2020-08-28 14:48:06'),
(12, 'COP', 7500000, '0', '2020-08-28 14:49:24', '2020-08-28 14:49:24');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idproduct` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `place` varchar(100) NOT NULL,
  `picture` varchar(300) NOT NULL,
  `condition` varchar(100) NOT NULL,
  `free_shipping` tinyint(1) NOT NULL,
  `sold_quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idcurrency` int(11) DEFAULT NULL,
  `iduser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idproduct`, `title`, `description`, `place`, `picture`, `condition`, `free_shipping`, `sold_quantity`, `createdAt`, `updatedAt`, `idcurrency`, `iduser`) VALUES
(1, 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Capital Federal', 'ipod.png', 'Nuevo', 0, 234, '2020-08-26 16:22:06', '2020-08-28 14:31:15', 5, 1),
(2, 'Apple Iphone Touch 5g 64gb', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.', 'Mendoza', 'iphone.png', 'Nuevo', 1, 234, '2020-08-26 16:43:14', '2020-08-28 14:31:23', 6, 1),
(3, 'Apple Ipod Touch 5g 16gb', 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?', 'Capital Federal', 'ipod3.png', 'En Stock', 0, 24, '2020-08-26 16:44:37', '2020-08-28 14:31:40', 7, 1),
(4, 'Apple iPhone 5g 32gb Negro Igual A Nuevo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', 'Mendoza', 'iphone2.png', 'En Stock', 1, 444, '2020-08-26 16:45:35', '2020-08-28 14:31:55', 8, 1),
(5, 'Apple MacBook Barra Colores 1tera Nuevo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.', 'Mendoza', 'macbook.jpg', 'Nuevo', 1, 10, '2020-08-28 14:41:48', '2020-08-28 14:41:48', 9, 1),
(6, 'Apple iPad Nuevo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.', 'Mendoza', 'tablet.jpg', 'Nuevo', 1, 1000, '2020-08-28 14:46:01', '2020-08-28 14:46:01', 10, 1),
(7, 'Apple iClock 64GB Compatible', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.', 'Bogotá D.C', 'iclock.png', 'En Stock', 1, 130, '2020-08-28 14:48:10', '2020-08-28 14:48:10', 11, 1),
(8, 'Apple iPhone 11 64GB Carcasa de vidrio Nuevo', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.', 'Bogotá D.C', 'iphone11.jpg', 'En Stock', 1, 7, '2020-08-28 14:49:53', '2020-08-28 14:50:27', 12, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productshascategories`
--

CREATE TABLE `productshascategories` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idproduct` int(11) NOT NULL,
  `idcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productshascategories`
--

INSERT INTO `productshascategories` (`createdAt`, `updatedAt`, `idproduct`, `idcategory`) VALUES
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 1),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 2),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 3),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 4),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 1, 5),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 1),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 6),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 7),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 2, 8),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 1),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 2),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 4),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 3, 9),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 4, 1),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 4, 5),
('0000-00-00 00:00:00', '0000-00-00 00:00:00', 4, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `rol` enum('Normal','Author','Admin') NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`iduser`, `name`, `lastname`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'Romario', 'Estrada', 'Author', '2020-08-26 16:27:46', '2020-08-26 16:27:46');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indices de la tabla `currencies`
--
ALTER TABLE `currencies`
  ADD PRIMARY KEY (`idcurrency`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idproduct`),
  ADD KEY `idcurrency` (`idcurrency`),
  ADD KEY `iduser` (`iduser`);

--
-- Indices de la tabla `productshascategories`
--
ALTER TABLE `productshascategories`
  ADD PRIMARY KEY (`idproduct`,`idcategory`),
  ADD KEY `idcategory` (`idcategory`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`iduser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `currencies`
--
ALTER TABLE `currencies`
  MODIFY `idcurrency` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idproduct` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `iduser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idcurrency`) REFERENCES `currencies` (`idcurrency`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `productshascategories`
--
ALTER TABLE `productshascategories`
  ADD CONSTRAINT `productshascategories_ibfk_1` FOREIGN KEY (`idproduct`) REFERENCES `products` (`idproduct`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `productshascategories_ibfk_2` FOREIGN KEY (`idcategory`) REFERENCES `categories` (`idcategory`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
