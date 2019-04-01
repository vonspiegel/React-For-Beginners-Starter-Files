import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA6ufhY8CDbVTIYbkZHcabLvPPLovgb9cY",
  authDomain: "catch-of-the-day-practic-e6165.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-practic-e6165.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;