import { initializeApp, getApp, getApps, deleteApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
// 	apiKey: import.meta.env.DB_API_KEY,
// 	authDomain: import.meta.env.AUTH_DOMAIN,
// 	databaseURL: import.meta.env.DB_URL,
// 	projectId: import.meta.env.DB_PROJECT_ID,
// 	storageBucket: import.meta.env.DB_STORAGE_BUCKET,
// 	messagingSenderId: import.meta.env.DB_MESSAGING_SENDER_ID,
// 	appId: import.meta.env.DB_APP_ID,
// 	measurementId: import.meta.env.DB_MEASUREMENT_ID
// };

const firebaseConfig = {
	apiKey: 'AIzaSyBhKeFPoDFIgoQiL5Zu_tGjWsdFYsgsFi8',
	authDomain: 'comansys-d5b37.firebaseapp.com',
	databaseURL: 'https://comansys-d5b37-default-rtdb.firebaseio.com',
	projectId: 'comansys-d5b37',
	storageBucket: 'comansys-d5b37.appspot.com',
	messagingSenderId: '1094845932081',
	appId: '1:1094845932081:web:39e294f57af449b26deb10',
	measurementId: 'G-N3L3CGR1G0'
};

let app;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
	deleteApp(app);
	app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);
