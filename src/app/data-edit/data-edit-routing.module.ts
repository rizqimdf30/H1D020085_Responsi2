import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataEditPage } from './data-edit.page';

const routes: Routes = [
  {
    path: '',
    component: DataEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataEditPageRoutingModule {}
