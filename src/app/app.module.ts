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
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAzr2Or1XOwmlPb52dIbuxmqsrMfReqI5w",
     authDomain: "nschome-9e525.firebaseapp.com",
     databaseURL: "https://nschome-9e525.firebaseio.com",
     projectId: "nschome-9e525",
     storageBucket: "nschome-9e525.appspot.com",
     messagingSenderId: "950885610300"
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
