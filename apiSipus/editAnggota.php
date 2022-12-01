<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_anggota=trim($data['id_anggota']);
$nik=trim($data['nik']);
$nama=trim($data['nama']);
$alamat=trim($data['alamat']);
$peran=trim($data['peran']);
$no_telp=trim($data['no_telp']);
$password=trim($data['password']);

$query = mysqli_query($koneksi,"update anggota set nik='$nik',nama='$nama',alamat='$alamat',peran='$peran',no_telp='$no_telp',password='$password' where id_anggota='$id_anggota'");
echo json_encode($pesan);
echo mysqli_error($koneksi);



//a
/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
