<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$nik=trim($data['nik']);
$nama=trim($data['nama']);
$alamat=trim($data['alamat']);
$peran=trim($data['peran']);
$no_telp=trim($data['no_telp']);
$password=trim($data['password']);

if($nik!='' and $nama!='' and $alamat!='' and $peran!='' and $no_telp!='' and $password!=''){
$query = mysqli_query($koneksi,"insert into anggota(nik,nama,alamat,peran,no_telp,password) values('$nik','$nama','$alamat','$peran','$no_telp',md5('$password'))");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
