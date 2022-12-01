import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaTambahPageRoutingModule } from './anggota_tambah-routing.module';

import { AnggotaTambahPage } from './anggota_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaTambahPageRoutingModule
  ],
  declarations: [AnggotaTambahPage]
})
export class AnggotaTambahPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */