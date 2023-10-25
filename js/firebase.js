// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCY9hrOmFWW2A_GeVbx92fdRToJiXRs6SY',
	authDomain: 'food-tracker-20df9.firebaseapp.com',
	projectId: 'food-tracker-20df9',
	storageBucket: 'food-tracker-20df9.appspot.com',
	messagingSenderId: '37324663683',
	appId: '1:37324663683:web:579a4a75959390802164b6',
	measurementId: 'G-ES1KSVD72S',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
