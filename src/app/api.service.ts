import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  //link API
  apiURL() {
    return 'http://localhost/backend';
  }

  getData() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteData(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?no=' + id);
  }

  ambilData(id) {
    return this.http.get(this.apiURL() + '/lihat.php?no=' + id);
  }
}
