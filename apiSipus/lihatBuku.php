
<?php 
require 'koneksi.php';
$data = [];
$kd_buku = $_GET['kd_buku'];
$query = mysqli_query($koneksi,"select * from buku where kd_buku ='$kd_buku'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);





/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */