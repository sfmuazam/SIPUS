<?php
require 'koneksi.php';

if (isset($_FILES['image'])) {
    $nama = $_FILES['image']['name'];
    $nama_cover = rand() . '-' . $nama;
    $upload = '../src/assets/cover/' . $nama_cover;
    move_uploaded_file($_FILES['image']['tmp_name'], $upload);
    mysqli_query($koneksi, "insert into buku(cover, judul) values('$nama_cover', 'temp')");



    echo json_encode($_FILES['image']);
}

// function uploadImage($imgName)
// {
//     if (isset($_FILES[$imgName])) {
//         $img_tmp = $_FILES[$imgName]['tmp_name'];
//         $img_folder = 'cover/';
//         if (file_exists($img_tmp)) {
//             $taille_maxi = 1000000;
//             $taille = filesize($_FILES[$imgName]['tmp_name']);
//             $imgsize = getimagesize($_FILES[$imgName]['tmp_name']);
//             $extensions = array('.png', '.gif', '.jpg', '.jpeg');
//             $extension = strtolower(strrchr($_FILES[$imgName]['name'], '.'));

//             if ($imgsize['mime'] == 'image/jpeg') {
//                 $img_src = imagecreatefromjpeg($img_tmp);
//             } elseif ($imgsize['mime'] == 'image/png') {
//                 $img_src = imagecreatefrompng($img_tmp);
//             } elseif ($imgsize['mime'] == 'image/gif') {
//                 $img_src = imagecreatefromgif($img_tmp);
//             }
//             $image_finale = imagecreatetruecolor(380, 380);

//             imagecopyresampled($image_finale, $img_src, 0, 0, 0, 0, 380, 380, $imgsize[0], $imgsize[1]);
//             $imgName = $img_folder . rand() . '.jpg';
//             imagejpeg($image_finale, $imgName);
//             return $imgName;
//         }
//     }
// }

// if (isset($_FILES['image'])) {
//     $img = uploadImage('image');
//     mysqli_query($koneksi, "insert into buku(cover, judul) values('$img', 'temp')");

//     echo json_encode($_FILES['image']);
// }
