<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$nama = $data['nama'];
$layanan = $data['layanan'];
$harga = $data['harga'];

if ($nama != '' and $layanan != '' and $harga != '') {
	$query = mysqli_query($con, "insert into paket(no,nama,layanan,harga) values('','$nama','$layanan','$harga')");
	$pesan['status'] = 'sukses';
} else {
	$query = mysqli_query($con, "delete from paket where no='$no'");
	$pesan['status'] = 'gagal';
}


echo json_encode($pesan);
echo mysqli_error($con);
