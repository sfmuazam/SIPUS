import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BukuEditPageRoutingModule } from './buku_edit-routing.module';

import { BukuEditPage } from './buku_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BukuEditPageRoutingModule
  ],
  declarations: [BukuEditPage]
})
export class BukuEditPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */