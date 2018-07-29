import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Page declarations for navigations
import { HomePage } from '../pages/home/home';
import { ManageEventPage } from '../pages/manage-event/manage-event';
import { FriendListPage } from '../pages/friend-list/friend-list';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';
//import { AvatarsPage } from '../pages/avatars/avatars';

// Import plugins
import firebase from 'firebase';
import { User } from '../models/user'; ////////////////////////////////////////

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  data: any = {
    "toolbarTitle": "Menu",
    "background": "assets/images/images/" + Math.ceil(Math.random() * 17) + ".jpg",
    "image": "assets/images/logo/1.png",
    "title": "MeeTogether",
    "description": "Please login to consectetur elit, sed do euismod tempor incididunt",
  }
  isLogged: boolean = false;
  rootPage: any = LoginPage;
  pages: Array<{ title: string, component: any, icon: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    //public navCtrl: NavController,
    public events: Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // default navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Login', component: LoginPage, icon: 'log-in' }
    ];

    // using events subscribe to track login/out status
    events.subscribe('login_status', (isLogin, user) => {
      if (isLogin && user != null) {
        this.isLogged = true;
        this.data.image = user.avatar;
        this.data.title = user.username; 
        this.data.description = user.firstName + " " + user.lastName; 
        
        // TODO: NEED TO RETRIEVE THE DATA "CORRECTLY" ABOVE 
        this.data.image = "assets/images/avatars/20.jpg";
        this.data.title = "BoredPanda"; 
        this.data.description = "Jay Ansin"; 

        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' },
          { title: 'My Event', component: ManageEventPage, icon: 'calendar' },
          { title: 'My Friends', component: FriendListPage, icon: 'people' },
          { title: 'My Profile', component: ProfilePage, icon: 'person' },
          //{ title: 'Avatars', component: AvatarsPage, icon: 'people' },
          { title: 'Logout', component: LogoutPage, icon: 'exit' }
          //{ title: 'Register', component: RegisterPage}
        ];
      }
      else {
        this.isLogged = false;
        this.pages = [
          { title: 'Home', component: HomePage, icon: 'home' },
          { title: 'Login', component: LoginPage, icon: 'log-in' }
        ];
      }
    })
    /*
    firebase.initializeApp({
      apiKey: "AIzaSyAbvHri--QkO91_9FMMGvMdeLlTGp7Gtvw",
      authDomain: "meetogether-prj666g1.firebaseapp.com",
      databaseURL: "https://meetogether-prj666g1.firebaseio.com/",
      projectId: "meetogether-prj666g1",
      storageBucket: "meetogether-prj666g1.appspot.com",
      messagingSenderId: "719772453281"
    });
    */
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  profileSettings() {
    //this.navCtrl.push('ProfilePage');
  }

  login() {
    //this.navCtrl.push('LoginPage');
  }

  logout() {
    //this.navCtrl.push('LogoutPage');
  }
}
