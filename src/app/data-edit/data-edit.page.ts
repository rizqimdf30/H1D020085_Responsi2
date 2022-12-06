import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-data-edit',
  templateUrl: './data-edit.page.html',
  styleUrls: ['./data-edit.page.scss'],
})
export class DataEditPage implements OnInit {
  no: any;
  nama: any;
  layanan: any;
  harga: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.no = param.no;
      console.log(this.no);
      this.ambilData(this.no);
    });
  }

  ngOnInit() {}

  ambilData(no) {
    this._apiService.ambilData(no).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let data = res;
        //console.log(mahasiswa);
        this.nama = data.nama;
        this.layanan = data.layanan;
        this.harga = data.harga;
      },
      (error: any) => {
        console.log('error', error);
        alert('Gagal Ambil Data');
      }
    );
  }

  editData() {
    let url = this._apiService.apiURL() + '/edit.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        no: this.no,
        nama: this.nama,
        layanan: this.layanan,
        harga: this.harga,
      },
    }).then(
      (data) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/home');
      },
      (err) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Edit Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
