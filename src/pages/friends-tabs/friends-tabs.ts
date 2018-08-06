import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends-tabs',
  templateUrl: 'friends-tabs.html',
})
export class FriendsTabsPage {

  data: any = {
    "toolbarTitle": "Friends Lists",
    "tabs" : [{ "title": "Friends", "icon": "people",     "page": "FriendListPage" },
          { "title": "Pending", "icon": "swap",       "page": "FriendListPage" },
          { "title": "Blocked", "icon": "remove",     "page": "FriendListPage" },
          { "title": "Add",     "icon": "person-add", "page": "AddFriendPage" }]
  }

  tabs = [{ "title": "Friends", "icon": "people",     "page": "FriendListPage" },
          { "title": "Pending", "icon": "swap",       "page": "FriendListPage" },
          { "title": "Blocked", "icon": "remove",     "page": "FriendListPage" },
          { "title": "Add",     "icon": "person-add", "page": "AddFriendPage" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsTabsPage');
  }

}
