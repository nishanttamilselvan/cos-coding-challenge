import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { FuelTypeModule } from 'src/app/pipes/fuel-type.pipe.module';
import { TimerPipeModule } from 'src/app/pipes/timer.pipe.module';
import { TransmissionPipeModule } from 'src/app/pipes/transmission.pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    FuelTypeModule,
    TransmissionPipeModule,
    TimerPipeModule
  ],
  declarations: [OverviewPage]
})
export class OverviewPageModule {}
