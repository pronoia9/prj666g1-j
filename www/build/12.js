webpackJsonp([12],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = { "toolbarTitle": "Edit Profile",
            genders: [{ "id": 0, "title": "Female" },
                { "id": 1, "title": "Male" },
                { "id": 2, "title": "Other" },
                { "id": 3, "title": "Private" }],
        };
        this.user = {};
        // receive data from push
        this.user = navParams.data;
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.saveBtn = function () {
        var doc = __WEBPACK_IMPORTED_MODULE_2_firebase__["firestore"]().collection('Users').doc(this.user.uid);
        doc.update({
            username: this.user.username,
            firstName: this.user.firstName,
            lastName: this.user.lastName
        });
        this.navCtrl.pop();
    };
    EditProfilePage.prototype.facebook = function () {
    };
    EditProfilePage.prototype.google = function () {
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/edit-profile/edit-profile.html"*/'<ion-header header-ios>\n  <ion-navbar transparent>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <!--<ion-title>{{data.toolbarTitle}}</ion-title>-->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding-right elastic-header>\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Personal Info</h2>\n    </ion-item-divider>\n    <!--First and Last Name-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>First Name: </ion-label>\n      <ion-input type="text" [(ngModel)]="user.firstName" placeholder="{{user.firstName}}"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Last Name: </ion-label>\n      <ion-input type="text" [(ngModel)]="user.lastName" placeholder="{{user.lastName}}"></ion-input>\n    </ion-item>\n    <!--DoB-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Birthday: </ion-label>\n      <ion-datetime displayFormat="MMMM/DD/YYYY" min="" max=""></ion-datetime>\n    </ion-item>\n    <!--Gender-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Gender: </ion-label>\n      <ion-select multiple="false" interface="popover">\n        <ion-option *ngFor="let option of data.genders; let i = index" [value]="option.id">{{option.title}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Account Info</h2>\n    </ion-item-divider>\n    <!--Username-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Username: </ion-label>\n      <ion-input [(ngModel)]="user.username" placeholder="{{user.username}}"></ion-input>\n    </ion-item>\n    <!--Email-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Email: </ion-label>\n      <ion-input placeholder="{{user.email}}"></ion-input>\n    </ion-item>\n    <!--Password-->\n    <ion-item>\n      <ion-icon color="primary" name="arrow-dropright" item-start></ion-icon>\n      <ion-label>Password: </ion-label>\n      <ion-input type="password" placeholder="********" disabled readonly></ion-input>\n      <ion-icon icon-small name="send" item-end></ion-icon>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider border no-lines>\n      <h2 item-subtitle>Connected Accounts</h2>\n    </ion-item-divider>\n    <!--PROPER ion-icons will prive a (click)="" link to link or unlink social accounts-->\n    <!--Facebook-->\n    <ion-item>\n      <ion-icon color="primary" ios="logo-facebook" md="logo-facebook" item-start></ion-icon>\n      <ion-label>Facebook</ion-label>\n      <ion-icon color="primary" name="close-circle" item-end (click)="facebook()"></ion-icon>\n    </ion-item>\n    <!--Google-->\n    <ion-item>\n      <ion-icon color="primary" ios="logo-google" md="logo-google" item-start></ion-icon>\n      <ion-label>Google+</ion-label>\n      <ion-icon color="primary" name="checkmark-circle" item-end (click)="google()"></ion-icon>\n    </ion-item>\n  </ion-item-group>\n</ion-content>\n\n<!-- Bottom Buttons -->\n<ion-footer transparent no-padding no-margin>\n  <button ion-button clear block (click)="saveBtn()">Save</button>\n  <!--<button ion-button block no-margin (click)="changePwd()">Change Password</button>-->\n</ion-footer>'/*ion-inline-end:"/Users/xoxo/Dropbox/CPA/PRJ666/prj666g1-jay/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=12.js.map