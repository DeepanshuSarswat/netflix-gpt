// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGQsad_cjXifiNmCO-Bhhj24USJqgWDCQ",
  authDomain: "netflix-gpt-1653b.firebaseapp.com",
  projectId: "netflix-gpt-1653b",
  storageBucket: "netflix-gpt-1653b.appspot.com",
  messagingSenderId: "279914235708",
  appId: "1:279914235708:web:223775626d9f265ac30039",
  measurementId: "G-HPWWLHSENM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

