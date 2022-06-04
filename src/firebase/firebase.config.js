// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdQU6MnJvIXWa99WtLnPkSFo-YJLy7RJg",
  authDomain: "react-authentication-fir-41b87.firebaseapp.com",
  projectId: "react-authentication-fir-41b87",
  storageBucket: "react-authentication-fir-41b87.appspot.com",
  messagingSenderId: "844401786218",
  appId: "1:844401786218:web:fb6dde0dd3d81e888b7913",
};

// Initialize Firebase
const firbaseConfigApp = () => {
  initializeApp(firebaseConfig);
};
export default firbaseConfigApp;
