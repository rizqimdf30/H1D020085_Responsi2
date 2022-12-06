import { Component, OnInit } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { AuthenticationService } from '../services/authentication.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
const USERNAME = 'namasaya';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  no: any;
  nama: any;
  layanan: any;
  harga: any;
  data: any[];

  public username = ''; //init variable nama untuk namauser
  constructor(
    public _apiService: ApiService,
    private authService: AuthenticationService,
    private alertController: AlertController,
    private router: Router,
    public loadingController: LoadingController
  ) {
    this.getData();
  }
  ngOnInit() {
    this.cekSesi();
    console.log('cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getData();
  }

  async getData() {
    this._apiService.getData().subscribe(
      (res: any) => {
        console.log('sukses', res);
        this.data = res;
      },
      (error: any) => {
        console.log('gagal', error);
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Memuat Data',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }

  deleteData(id) {
    this.alertController
      .create({
        header: 'Perhatian',
        subHeader: 'Yakin Menghapus Data Ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('Dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.deleteData(id).subscribe(
                (res: any) => {
                  console.log('sukses', res);
                  this.getData();
                },
                (error: any) => {
                  console.log('error', error);
                  this.alertController
                    .create({
                      header: 'Notifikasi',
                      message: 'Gagal Memuat Data',
                      buttons: ['OK'],
                    })
                    .then((res) => {
                      res.present();
                    });
                }
              );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }

  //ceksesi untuk mengambil nama user
  async cekSesi() {
    const ambilNama = await Preferences.get({ key: USERNAME });
    if (ambilNama && ambilNama.value) {
      let namauser = ambilNama.value;
      this.username = namauser;
    }
  }
  //membuat fungsi logout
  logout() {
    this.authService.logout(); // lempar ke authService lalu cari fungsi logout
    this.router.navigateByUrl('/', { replaceUrl: true }); // alihkan ke halama
  }
}
