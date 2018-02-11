import { Component } from '@angular/core';
import { IonicPage,App, MenuController } from 'ionic-angular';
import { SettPage } from '../sett/sett';
import { AboutPage } from '../about/about';
import { FirebasePage } from '../firebase/firebase';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tab1Root = FirebasePage;
  tab2Root = AboutPage;
  tab3Root = SettPage;
  
  constructor() {
  }

}
