import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiercingsPageRoutingModule } from './piercings-routing.module';

import { PiercingsPage } from './piercings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiercingsPageRoutingModule
  ],
  declarations: [PiercingsPage]
})
export class PiercingsPageModule {}
