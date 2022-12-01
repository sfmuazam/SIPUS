import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuPageRoutingModule } from './buku-routing.module';

import { BukuPage } from './buku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuPageRoutingModule
  ],
  declarations: [BukuPage]
})
export class BukuPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */