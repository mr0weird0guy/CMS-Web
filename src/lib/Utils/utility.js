import { Timestamp } from 'firebase/firestore';

export function convertTimestamps(time) {
	// console.log('time ', time);
	if (time instanceof Timestamp) {
		console.log('date ', time.toDate().toString());
	}
	// const date = new Date(time * 1000);
	// const datea = JSON.stringify(date);
	// console.log('date 2', datea);
	// return datea;
}

// function convertFirebaseTimestampToDate(firebaseTimestamp) {
//   if (firebaseTimestamp instanceof Timestamp) {
//     return firebaseTimestamp.toDate();
//   }
//   throw new Error("Input is not a valid Firebase Timestamp");
// }
