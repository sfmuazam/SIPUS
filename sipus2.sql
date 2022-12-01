-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 01 Des 2022 pada 14.25
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sipus2`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `anggota`
--

CREATE TABLE `anggota` (
  `id_anggota` int(11) NOT NULL,
  `nik` varchar(16) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `peran` varchar(20) NOT NULL,
  `no_telp` varchar(13) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `anggota`
--

INSERT INTO `anggota` (`id_anggota`, `nik`, `nama`, `alamat`, `peran`, `no_telp`, `password`) VALUES
(1, '3525015201880002', 'Faizal Amri', 'Tegal', 'Kepala', '081234567890', 'eea35627c7490d0af5b7b0453e17c75e'),
(2, '3326162610790021', 'Fardan Maula Azizi', 'Tegal', 'Petugas', '089876543210', 'eea35627c7490d0af5b7b0453e17c75e'),
(3, '3326161104810003', 'Safa Muazam', 'Tegal', 'Anggota', '084567891234', 'eea35627c7490d0af5b7b0453e17c75e'),
(4, '1106134107900044', 'Mamank', 'Atlantis', 'Anggota', '012345678900', 'eea35627c7490d0af5b7b0453e17c75e'),
(5, '3525016812770001', 'Morgan', 'Britain', 'Anggota', '043434343434', 'eea35627c7490d0af5b7b0453e17c75e'),
(6, '1106152805930001', 'Kiana', 'Purbalingga', 'Anggota', '809078783443', 'eea35627c7490d0af5b7b0453e17c75e'),
(7, '2233111206970001', 'Eliie', 'Siberia', 'Petugas', '0654123412344', 'eea35627c7490d0af5b7b0453e17c75e');

-- --------------------------------------------------------

--
-- Struktur dari tabel `buku`
--

CREATE TABLE `buku` (
  `kd_buku` int(11) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `judul` varchar(255) NOT NULL,
  `pengarang` varchar(255) NOT NULL,
  `penerbit` varchar(255) NOT NULL,
  `kategori` varchar(255) NOT NULL,
  `lokasi` varchar(15) NOT NULL,
  `ketersediaan` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `buku`
--

INSERT INTO `buku` (`kd_buku`, `cover`, `judul`, `pengarang`, `penerbit`, `kategori`, `lokasi`, `ketersediaan`) VALUES
(1, '61a79978142d7.jpg', 'Naruto Jilid 1', 'Masashi Kishimoto', 'Shounen Jump', 'Fiksi', 'A1', 9),
(2, '61a799828f572.jpg', 'Laskar Pelangi', 'Andrea Hirata', 'Bentang Pustaka', 'Novel', 'B2', 10),
(3, '61a7a5b8b3caa.png', 'One Piece Jilid 91', 'Eiichiro Oda', 'Shueisha', 'Fiksi', 'A1', 10),
(4, 'pembunuhan abc.jpg', 'Pembunuhan ABC (The ABC Murders)', 'Agatha Christie', 'Gramedia Pustaka Utama', 'Novel', 'B2', 5);

-- --------------------------------------------------------

--
-- Struktur dari tabel `peminjaman`
--

CREATE TABLE `peminjaman` (
  `id_peminjaman` int(11) NOT NULL,
  `id_anggota` int(11) NOT NULL,
  `kd_buku` int(11) NOT NULL,
  `tanggal_peminjaman` date NOT NULL,
  `batas_pengembalian` date NOT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `status_pengembalian` varchar(50) NOT NULL,
  `denda` int(11) DEFAULT NULL,
  `status_denda` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `peminjaman`
--

INSERT INTO `peminjaman` (`id_peminjaman`, `id_anggota`, `kd_buku`, `tanggal_peminjaman`, `batas_pengembalian`, `tanggal_pengembalian`, `status_pengembalian`, `denda`, `status_denda`) VALUES
(6, 4, 4, '2022-11-27', '2022-12-04', '2022-12-01', 'Sudah kembali', 0, ''),
(8, 5, 2, '2022-11-15', '2022-11-22', '2022-12-01', 'Sudah kembali', 45000, 'Sudah Bayar'),
(10, 6, 1, '2022-11-22', '2022-11-29', NULL, 'Masih dipinjam', NULL, NULL);

--
-- Trigger `peminjaman`
--
DELIMITER $$
CREATE TRIGGER `balik` AFTER UPDATE ON `peminjaman` FOR EACH ROW UPDATE buku
SET ketersediaan = ketersediaan+1
WHERE kd_buku = new.kd_buku
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `ketersediaan` AFTER INSERT ON `peminjaman` FOR EACH ROW UPDATE buku
SET
	ketersediaan = ketersediaan-1
WHERE 
	kd_buku = new.kd_buku
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `anggota`
--
ALTER TABLE `anggota`
  ADD PRIMARY KEY (`id_anggota`);

--
-- Indeks untuk tabel `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`kd_buku`);

--
-- Indeks untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD PRIMARY KEY (`id_peminjaman`),
  ADD KEY `fk_anggota` (`id_anggota`),
  ADD KEY `fk_buku` (`kd_buku`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `anggota`
--
ALTER TABLE `anggota`
  MODIFY `id_anggota` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `buku`
--
ALTER TABLE `buku`
  MODIFY `kd_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  MODIFY `id_peminjaman` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `peminjaman`
--
ALTER TABLE `peminjaman`
  ADD CONSTRAINT `fk_anggota` FOREIGN KEY (`id_anggota`) REFERENCES `anggota` (`id_anggota`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_buku` FOREIGN KEY (`kd_buku`) REFERENCES `buku` (`kd_buku`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
