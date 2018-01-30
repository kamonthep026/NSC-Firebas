import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA7bcDJTezAUVPGuHJhHyRhLFLB9rL9rA8",
    authDomain: "greenhouse-nsc-2018.firebaseapp.com",
    databaseURL: "https://greenhouse-nsc-2018.firebaseio.com",
    projectId: "greenhouse-nsc-2018",
    storageBucket: "greenhouse-nsc-2018.appspot.com",
    messagingSenderId: "1092111117790"
    }),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    DatabaseProvider,
    DatabaseProvider,
    DatabaseProvider,
    DatabaseProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
