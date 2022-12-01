
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnggotaEditPage } from './anggota_edit.page';

const routes: Routes = [
  {
    path: '',
    component: AnggotaEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnggotaEditPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */