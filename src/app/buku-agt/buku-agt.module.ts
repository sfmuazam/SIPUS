import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuAgtPageRoutingModule } from './buku-agt-routing.module';

import { BukuAgtPage } from './buku-agt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuAgtPageRoutingModule
  ],
  declarations: [BukuAgtPage]
})
export class BukuAgtPageModule {}
