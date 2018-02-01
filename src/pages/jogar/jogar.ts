import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the JogarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jogar',
  templateUrl: 'jogar.html',
})
export class JogarPage {

  public Campanhas: Array<any> = ["Campanha 1", "Campanha 2", "Campanha 3", "Campanha 4", "Campanha 5", "Campanha 6", "Campanha 7", "Campanha 8", "Campanha 9"];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad JogarPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirme sua escolha',
      message: 'Você escolheu a Campanha X.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Começar',
          role: 'continuar',
          handler: () => {
            console.log('Continuar clicked');
          }
        }
      ]
    });
    alert.present();
  }
}
