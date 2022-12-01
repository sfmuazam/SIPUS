import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuTambahPageRoutingModule } from './buku_tambah-routing.module';

import { BukuTambahPage } from './buku_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuTambahPageRoutingModule
  ],
  declarations: [BukuTambahPage]
})
export class BukuTambahPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */