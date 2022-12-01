import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassEditPageRoutingModule } from './pass-edit-routing.module';

import { PassEditPage } from './pass-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassEditPageRoutingModule
  ],
  declarations: [PassEditPage]
})
export class PassEditPageModule {}
