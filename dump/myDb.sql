-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 03-11-2021 a las 12:16:17
-- Versión del servidor: 8.0.27
-- Versión de PHP: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` timestamp NOT NULL,
  `updatedAt` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `nombre`, `email`, `estado`, `createdAt`, `updatedAt`) VALUES
(1, 'Fabian Gomez', 'test1@test.com', 1, '0000-00-00 00:00:00', '2021-11-02 12:38:23'),
(2, 'Juan Perez', 'test2@test.com', 1, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'Eduardo Lopez', 'test3@test.com', 0, '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Javier Moralez', 'test4@test.com', 1, '2021-11-02 09:45:10', '2021-11-02 09:45:10'),
(8, 'Mario Quinteros', 'test5@test.com', 1, '2021-11-03 01:38:15', '2021-11-03 01:38:15'),
(9, 'Federico Bracamonte', 'test6@test.com', 1, '2021-11-03 01:42:38', '2021-11-03 01:42:38'),
(10, 'Jacinto Troncoso', 'test9@test.com', 1, '2021-11-03 03:43:30', '2021-11-03 03:43:30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
