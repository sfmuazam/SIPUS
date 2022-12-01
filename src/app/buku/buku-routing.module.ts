
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuPage } from './buku.page';

const routes: Routes = [
  {
    path: '',
    component: BukuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuPageRoutingModule {}






/* End of file  */

/* Created at 2022-11-22 23:58:28 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */