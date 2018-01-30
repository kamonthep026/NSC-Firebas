import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs/Observable';
import { Device } from '../../model/device';
/**
 * Generated class for the FirebasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firebase',
  templateUrl: 'firebase.html'
  
})
export class FirebasePage {

  devicelist:Device[];//ตัวแปรOb
  deviceb:Device = new Device(
    '',1,'09:00','13:00','17:00'
  );
  timeNow:Date;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db:DatabaseProvider
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirebasePage');
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
  
}
