import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from './app-settings'

@Injectable()
export class HomeService {

    constructor(public af: AngularFireDatabase) { }
    
    // HOME PAGE INFO
    getData = () => {
        var rand = Math.ceil(Math.random() * 17);
        return {
            "toolbarTitle": "Home",
            "title": "MeeTogether",
            "subtitle": "Dennis Arul, Jay Ansin, Shlok Purani, Yankai Tian (leader)",
            "subtitle2": "PRJ666 Group 1",
            "link":"https://zenit.senecac.on.ca/~prj666_182a01/",
            "description": "Link to zenit",
            "background": "assets/images/images/" + rand + ".jpg"
        };
    };

    load(): Observable<any> {
        if (AppSettings.IS_FIREBASE_ENABLED) {
            return new Observable(observer => {
                this.af
                    .object('home')
                    .valueChanges()
                    .subscribe(snapshot => {
                        observer.next(snapshot);
                        observer.complete();
                    }, err => {
                        observer.error([]);
                        observer.complete();
                    });
            });
        } else {
            return new Observable(observer => {
                observer.next(this.getData());
                observer.complete();
            });
        }
    }
}