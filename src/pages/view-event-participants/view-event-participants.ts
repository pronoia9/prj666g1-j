import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';
import { callUserCallback } from '@firebase/database/dist/src/core/util/util';

@IonicPage()
@Component({
  selector: 'page-view-event-participants',
  templateUrl: 'view-event-participants.html',
})
export class ViewEventParticipantsPage {

  data: any = {
    "toolbarTitle" : "View Participants",
    "headerImage" : "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg",
    "title" : "All Event Participants of",
    "subtitle" : "Event Name",
    "button" : "...",
  };
  participants= [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  getParticipants(pRef){
    pRef.forEach((participant) => {
      participant.onSnapshot((doc)=>{
        let p = {} as User;
        p.email = doc.data().email;
        p.username = doc.data().username;
        p.firstName = doc.data().firstName;
        p.lastName = doc.data().lastName;
        p.avatar = doc.data().avatar;
        this.participants.push(p);
      });
    });
  }

  ionViewDidLoad() {
    this.getParticipants(this.navParams.data);
    console.log(this.participants);
  }

  ionViewDidLeave(){
    // detach listener
    this.navParams.data.forEach((p) => {
      p.onSnapshot(()=>{});
    })
  }

  presentActionSheet(item) {
    let actionSheet = this.actionSheetCtrl.create({
      title: '',
      buttons: [
        {
          text: 'View Profile',
          handler: () => {
            //
          }
        },
        {
          text: 'Send Message',
          handler: () => {
            //
          }
        },
        {
          text: '(if not friends) Add Friend',
          role: 'destructive',
          handler: () => {
            //
          }
        },
        {
          text: '(if already friends) Delete Friend',
          role: 'destructive',
          handler: () => {
            //
          }
        },
        {
          text: 'Block User',
          handler: () => {
            //
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //
          }
        }
      ]
    });
 
    actionSheet.present();
  }
}
