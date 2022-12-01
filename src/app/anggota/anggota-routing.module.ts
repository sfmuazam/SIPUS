
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaPage } from './anggota.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */