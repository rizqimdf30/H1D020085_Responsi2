import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-data-lihat',
  templateUrl: './data-lihat.page.html',
  styleUrls: ['./data-lihat.page.scss'],
})
export class DataLihatPage implements OnInit {
  no: any;
  nama: any;
  layanan: any;
  harga: any;
  data: any[];

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
        this.data = res;
      },
      (error: any) => {
        console.log('error', error);
        alert('Gagal Ambil Data');
      }
    );
  }
}
