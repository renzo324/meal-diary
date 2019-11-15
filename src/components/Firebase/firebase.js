import app from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';

const config = {
  apiKey: "AIzaSyDBNfqp6r8RdT7CLRbecghr_OMMjtZhCUo",
  authDomain: "diary-demo-4cc52.firebaseapp.com",
  databaseURL: "https://diary-demo-4cc52.firebaseio.com",
  projectId: "diary-demo-4cc52",
  storageBucket: "diary-demo-4cc52.appspot.com",
  messagingSenderId: "285563710528",
  appId: "1:285563710528:web:5187ab00168baa1bb083a5",
  measurementId: "G-WP2D8ZEDRY"
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
  //Sign Up (Create)
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  //sign in (Read)
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  //Sign out(Read)
  doSignOut = () => this.auth.signOut();
  //Send Password Reset Email (Read)
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  //Reset Password (Update)
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
  
  // *** User API ***
  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
    
}
export default Firebase;
