import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataLihatPage } from './data-lihat.page';

const routes: Routes = [
  {
    path: '',
    component: DataLihatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataLihatPageRoutingModule {}
