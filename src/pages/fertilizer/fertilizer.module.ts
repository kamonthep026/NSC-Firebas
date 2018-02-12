import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FertilizerPage } from './fertilizer';

@NgModule({
  declarations: [
    FertilizerPage,
  ],
  imports: [
    IonicPageModule.forChild(FertilizerPage),
  ],
})
export class FertilizerPageModule {}
