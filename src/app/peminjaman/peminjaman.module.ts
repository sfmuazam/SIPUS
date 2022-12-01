import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeminjamanPageRoutingModule } from './peminjaman-routing.module';

import { PeminjamanPage } from './peminjaman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeminjamanPageRoutingModule
  ],
  declarations: [PeminjamanPage]
})
export class PeminjamanPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */