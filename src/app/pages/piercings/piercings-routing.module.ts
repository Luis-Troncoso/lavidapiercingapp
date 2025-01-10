import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiercingsPage } from './piercings.page';

const routes: Routes = [
  {
    path: '',
    component: PiercingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiercingsPageRoutingModule {}
