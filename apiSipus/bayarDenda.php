<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);

$pesan = [];

$id_peminjaman = $_GET['id_peminjaman'];
$query = mysqli_query($koneksi, "select * from peminjaman where id_peminjaman ='$id_peminjaman'");
$row = mysqli_fetch_array($query);
if($row['status_denda'] == trim('Belum Bayar')){
  $status_denda = 'Sudah Bayar';

$query = mysqli_query($koneksi, "update peminjaman set status_denda='$status_denda' where id_peminjaman='$id_peminjaman'");

http_response_code(201);
	$pesan['status'] = 'sukses';

}else{
  http_response_code(422);
	$pesan['status'] = 'gagal';
}
echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
