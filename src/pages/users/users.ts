import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.users = [
      {
        name: 'Nicu', bio: 'Whatever', image: 'https://www.w3schools.com/w3css/img_lights.jpg'
      },
      {
        name: 'Cristina', bio: 'TheBio', image: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToUser(user) {
        
  }

}
