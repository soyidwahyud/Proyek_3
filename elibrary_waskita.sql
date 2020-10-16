-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 16, 2020 at 03:37 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elibrary_waskita`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id_admin` int(11) NOT NULL,
  `username_admin` varchar(100) NOT NULL,
  `email_admin` varchar(100) NOT NULL,
  `password_admin` varchar(100) NOT NULL,
  `nama_admin` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_admin`
--

INSERT INTO `tbl_admin` (`id_admin`, `username_admin`, `email_admin`, `password_admin`, `nama_admin`) VALUES
(1, 'admin', 'admin@yahoo.com', '$2b$12$gLetl6Pp4Jcp3q8U8H8MHOtfPWbQcmqfRwSaJvIYWmeyIGO9a/2x2', 'admin'),
(2, 'soyid', 'soyid@ymail.com', '$2b$12$Nzibi0tfYYWC.6ih1cZZqOClkt4fyZee/hovMPfpcj91.vIkf2.xG', 'soyid');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_buku`
--

CREATE TABLE `tbl_buku` (
  `id_buku` int(11) NOT NULL,
  `kode_buku` varchar(100) NOT NULL,
  `nama_buku` varchar(100) NOT NULL,
  `id_jenis` int(5) NOT NULL,
  `id_penerbit` int(5) NOT NULL,
  `id_penulis` int(5) NOT NULL,
  `gambar` varchar(100) NOT NULL,
  `userfile` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_buku`
--

INSERT INTO `tbl_buku` (`id_buku`, `kode_buku`, `nama_buku`, `id_jenis`, `id_penerbit`, `id_penulis`, `gambar`, `userfile`) VALUES
(1, 'A1', 'Tata Ruang Sungai Aluvial Dan Sungai Non-Aluvial Cat Dan Non', 2, 1, 1, 'Buku1.jpg', 'Buku1.pdf'),
(2, 'A2', 'Turbin Air, Teori dan Dasar Perencanaan', 2, 2, 1, 'Buku2.jpg', 'Buku2.pdf'),
(3, 'A3', 'Memahami Beton Bertulang', 2, 1, 2, 'Buku3.jpg', 'Buku3.pdf'),
(4, 'A4', 'Termodinamika Dasar Mesin Konversi Energi', 2, 1, 3, 'Buku4.jpg', 'Buku4.pdf');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jabatan`
--

CREATE TABLE `tbl_jabatan` (
  `id_jabatan` int(11) NOT NULL,
  `jabatan` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_jabatan`
--

INSERT INTO `tbl_jabatan` (`id_jabatan`, `jabatan`) VALUES
(1, 'Direktur Utama'),
(2, 'Kepala Divisi IT');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_jenis`
--

CREATE TABLE `tbl_jenis` (
  `id_jenis` int(11) NOT NULL,
  `jenis_buku` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_jenis`
--

INSERT INTO `tbl_jenis` (`id_jenis`, `jenis_buku`) VALUES
(1, 'Bisnis dan Ekonomi'),
(2, 'Teknik'),
(3, 'Komputer dan Teknologi');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kriteria`
--

CREATE TABLE `tbl_kriteria` (
  `id_kriteria` int(11) NOT NULL,
  `kode` varchar(4) NOT NULL,
  `nama_kriteria` varchar(100) NOT NULL,
  `bobot` float NOT NULL,
  `tipe_kriteria` enum('Benefit','Cost') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_kriteria`
--

INSERT INTO `tbl_kriteria` (`id_kriteria`, `kode`, `nama_kriteria`, `bobot`, `tipe_kriteria`) VALUES
(1, 'C1', 'Jumlah Halaman pada Buku', 0.25, 'Cost'),
(2, 'C2', 'Sasaran Buku Jelas dan Spesifik', 0.75, 'Benefit'),
(3, 'C3', 'Penjelasan tentang tujuan penulisan Buku', 0.53, 'Benefit'),
(4, 'C4', 'Hal baru pada Buku tersebut', 1.2, 'Benefit'),
(5, 'C5', 'Informasi Fiktif pada Buku', 1.34, 'Cost');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_nilai_buku`
--

CREATE TABLE `tbl_nilai_buku` (
  `id_nilai_buku` int(11) NOT NULL,
  `id_buku` int(11) NOT NULL,
  `id_kriteria` int(11) NOT NULL,
  `nilai_buku` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_nilai_buku`
--

INSERT INTO `tbl_nilai_buku` (`id_nilai_buku`, `id_buku`, `id_kriteria`, `nilai_buku`) VALUES
(1, 1, 1, 5),
(2, 1, 2, 8),
(3, 1, 3, 7),
(4, 1, 4, 8),
(5, 1, 5, 4);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_penerbit`
--

CREATE TABLE `tbl_penerbit` (
  `id_penerbit` int(11) NOT NULL,
  `nama_penerbit` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_penerbit`
--

INSERT INTO `tbl_penerbit` (`id_penerbit`, `nama_penerbit`) VALUES
(1, 'Erlangga'),
(2, 'Yudhistira');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_penulis`
--

CREATE TABLE `tbl_penulis` (
  `id_penulis` int(11) NOT NULL,
  `penulis` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_penulis`
--

INSERT INTO `tbl_penulis` (`id_penulis`, `penulis`) VALUES
(1, 'Soyid Wahyu D'),
(2, 'Sofiul'),
(3, 'Devany');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `username_user` varchar(100) NOT NULL,
  `email_user` varchar(100) NOT NULL,
  `password_user` varchar(100) NOT NULL,
  `nama_user` varchar(100) NOT NULL,
  `id_jabatan` int(4) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `telp` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `username_user`, `email_user`, `password_user`, `nama_user`, `id_jabatan`, `alamat`, `telp`) VALUES
(1, 'wahyu', 'wahyu@yahoo.com', '$2b$12$uk2tkeOJ2Z5j1SNUFcf94OOP.2p2w5pmUfqeO6X95jiTpdpTDyt0.', 'wahyu', 2, 'Jalan Jakartaa', '080989999');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `tbl_buku`
--
ALTER TABLE `tbl_buku`
  ADD PRIMARY KEY (`id_buku`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `id_penerbit` (`id_penerbit`),
  ADD KEY `id_penulis` (`id_penulis`);

--
-- Indexes for table `tbl_jabatan`
--
ALTER TABLE `tbl_jabatan`
  ADD PRIMARY KEY (`id_jabatan`);

--
-- Indexes for table `tbl_jenis`
--
ALTER TABLE `tbl_jenis`
  ADD PRIMARY KEY (`id_jenis`);

--
-- Indexes for table `tbl_kriteria`
--
ALTER TABLE `tbl_kriteria`
  ADD PRIMARY KEY (`id_kriteria`);

--
-- Indexes for table `tbl_nilai_buku`
--
ALTER TABLE `tbl_nilai_buku`
  ADD PRIMARY KEY (`id_nilai_buku`),
  ADD KEY `id_buku` (`id_buku`),
  ADD KEY `id_kriteria` (`id_kriteria`);

--
-- Indexes for table `tbl_penerbit`
--
ALTER TABLE `tbl_penerbit`
  ADD PRIMARY KEY (`id_penerbit`);

--
-- Indexes for table `tbl_penulis`
--
ALTER TABLE `tbl_penulis`
  ADD PRIMARY KEY (`id_penulis`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_jabatan` (`id_jabatan`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_buku`
--
ALTER TABLE `tbl_buku`
  ADD CONSTRAINT `tbl_buku_ibfk_1` FOREIGN KEY (`id_jenis`) REFERENCES `tbl_jenis` (`id_jenis`),
  ADD CONSTRAINT `tbl_buku_ibfk_2` FOREIGN KEY (`id_penerbit`) REFERENCES `tbl_penerbit` (`id_penerbit`),
  ADD CONSTRAINT `tbl_buku_ibfk_3` FOREIGN KEY (`id_penulis`) REFERENCES `tbl_penulis` (`id_penulis`);

--
-- Constraints for table `tbl_nilai_buku`
--
ALTER TABLE `tbl_nilai_buku`
  ADD CONSTRAINT `tbl_nilai_buku_ibfk_1` FOREIGN KEY (`id_buku`) REFERENCES `tbl_buku` (`id_buku`),
  ADD CONSTRAINT `tbl_nilai_buku_ibfk_2` FOREIGN KEY (`id_kriteria`) REFERENCES `tbl_kriteria` (`id_kriteria`);

--
-- Constraints for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD CONSTRAINT `tbl_user_ibfk_1` FOREIGN KEY (`id_jabatan`) REFERENCES `tbl_jabatan` (`id_jabatan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
