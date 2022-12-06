<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];

$no = trim($data['no']);
$nama = $data['nama'];
$layanan = $data['layanan'];
$harga = $data['harga'];

if ($nama != '' and $layanan != '' and $harga != '') {
    $query = mysqli_query($con, "update paket set nama='$nama', layanan='$layanan', harga='$harga' where no='$no'");
    $pesan['status'] = 'sukses';
} else {
    $pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($con);
