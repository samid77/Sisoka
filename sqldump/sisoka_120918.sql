-- Adminer 4.6.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `data_guru`;
CREATE TABLE `data_guru` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `NIP` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama_id` int(11) NOT NULL,
  `jenis_kelamin` set('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `gelar` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `jabatan` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_telp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NIP` (`NIP`),
  KEY `agama_id` (`agama_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `data_guru` (`id`, `nama_lengkap`, `NIP`, `tempat_lahir`, `tanggal_lahir`, `agama_id`, `jenis_kelamin`, `gelar`, `jabatan`, `alamat`, `nomor_telp`, `password`) VALUES
(1,	'Siti Badriyah',	'1306444491',	'Jakarta',	'1984-02-11',	1,	'Wanita',	'S.Pd',	'Guru',	'Jalan Kalibata Indah',	'08128543822',	'1306444491'),
(2,	'Miftahul Alam',	'1306454391',	'Kediri',	'1977-01-21',	1,	'Pria',	'S.Pd',	'Guru',	'Jalan Jenderal Ahmad Yani',	'08123849320',	'1306454391'),
(3,	'Nur Santaria',	'1302744487',	'Medan',	'1988-07-24',	2,	'Wanita',	'S.Pd',	'Guru',	'Jalan Ancol',	'08137283927',	'1302744487'),
(4,	'Jonathan Christianto',	'1475444823',	'Palembang',	'1993-08-20',	3,	'Pria',	'S.Pd',	'Guru',	'Jalan Pancoran Mas',	'08438201823',	'1475444823'),
(5,	'Ade Putra',	'1421283491',	'Riau',	'0000-00-00',	4,	'Pria',	'S.Pd',	'Guru',	'Jalan Palmerah',	'08238291822',	'1421283491'),
(6,	'Lisa Khairunnisa',	'1323817231',	'Jakarta',	'1988-04-11',	1,	'Wanita',	'S.Pd',	'Guru',	'Jalan Haji Naim',	'08372837199',	'1323817231'),
(7,	'Putri Mayangsari',	'1271428411',	'Jombang',	'1982-09-11',	1,	'Wanita',	'S.Pd',	'Guru',	'Jalan Mampang',	'08192381922',	'1271428411'),
(8,	'Vincent Wardhana',	'1825344211',	'Jakarta',	'1995-08-01',	2,	'Pria',	'S.Pd',	'Guru',	'Jalan Palmerah',	'08132839200',	'1825344211'),
(9,	'Angelita Wisaputra',	'1881442331',	'Solo',	'1997-02-10',	3,	'Wanita',	'S.Pd',	'Guru',	'Jalan Sudirman',	'08238291022',	'1881442331'),
(10,	'Willy Jodhi Sangkala',	'1321344821',	'Bandung',	'1988-11-02',	1,	'Pria',	'S.Pd',	'Guru',	'Jalan Kebagusan',	'08123829112',	'1321344821');

DROP TABLE IF EXISTS `data_siswa`;
CREATE TABLE `data_siswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `NIDN` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tempat_lahir` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `agama_id` int(11) NOT NULL,
  `jenis_kelamin` set('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `nama_ayah` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pekerjaan_ayah` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nama_ibu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `pekerjaan_ibu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_telp` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_orangtua` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `NIDN` (`NIDN`),
  KEY `agama_id` (`agama_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `data_siswa` (`id`, `nama_lengkap`, `NIDN`, `tempat_lahir`, `tanggal_lahir`, `agama_id`, `jenis_kelamin`, `nama_ayah`, `pekerjaan_ayah`, `nama_ibu`, `pekerjaan_ibu`, `alamat`, `nomor_telp`, `nomor_orangtua`) VALUES
(1,	'Okki Satria',	'00001',	'Bengkulu',	'1994-10-11',	1,	'Pria',	'ayahOkki',	'pekerjaanAyahOkki',	'ibuOkki',	'pekerjaanIbuOkki',	'alamatOkki',	'0217970212',	'08128181811'),
(2,	'Laura Susanti',	'00002',	'Bogor',	'1991-11-11',	2,	'Wanita',	'ayahLaura',	'pekerjaanAyahLaura',	'ibuLaura',	'pekerjaanIbuLaura',	'alamatLaura',	'0217970212',	'08128181811'),
(3,	'Dimas Septyanto',	'00003',	'Bekasi',	'1991-11-11',	1,	'Pria',	'ayahDimas',	'pekerjaanAyahDimas',	'ibuDimas',	'pekerjaanIbuDimas',	'alamatDimas',	'0217970212',	'08128181811'),
(4,	'Asril Irsadi',	'00004',	'Ciputat',	'1991-11-11',	1,	'Pria',	'ayahAsril',	'pekerjaanAyahAsril',	'ibuAsril',	'pekerjaanIbuAsril',	'alamatAsril',	'0217970212',	'08128181811'),
(5,	'Alfianida',	'00005',	'Jakarta',	'1991-11-11',	1,	'Wanita',	'ayahFian',	'pekerjaanAyahFian',	'ibuFian',	'pekerjaanIbuFian',	'alamatFian',	'0217970212',	'08128181811'),
(6,	'Sarah Sholihatul',	'00006',	'Jakarta',	'1991-11-11',	1,	'Wanita',	'ayahSarah',	'pekerjaanAyahSarah',	'ibuSarah',	'pekerjaanIbuSarah',	'alamatSarah',	'0217970212',	'08128181811'),
(7,	'Ahmad Ichsan Baihaqi',	'00007',	'Jakarta',	'1991-11-11',	1,	'Pria',	'ayahIchsan',	'pekerjaanAyahIchsan',	'ibuIchsan',	'pekerjaanIbuIchsan',	'alamatIchsan',	'0217970212',	'08128181811'),
(8,	'Rendi Pradana',	'00008',	'Jakarta',	'1991-11-11',	1,	'Pria',	'ayahRendi',	'pekerjaanAyahRendi',	'ibuRendi',	'pekerjaanIbuRendi',	'alamatRendi',	'0217970212',	'08128181811'),
(9,	'Mutiara Ayu Ramadhani',	'00009',	'Bekasi',	'1991-11-11',	1,	'Wanita',	'ayahMutiara',	'pekerjaanAyahMutiara',	'ibuMutiara',	'pekerjaanIbuMutiara',	'alamatMutiara',	'0217970212',	'08128181811'),
(10,	'Akbar Saputro',	'00010',	'Cakung',	'1991-11-11',	1,	'Pria',	'ayahAkbar',	'pekerjaanAyahAkbar',	'ibuAkbar',	'pekerjaanIbuAkbar',	'alamatAkbar',	'0217970212',	'08128181811');

DROP TABLE IF EXISTS `indikator_submateri`;
CREATE TABLE `indikator_submateri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `submateri_id` int(11) NOT NULL,
  `indikator` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` mediumtext COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `submateri_id` (`submateri_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `indikator_submateri` (`id`, `submateri_id`, `indikator`, `deskripsi`) VALUES
(1,	5,	'Yang penting lulus',	'Yang penting lulus'),
(2,	6,	'Yang penting lulus',	'Yang penting lulus'),
(3,	4,	'Yang penting lulus',	'Yang penting lulus'),
(4,	2,	'Yang penting lulus',	'Yang penting lulus'),
(5,	1,	'Yang penting lulus',	'Yang penting lulus'),
(6,	7,	'Yang penting lulus',	'Yang penting lulus'),
(7,	8,	'Yang penting lulus',	'Yang penting lulus'),
(8,	3,	'Yang penting lulus',	'Yang penting lulus'),
(9,	10,	'Yang penting lulus',	'Yang penting lulus'),
(10,	9,	'Yang penting lulus',	'Yang penting lulus');

DROP TABLE IF EXISTS `jadwal`;
CREATE TABLE `jadwal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kelas_id` int(11) NOT NULL,
  `hari_id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  `materi_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `nama_kelas_id` (`nama_kelas_id`),
  KEY `hari_id` (`hari_id`),
  KEY `guru_id` (`guru_id`),
  KEY `materi_id` (`materi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


DROP TABLE IF EXISTS `manajemen_kelas`;
CREATE TABLE `manajemen_kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kelas_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `siswa_id` (`siswa_id`),
  KEY `nama_kelas_id` (`nama_kelas_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `manajemen_kelas` (`id`, `nama_kelas_id`, `siswa_id`) VALUES
(1,	1,	1),
(2,	1,	2),
(3,	3,	3),
(4,	4,	4),
(5,	4,	5),
(6,	6,	6),
(7,	7,	7),
(8,	8,	8),
(9,	9,	9),
(10,	9,	10);

DROP TABLE IF EXISTS `manajemen_walas`;
CREATE TABLE `manajemen_walas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kelas_id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guru_id` (`guru_id`),
  UNIQUE KEY `nama_kelas_id` (`nama_kelas_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_unicode_ci;

INSERT INTO `manajemen_walas` (`id`, `nama_kelas_id`, `guru_id`) VALUES
(1,	1,	1),
(2,	2,	2),
(3,	3,	3),
(4,	4,	4),
(5,	5,	5),
(6,	6,	6),
(7,	7,	7),
(8,	8,	8),
(9,	9,	9);

DROP TABLE IF EXISTS `master_agama`;
CREATE TABLE `master_agama` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `agama` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `master_agama` (`id`, `agama`) VALUES
(1,	'Islam'),
(2,	'Kristen Protestan'),
(3,	'Katolik'),
(4,	'Buddha'),
(5,	'Hindu'),
(6,	'Kong Hu Cu');

DROP TABLE IF EXISTS `master_hari`;
CREATE TABLE `master_hari` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hari` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `master_hari` (`id`, `hari`) VALUES
(1,	'Senin'),
(2,	'Selasa'),
(3,	'Rabu'),
(4,	'Kamis'),
(5,	'Jumat'),
(6,	'Sabtu');

DROP TABLE IF EXISTS `master_jenjang`;
CREATE TABLE `master_jenjang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jenjang` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `master_jenjang` (`id`, `jenjang`) VALUES
(1,	10),
(2,	11),
(3,	12);

DROP TABLE IF EXISTS `master_materi`;
CREATE TABLE `master_materi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `materi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `master_materi` (`id`, `materi`, `deskripsi`) VALUES
(1,	'Matematika',	'Matematika'),
(2,	'Bahasa Indonesia',	'Bahasa Indonesia'),
(3,	'Kimia',	'Kimia'),
(4,	'Fisika',	'Fisika'),
(5,	'Biologi',	'Biologi'),
(6,	'Ekonomi',	'Ekonomi'),
(7,	'Sejarah',	'Sejarah'),
(8,	'Sosiologi',	'Sosiologi'),
(9,	'Agama',	'Agama'),
(10,	'Olahraga',	'Olahraga'),
(11,	'Bahasa Inggris',	'Bahasa Inggris');

DROP TABLE IF EXISTS `master_waktu`;
CREATE TABLE `master_waktu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `waktu` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `master_waktu` (`id`, `waktu`) VALUES
(1,	'08.00 - 09.00'),
(2,	'09.00 - 10.00'),
(3,	'10.00 - 11.00'),
(4,	'11.00 - 12.00'),
(5,	'12.00 - 13.00'),
(6,	'13.00 - 14.00'),
(7,	'14.00 - 15.00'),
(8,	'15.00 - 16.00'),
(9,	'16.00 - 17.00');

DROP TABLE IF EXISTS `nama_kelas`;
CREATE TABLE `nama_kelas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jenjang_id` int(11) NOT NULL,
  `nama_kelas` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jenjang_id` (`jenjang_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `nama_kelas` (`id`, `jenjang_id`, `nama_kelas`) VALUES
(1,	1,	'IPA 1'),
(2,	1,	'IPA 2'),
(3,	1,	'IPS 1'),
(4,	2,	'IPA 1'),
(5,	2,	'IPA 2'),
(6,	2,	'IPS 1'),
(7,	3,	'IPA 1'),
(8,	3,	'IPA 2'),
(9,	3,	'IPS 1');

DROP TABLE IF EXISTS `pengajar_materi`;
CREATE TABLE `pengajar_materi` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `guru_id` int(11) NOT NULL,
  `materi_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `guru_id` (`guru_id`),
  KEY `materi_id` (`materi_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `pengajar_materi` (`id`, `guru_id`, `materi_id`) VALUES
(1,	1,	1),
(2,	2,	2),
(3,	3,	3),
(4,	4,	4),
(5,	5,	5),
(6,	6,	6),
(7,	7,	7),
(8,	8,	8),
(9,	9,	9),
(10,	10,	10);

DROP TABLE IF EXISTS `submateri`;
CREATE TABLE `submateri` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `materi_id` int(11) NOT NULL,
  `jenjang_id` int(11) NOT NULL,
  `submateri` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `deskripsi` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `materi_id` (`materi_id`),
  KEY `jenjang_id` (`jenjang_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `submateri` (`id`, `materi_id`, `jenjang_id`, `submateri`, `deskripsi`) VALUES
(1,	9,	1,	'Iman Kepada Allah SWT',	'Agama'),
(2,	9,	2,	'Ibadah Haji',	'Agama'),
(3,	2,	1,	'Puisi',	'Bindo'),
(4,	11,	2,	'Grammar',	'Bing'),
(5,	5,	3,	'Alat Reproduksi Manusia',	'Biologi'),
(6,	4,	2,	'Gaya',	'Fisika'),
(7,	1,	3,	'Integral',	'Matematika'),
(8,	10,	1,	'Kayang',	'Olahraga'),
(9,	3,	1,	'Stoikiometri',	'Kimia'),
(10,	7,	2,	'Sejarah Proklamasi',	'Sejarah');

-- 2018-09-12 07:19:34
