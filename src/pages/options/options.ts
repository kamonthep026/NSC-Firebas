import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController,App} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public app: App) {
    }
    logout(){
      const root = this.app.getRootNav();
      root.popToRoot();
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
    }
  }
