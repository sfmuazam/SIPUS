import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnggotaEditPageRoutingModule } from './anggota_edit-routing.module';

import { AnggotaEditPage } from './anggota_edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnggotaEditPageRoutingModule
  ],
  declarations: [AnggotaEditPage]
})
export class AnggotaEditPageModule {}




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */