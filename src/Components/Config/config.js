import app from 'firebase/app';
  // Your web app's Firebase configuration
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
 
  class FIREBASE_CONFIG {
    constructor() {
      app.initializeApp(config);
    }
  }
  export default FIREBASE_CONFIG;