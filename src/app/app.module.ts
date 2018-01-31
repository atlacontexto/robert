import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { MenuPageModule } from '../pages/menu/menu.module';
import { JogarPageModule } from '../pages/jogar/jogar.module';
import { JogarPage } from '../pages/jogar/jogar';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MenuPageModule,
    JogarPageModule,
    ConfiguracoesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    JogarPage,
    ConfiguracoesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
