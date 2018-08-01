import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import { Event } from '../../models/event';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-manage-event',
  templateUrl: 'manage-event.html',
})
export class ManageEventPage {
  data: any = {
    "toolbarTitle": "Events List",
    "headerImage": "assets/images/places/" + Math.ceil(Math.random() * 8) + ".jpg",
    //"backgroundImage": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
    "backgroundImage" : "assets/images/maps/0.jpg",
  };
  //backgroundImage = "assets/images/places/" + Math.ceil(Math.random() * 9) + ".jpg"
  user = {} as User;
  events = [];
  docRef: any;
  searchTerm: any = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
    this.user.uid = firebase.auth().currentUser.uid;
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    this.getEventList();
  }

  ionViewDidLeave() {
    this.events.length = 0; // by set count = 0 not erase all data
    this.user.eventList.forEach((eventRef) => {
      eventRef.onSnapshot(() => { });
    })
  }

  getEventList() {
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.get().then((doc) => {
      if (doc.data() != null) {
        this.events.length = 0;
        this.user.eventList = doc.data().eventList;
        this.user.eventList.forEach((e) => {
          let event = {} as Event;
          event.eventId = e.id;
          e.get().then((content) => {
            if (content.data() != null) {
              event.eventName = content.data().eventName;
              event.description = content.data().description;
              event.date = content.data().date;
              event.creator = content.data().creator;
              /*event.admins = content.data().admins;
              event.blockedUsers = content.data().blockedUsers;
              event.dateCreated = content.data().dateCreated;
              event.participants = content.data().participants;
              event.chat = content.data().chat;
              event.radius = content.data().radius;
              event.location = content.data().location;*/
              this.events.push(event);
            }
          });
        })
      }
    });
  }

  viewEvent(eventRef) {
    this.navCtrl.push('ViewEventPage', eventRef);
  }

  createEvent() {
    this.navCtrl.push('CreateEventPage');
  }

  joinEvent() {
    this.navCtrl.push('JoinEventPage');
  }

  /*getRandomBackground() : string {
    return "assets/images/places/" + Math.ceil(Math.random() * 9) + ".jpg";
  }*/

  search(item: any) {
  }

}