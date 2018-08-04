import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  data: any = { "toolbarTitle" : "Edit Profile",
                genders: [{ "id": 0, "title": "Female" },
                { "id": 1, "title": "Male" },
                { "id": 2, "title": "Other" },
                { "id": 3, "title": "Private" }],
  };
  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
    // receive data from push
    this.user = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  saveBtn() {
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.update({
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName
    });
    this.navCtrl.pop();
  }

  facebook() {
  }

  google() {
  }
}
