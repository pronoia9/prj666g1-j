import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  data: any = { "toolbarTitle"  : "Friends",
                "title"         : "Search for friend",
                "headerImage"  : "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg" }; 
  user = {} as User;
  searchTerm: any = "";
  allItems: any;
  friendList = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
    this.user.uid = firebase.auth().currentUser.uid;
  }

  ionViewDidLoad(){ }

  ionViewWillEnter(){
    this.friendList.length = 0;
    this.getFriendList();
  }

  getFriendList(){
    var doc = firebase.firestore().collection('Users').doc(this.user.uid);
    doc.get().then((data)=>{
      this.user.friendList = data.data().friendList;
      this.user.friendList.forEach((fRef)=>{
        fRef.get().then((friend)=>{
          let f = {} as User;
          f.firstName = friend.data().firstName;
          f.lastName = friend.data().lastName;
          f.username = friend.data().username;
          f.email = friend.data().email;
          f.avatar = friend.data().avatar;
          this.friendList.push(f);
        });
      });
    });
  }

  addFriend(){
    this.navCtrl.push('AddFriendPage',this.user);
  }

  search(item: any) {
  }

  presentActionSheet(item, index) {
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
          text: 'Delete Friend',
          role: 'destructive',
          handler: () => {
            //
          }
        },
        {
          text: 'Block Friend',
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
