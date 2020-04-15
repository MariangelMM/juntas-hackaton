import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCPUR76kDlTcWs7aMKc3AAvP_xXaUMlbfg",
  authDomain: "juntas-55f18.firebaseapp.com",
  databaseURL: "https://juntas-55f18.firebaseio.com",
  projectId: "juntas-55f18",
  storageBucket: "juntas-55f18.appspot.com",
  messagingSenderId: "484179029203",
  appId: "1:484179029203:web:2ad29ca2780564bfd23826"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
