import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBv071d4q7i9vsg0uILSSPKQpLrpNJhhK8",
	authDomain: "fb-clone-a80c0.firebaseapp.com",
	databaseURL: "https://fb-clone-a80c0.firebaseio.com",
	projectId: "fb-clone-a80c0",
	storageBucket: "fb-clone-a80c0.appspot.com",
	messagingSenderId: "523275562182",
	appId: "1:523275562182:web:73fbe3846b1a53b1e8fbc7",
	measurementId: "G-6887S5NJQ9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;