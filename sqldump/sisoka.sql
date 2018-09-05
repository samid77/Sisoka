-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2018 at 10:59 AM
-- Server version: 10.1.33-MariaDB
-- PHP Version: 7.2.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sisoka`
--

-- --------------------------------------------------------

--
-- Table structure for table `indikator_submateri`
--

CREATE TABLE `indikator_submateri` (
  `id` int(10) NOT NULL,
  `id_submateri` int(10) NOT NULL,
  `indikator` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jadwal`
--

CREATE TABLE `jadwal` (
  `id` int(10) NOT NULL,
  `id_kelas` int(10) NOT NULL,
  `id_guru` int(10) NOT NULL,
  `id_pelajaran` int(10) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kbm`
--

CREATE TABLE `kbm` (
  `id` int(10) NOT NULL,
  `id_siswa` int(10) NOT NULL,
  `id_jadwal` int(10) NOT NULL,
  `id_guru` int(11) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_guru`
--

CREATE TABLE `master_guru` (
  `id` int(50) NOT NULL,
  `nama_lengkap` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nip` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `tempat_lahir` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pangkat` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pendidikan` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `agama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jenis_kelamin` set('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_pelajaran`
--

CREATE TABLE `master_pelajaran` (
  `id` int(10) NOT NULL,
  `nama_pelajaran` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `master_siswa`
--

CREATE TABLE `master_siswa` (
  `id` int(30) NOT NULL,
  `nama_lengkap` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_siswa` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `tempat_lahir` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama_ayah` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama_ibu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `agama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jenis_kelamin` set('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `submateri`
--

CREATE TABLE `submateri` (
  `id` int(10) NOT NULL,
  `id_pelajaran` int(11) NOT NULL,
  `nama_submateri` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi_submateri` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `indikator_submateri`
--
ALTER TABLE `indikator_submateri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jadwal`
--
ALTER TABLE `jadwal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kbm`
--
ALTER TABLE `kbm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_guru`
--
ALTER TABLE `master_guru`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_pelajaran`
--
ALTER TABLE `master_pelajaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `master_siswa`
--
ALTER TABLE `master_siswa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `indikator_submateri`
--
ALTER TABLE `indikator_submateri`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jadwal`
--
ALTER TABLE `jadwal`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kbm`
--
ALTER TABLE `kbm`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_guru`
--
ALTER TABLE `master_guru`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_pelajaran`
--
ALTER TABLE `master_pelajaran`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `master_siswa`
--
ALTER TABLE `master_siswa`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
