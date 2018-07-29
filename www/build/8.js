webpackJsonp([8],{

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewEventParticipantsPageModule", function() { return ViewEventParticipantsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_event_participants__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewEventParticipantsPageModule = /** @class */ (function () {
    function ViewEventParticipantsPageModule() {
    }
    ViewEventParticipantsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_event_participants__["a" /* ViewEventParticipantsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_event_participants__["a" /* ViewEventParticipantsPage */]),
            ],
        })
    ], ViewEventParticipantsPageModule);
    return ViewEventParticipantsPageModule;
}());

//# sourceMappingURL=view-event-participants.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEventParticipantsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewEventParticipantsPage = /** @class */ (function () {
    function ViewEventParticipantsPage(navCtrl, navParams, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.data = {
            "toolbarTitle": "View Participants",
            "headerImage": "assets/images/background/" + Math.ceil(Math.random() * 23) + ".jpg",
            "title": "All Event Participants of",
            "subtitle": "Event Name",
            "button": "...",
        };
        this.participants = [];
    }
    ViewEventParticipantsPage.prototype.getParticipants = function (pRef) {
        var _this = this;
        pRef.forEach(function (participant) {
            participant.onSnapshot(function (doc) {
                var p = {};
                p.email = doc.data().email;
                p.username = doc.data().username;
                p.firstName = doc.data().firstName;
                p.lastName = doc.data().lastName;
                p.avatar = doc.data().avatar;
                _this.participants.push(p);
            });
        });
    };
    ViewEventParticipantsPage.prototype.ionViewDidLoad = function () {
        this.getParticipants(this.navParams.data);
        console.log(this.participants);
    };
    ViewEventParticipantsPage.prototype.ionViewDidLeave = function () {
        // detach listener
        this.navParams.data.forEach(function (p) {
            p.onSnapshot(function () { });
        });
    };
    ViewEventParticipantsPage.prototype.presentActionSheet = function (item) {
        var actionSheet = this.actionSheetCtrl.create({
            title: '',
            buttons: [
                {
                    text: 'View Profile',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Send Message',
                    handler: function () {
                        //
                    }
                },
                {
                    text: '(if not friends) Add Friend',
                    role: 'destructive',
                    handler: function () {
                        //
                    }
                },
                {
                    text: '(if already friends) Delete Friend',
                    role: 'destructive',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Block User',
                    handler: function () {
                        //
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ViewEventParticipantsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-event-participants',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/view-event-participants/view-event-participants.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title *ngIf="data != null">{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content elastic-header>\n  <div background-size id="elastic-header" [ngStyle]="{\'background-image\': \'url(\' + data.headerImage + \')\'}">\n    <div parallax-header *ngIf="data != null">\n      <h2 no-margin parallax-subtitle>{{data.title}}</h2>\n      <h2 no-margin parallax-title>{{data.subtitle}}</h2>\n    </div>\n  </div>\n\n  <!--Content-->\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12>\n        <ion-list no-margin>\n          <ion-item item-bcg border no-lines *ngFor="let p of participants">\n            <!--Participant Info-->\n            <ion-thumbnail item-start><img [src]="p.avatar"></ion-thumbnail>\n            <h2 no-margin item-title>{{p.username}}</h2>\n            <h3 item-subtitle text-wrap>{{p.firstName}} {{p.lastName}}</h3>\n            <h3 item-subtitle text-wrap>{{p.email}}</h3>\n            <!--More Badge-->\n            <ion-badge badge-light item-end (click)="presentActionSheet(p)">{{data.button}}</ion-badge>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/view-event-participants/view-event-participants.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ViewEventParticipantsPage);
    return ViewEventParticipantsPage;
}());

//# sourceMappingURL=view-event-participants.js.map

/***/ })

});
//# sourceMappingURL=8.js.map