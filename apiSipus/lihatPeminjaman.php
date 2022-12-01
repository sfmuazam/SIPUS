
<?php
require 'koneksi.php';
$data = [];
!$id_anggota = $_GET['id_anggota'];

$urutan_list = 1;
if($id_anggota != NULL){
  $query = mysqli_query($koneksi,"select * from peminjaman join anggota on peminjaman.id_anggota=anggota.id_anggota join buku on peminjaman.kd_buku=buku.kd_buku where peminjaman.id_anggota='$id_anggota'");
while ($row = mysqli_fetch_object($query)) {
    $row->urutan_list = $urutan_list++;
	$data[] = $row;

}
}

echo json_encode($data);
echo mysqli_error($koneksi);





/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
