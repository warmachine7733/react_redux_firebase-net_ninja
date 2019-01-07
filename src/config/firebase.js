import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyBWGKZkgqWvvGNa8gEVii0XkfH0aGRh9Uk",
  authDomain: "net-ninja-demo-1e4a1.firebaseapp.com",
  databaseURL: "https://net-ninja-demo-1e4a1.firebaseio.com",
  projectId: "net-ninja-demo-1e4a1",
  storageBucket: "",
  messagingSenderId: "569018765468"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;