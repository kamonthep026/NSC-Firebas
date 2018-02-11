import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController,App} from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Device } from '../../model/device';


@Component({
  templateUrl: 'firebase.html'
  
})

export class FirebasePage {

  
  app: any;
  devicelist:Device[];//ตัวแปรOb
  deviceb:Device = new Device(
    '',1,'09:00','13:00','17:00'
  );
  timeNow:Date;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db:DatabaseProvider, 
    public loadingCtrl: LoadingController,
    public app1: App
  ) {
    this.getDevice();
    setInterval(() => {         //replaced function() by ()=>
      this.timeNow = new Date();
      let Houer = this.timeNow.getHours();
      let Minutes = this.timeNow.getMinutes();
      let HM = Houer+':'+Minutes;
      console.log(Houer+':'+Minutes); 
      this.db.setObjectDevice('Light_bulb/time_now',HM)
      .then(result=>{
        console.log(result);
      })
    }, 30000);
    console.log(this.deviceb);
    
  }
 
  async getDevice(){
    await this.db.searchListDevice('','').subscribe(datalist=>{
      this.devicelist = datalist;
      console.log(this.devicelist);
    })
  }

  switchDevice(device){
    console.log('Deviec',device.$key);
    if(device.control===1){
      console.log('Deviec',0);
      this.db.switchDevice(device.$key,0);
      
    }
    if(device.control===0){
      console.log('Deviec',1);
      this.db.switchDevice(device.$key,1);
    }
 
  } 
  
  setTime(device){
    console.log(device);
    this.db.updateListDevice('Light_bulb',device)
    .then(result=>{
      console.log(result);
  })  
  }
  logout(){
    const root = this.app1.getRootNav();
    root.popToRoot();
      this.loadingCtrl.create({
        content: 'Please wait...',
        duration: 3000,
        dismissOnPageChange: true
      }).present();
  }
 

}

