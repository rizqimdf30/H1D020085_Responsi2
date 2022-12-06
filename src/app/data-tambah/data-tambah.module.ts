import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTambahPageRoutingModule } from './data-tambah-routing.module';

import { DataTambahPage } from './data-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTambahPageRoutingModule
  ],
  declarations: [DataTambahPage]
})
export class DataTambahPageModule {}
