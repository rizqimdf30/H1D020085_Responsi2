<?php
require 'koneksi.php';
$data = [];
$no = $_GET['no'];
$query = mysqli_query($con, "select * from paket where no ='$no'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($con);
