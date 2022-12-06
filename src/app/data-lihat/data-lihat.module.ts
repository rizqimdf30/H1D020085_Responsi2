import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DataLihatPageRoutingModule} from './data-lihat-routing.module';

import {DataLihatPage} from './data-lihat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataLihatPageRoutingModule
  ],
  declarations: [DataLihatPage]
})
export class DataLihatPageModule {}
