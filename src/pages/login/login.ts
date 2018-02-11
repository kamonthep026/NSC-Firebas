import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { User } from '../../model/user';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user:User=
  {username:'maya',password:'1234'};
  message:string;

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController,
    ) {
  }

  login(user:User){
    console.log(user);
    if(user.username=='maya'&&user.password=='1234'){
      console.log("login");
      this.navCtrl.push('MenuPage',{}, {animate: false})
    }else{
      console.log("Not login");
      this.message="Username หรือ Password ผิด"
    }
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
  signup(){
    this.navCtrl.push('SignupPage');
    }
}


