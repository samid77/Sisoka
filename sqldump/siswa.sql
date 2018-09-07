-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `siswa`;
CREATE TABLE `siswa` (
  `id` int(30) NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_siswa` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `tempat_lahir` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama_ayah` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pekerjaan_ayah` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `nama_ibu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `pekerjaan_ibu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `agama` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `jenis_kelamin` set('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `siswa` (`id`, `nama_lengkap`, `nomor_siswa`, `tanggal_lahir`, `tempat_lahir`, `nama_ayah`, `pekerjaan_ayah`, `nama_ibu`, `pekerjaan_ibu`, `agama`, `jenis_kelamin`, `alamat`, `created`) VALUES
(1,	'Achmad Ichsan Baihaqi',	'IDN0001',	'1992-09-19',	'Jakarta',	'Ayahichsan',	'',	'Ibuichsan',	'',	'Islam',	'Pria',	'Jalan Kalibata, Oregon, Utah',	'2018-09-07 02:57:55'),
(2,	'Dimas Septyanto',	'IDN0002',	'1992-09-19',	'Jakarta',	'Ayahdimas',	'',	'Ibudimas',	'',	'Islam',	'Pria',	'Jalan Kalibata, Oregon, Utah',	'2018-09-06 19:57:55'),
(3,	'Esa Adama',	'IDN0003',	'1992-09-19',	'Jakarta',	'Ayahesa',	'',	'Ibuesa',	'',	'Islam',	'Pria',	'Jalan Kalibata, Oregon, Utah',	'2018-09-06 19:57:55'),
(4,	'Okki Satria',	'IDN0004',	'1992-09-19',	'Jakarta',	'Ayahokki',	'',	'Ibuokki',	'',	'Islam',	'Pria',	'Jalan Kalibata, Oregon, Utah',	'2018-09-06 19:57:55'),
(5,	'John Doe',	'IDN0005',	'1992-09-19',	'Jakarta',	'Ayahjohn',	'',	'Ibujohn',	'',	'Islam',	'Pria',	'Jalan Kalibata, Oregon, Utah',	'2018-09-06 19:57:55');

-- 2018-09-07 04:25:22
