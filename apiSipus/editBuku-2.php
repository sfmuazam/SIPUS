<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];

$kd_buku = trim($data['kd_buku']);
$judul = trim($data['judul']);
$pengarang = trim($data['pengarang']);
$penerbit = trim($data['penerbit']);
$kategori = trim($data['kategori']);
$lokasi = trim($data['lokasi']);
$ketersediaan = trim($data['ketersediaan']);

mysqli_query($koneksi, "delete from buku where kd_buku='$kd_buku'");

if ($judul != '' and $pengarang != '' and $penerbit != '' and $kategori != '' and $lokasi != '' and $ketersediaan != '') {
    mysqli_query($koneksi, "update buku set kd_buku='$kd_buku', judul='$judul',pengarang='$pengarang',penerbit='$penerbit',kategori='$kategori',lokasi='$lokasi',ketersediaan='$ketersediaan' where judul='temp'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);



//a
/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
