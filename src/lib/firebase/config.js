import { initializeApp, getApp, getApps, deleteApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyBhKeFPoDFIgoQiL5Zu_tGjWsdFYsgsFi8', //import.meta.env.DB_API_KEY,
	authDomain: import.meta.env.AUTH_DOMAIN,
	databaseURL: import.meta.env.DB_URL,
	projectId: import.meta.env.DB_PROJECT_ID,
	storageBucket: import.meta.env.DB_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.DB_MESSAGING_SENDER_ID,
	appId: import.meta.env.DB_APP_ID,
	measurementId: import.meta.env.DB_MEASUREMENT_ID
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
