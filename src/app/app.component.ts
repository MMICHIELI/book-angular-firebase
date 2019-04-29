import { Component } from '@angular/core';

// Firebase
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-list-angular-firebase';

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyDh5E5IPVC9hjnl-j1VbujB5_SfBZLTf9E',
      authDomain: 'tuto-book-list.firebaseapp.com',
      databaseURL: 'https://tuto-book-list.firebaseio.com',
      projectId: 'tuto-book-list',
      storageBucket: 'tuto-book-list.appspot.com',
      messagingSenderId: '277744822726'
    };
    firebase.initializeApp(config);
  }
}
