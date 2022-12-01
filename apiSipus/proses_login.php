<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id_anggota = trim($data['id_anggota']);
$password = md5(trim($data['password']));
$query = mysqli_query($koneksi, "select * from anggota where id_anggota=$id_anggota and password='$password'");
$jumlah = mysqli_num_rows($query);
if ($jumlah != 0) {
    $value = mysqli_fetch_object($query);
    $pesan['id_anggota'] = $value->id_anggota;
    $pesan['password'] = $value->password;
    $pesan['peran'] = $value->peran;
    $pesan['token'] = time() . '_' . $value->password;
    $pesan['status_login'] = 'berhasil';
} else {
    $pesan['status_login'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
