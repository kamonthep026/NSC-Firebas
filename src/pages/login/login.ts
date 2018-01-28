import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../model/user';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:User=
  {username:'maya',password:'1234'};
  message:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user:User){
    console.log(user);
    if(user.username=='maya'&&user.password=='1234'){
      console.log("login");
      this.navCtrl.push('FirebasePage')
    }else{
      console.log("Not login");
      this.message="ผิด"
    }
  }
  
}

