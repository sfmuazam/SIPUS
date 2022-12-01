<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$id_anggota=trim($data['id_anggota']);
$query = mysqli_query($koneksi,"select * from anggota where id_anggota ='$id_anggota'");
$row = mysqli_fetch_array($query);

$password_lama=trim($data['password_lama']);
$password_baru=trim($data['password_baru']);
$konfirmasi_password_baru=trim($data['konfirmasi_password_baru']);
if(md5($password_lama)!=$row['password']){
  $pesan['status'] = 'Password lama salah';
}else if($password_baru!=$konfirmasi_password_baru){
  $pesan['status'] = 'Konfirmasi password baru berbeda';
}else{
  $pesan['status'] = 'Berhasil';
  $query = mysqli_query($koneksi,"update anggota set password=md5('$password_baru') where id_anggota='$id_anggota'");
}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
