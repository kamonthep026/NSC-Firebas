import { Component } from '@angular/core';
import { IonicPage,App, MenuController } from 'ionic-angular';
import { OptionsPage } from '../options/options';
import { FertilizerPage } from '../fertilizer/fertilizer';
import { WaterPage } from '../water/water';
import { TemperaturePage } from '../temperature/temperature';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root = TemperaturePage;
  tab2Root = WaterPage;
  tab3Root = FertilizerPage;
  tab4Root = OptionsPage;
  
  constructor() {
  }

}
