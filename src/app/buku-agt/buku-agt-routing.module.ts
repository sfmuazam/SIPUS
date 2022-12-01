import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BukuAgtPage } from './buku-agt.page';

const routes: Routes = [
  {
    path: '',
    component: BukuAgtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BukuAgtPageRoutingModule {}
