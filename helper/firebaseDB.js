import  {initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBgFuWuzcdGN3kAD6Omr8o65oV3kMEyzpw",
    authDomain: "pomodoro-44125.firebaseapp.com",
    databaseURL: "https://pomodoro-44125-default-rtdb.firebaseio.com",
    projectId: "pomodoro-44125",
    storageBucket: "pomodoro-44125.appspot.com",
    messagingSenderId: "192336420720",
    appId: "1:192336420720:web:d147833586153e4c88f9b5",
    measurementId: "G-YHZDV0XJJ1"
  }

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);


  function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();

    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }
  
  
module.exports = writeUserData;