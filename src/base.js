import Rebase from 're-base';
import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCTJlU4Ajsdauoo44L8w3yr6CmrOsFq3P8",
    authDomain: "youdo-81603.firebaseapp.com",
    databaseURL: "https://youdo-81603.firebaseio.com",
    projectId: "youdo-81603",
    storageBucket: "youdo-81603.appspot.com",
    messagingSenderId: "528940061091",
    appId: "1:528940061091:web:8cc54fe7785fb5d5"
  };


const app = firebase.initializeApp(firebaseConfig)
const base = Rebase.createClass(app.database())

export { base }