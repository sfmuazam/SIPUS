import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanTambahPageRoutingModule } from './peminjaman_tambah-routing.module';

import { PeminjamanTambahPage } from './peminjaman_tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanTambahPageRoutingModule
  ],
  declarations: [PeminjamanTambahPage]
})
export class PeminjamanTambahPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */