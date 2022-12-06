import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataTambahPage } from './data-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: DataTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataTambahPageRoutingModule {}
