import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyC5xlX91DTz2iFw73kQbErNT6pmKxI3YwE",
  authDomain: "football-234b5.firebaseapp.com",
  databaseURL: "https://football-234b5.firebaseio.com",
  projectId: "football-234b5",
  storageBucket: "football-234b5.appspot.com",
  messagingSenderId: "272990948954"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
  firebaseDB
};
