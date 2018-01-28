import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NscPage } from './nsc';

@NgModule({
  declarations: [
    NscPage,
  ],
  imports: [
    IonicPageModule.forChild(NscPage),
  ],
})
export class NscPageModule {}
