import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import * as firebase from 'firebase';

/**
 * Generated class for the FriendListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-list',
  templateUrl: 'friend-list.html',
})
export class FriendListPage {

  data: any = { "toolbarTitle"  : "Friends",
                "title"         : "Search for friend",
                "headerImage"  : "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg",
                "items" : [] }; // items : [] is for (same as) friendList = []
  user = {} as User;
  searchTerm: any = "";
  allItems: any;
  friendList = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
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
          if (f.avatar == null || f.avatar == "") {
            f.avatar = "assets/images/avatar/25.jpg";
          }
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
}
