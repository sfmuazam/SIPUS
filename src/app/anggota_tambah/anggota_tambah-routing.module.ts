
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaTambahPage } from './anggota_tambah.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaTambahPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */