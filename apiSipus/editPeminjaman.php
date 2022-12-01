<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_peminjaman=trim($data['id_peminjaman']);
$id_anggota=trim($data['id_anggota']);
$kd_buku=trim($data['kd_buku']);
$tanggal_peminjaman=trim($data['tanggal_peminjaman']);
$batas_pengembalian=trim($data['batas_pengembalian']);
$tanggal_pengembalian=trim($data['tanggal_pengembalian']);
$status_pengembalian=trim($data['status_pengembalian']);
$denda=trim($data['denda']);
$status_denda=trim($data['status_denda']);

if($id_anggota!='' and $kd_buku!='' and $tanggal_peminjaman!='' and $batas_pengembalian!='' and $tanggal_pengembalian!='' and $status_pengembalian!='' and $denda!='' and $status_denda!=''){
$query = mysqli_query($koneksi,"update peminjaman set id_anggota='$id_anggota',kd_buku='$kd_buku',tanggal_peminjaman='$tanggal_peminjaman',batas_pengembalian='$batas_pengembalian',tanggal_pengembalian='$tanggal_pengembalian',status_pengembalian='$status_pengembalian',denda='$denda',status_denda='$status_denda' where id_peminjaman='$id_peminjaman'");
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */