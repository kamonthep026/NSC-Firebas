import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FirebasePageModule } from '../pages/firebase/firebase.module';
import { AboutPageModule } from '../pages/about/about.module';
import { SettPageModule } from '../pages/sett/sett.module';
import { SignupPageModule } from '../pages/signup/signup.module';


// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { DatabaseProvider } from '../providers/database/database';
import { HttpClientModule } from '@angular/common/http';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    FirebasePageModule,
    AboutPageModule,
    SettPageModule,
    SignupPageModule,
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
    MyApp
    
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
    DatabaseProvider,
  ]
})
export class AppModule {}
