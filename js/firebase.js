import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js';
//import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js';
import { getDatabase, ref, get, child } from 'https://www.gstatic.com/firebasejs/10.5.0/firebase-database.js';

const firebaseConfig = {
	apiKey: 'AIzaSyDh5bwzU_DzWgr1U7FY28CHLxzr-pRzUMg',
	authDomain: 'food-tracker-f18d8.firebaseapp.com',
	projectId: 'food-tracker-f18d8',
	storageBucket: 'food-tracker-f18d8.appspot.com',
	messagingSenderId: '1066891379088',
	appId: '1:1066891379088:web:0a34ae018c74eeaecff315',
	databaseURL: 'https://food-tracker-f18d8-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Get the Firestore database
//const db = getFirestore(app);
const database = getDatabase(app);

console.log(database);

const dbRef = ref(getDatabase());
get(child(dbRef, `alimentos`))
	.then((snapshot) => {
		if (snapshot.exists()) {
			console.log(snapshot.val());
		} else {
			console.log('No data available');
		}
	})
	.catch((error) => {
		console.error(error);
	});
