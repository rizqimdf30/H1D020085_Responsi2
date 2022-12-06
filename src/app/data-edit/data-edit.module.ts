import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DataEditPageRoutingModule} from './data-edit-routing.module';

import {DataEditPage} from './data-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataEditPageRoutingModule
  ],
  declarations: [DataEditPage]
})
export class DataEditPageModule {}
