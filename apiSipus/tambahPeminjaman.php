<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_anggota=trim($data['id_anggota']);
$kd_buku=trim($data['kd_buku']);
$tanggal_peminjaman=trim($data['tanggal_peminjaman']);
$batas_pengembalian=date('Y-m-d', strtotime("+7 day", strtotime($tanggal_peminjaman)));
$status_pengembalian=trim($data['status_pengembalian']);

$query = mysqli_query($koneksi,"insert into peminjaman(id_anggota,kd_buku,tanggal_peminjaman,batas_pengembalian,tanggal_pengembalian,status_pengembalian,denda,status_denda) values('$id_anggota','$kd_buku','$tanggal_peminjaman','$batas_pengembalian',NULL,'$status_pengembalian',NULL,NULL)");



echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
