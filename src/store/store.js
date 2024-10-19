import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {
	setDoc,
	updateDoc,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	collection,
	orderBy,
	query
} from 'firebase/firestore';
import { writable } from 'svelte/store';
import { auth, firestore } from '$lib/firebase/config';
import { convertTimestamps } from '../lib/Utils/utility';
// Function to handle login

export const authStore = writable({
	user: null,
	loading: true,
	data: {}
});

export const authHandler = {
	login: async (email, password) => {
		await signInWithEmailAndPassword(auth, email, password);
	},
	logout: async () => {
		await signOut(auth);
	}
};

const compCol = collection(firestore, 'Components');

export const componentHandler = {
	set: async (docId, data) => {
		await setDoc(doc(compCol, docId), data);
	},
	getAll: async () => {
		const docs = await getDocs(compCol);
		let componentList = [];
		docs.forEach((component) => {
			let item = {
				...component.data(),
				LastUpdated: convertTimestamps(component.LastUpdated),
				id: component.id
			};
			// convertTimestamps(component.LastUpdated);
			// if (component.LastUpdated && component.LastUpdated.toDate) {
			// 	const lastUpdatedDate = component.LastUpdated.toDate(); // Safely call toDate
			// 	console.log(lastUpdatedDate); // Outputs the JavaScript Date
			// }
			// console.log('date ', component.LastUpdated.toDate().toString());

			componentList = [item, ...componentList];
		});
		return componentList;
	},
	get: async (docId) => {
		const component = await getDoc(doc(compCol, docId));
		return {
			...component.data(),
			id: component.id,
			LastUpdated: convertTimestamps(component.LastUpdated)
		};
	},
	update: async (docId, data) => {
		await updateDoc(doc(compCol, docId), data);
	},
	delete: async (docId) => {
		await deleteDoc(doc(compCol, docId));
	}
};

const userCol = collection(firestore, 'Users');

export const userHandler = {
	set: async (docId, data) => {
		await setDoc(doc(userCol, docId), data);
	},
	getAll: async () => {
		const docs = await getDocs(userCol);
		let userList = [];
		docs.forEach((user) => {
			let item = {
				...user.data(),
				id: user.id
			};
			userList = [item, ...userList];
		});
		return userList;
	},
	get: async (docId) => {
		const user = await getDoc(doc(userCol, docId));
		return {
			...user.data(),
			id: user.id
		};
	},
	update: async (docId, data) => {
		await updateDoc(doc(userCol, docId), data);
	},
	delete: async (docId) => {
		await deleteDoc(doc(userCol, docId));
	}
};

const historyCol = collection(firestore, 'History');

export const historyHandler = {
	set: async (docId, data) => {
		await setDoc(doc(historyCol, docId), data);
	},
	getAll: async () => {
		// const q = query(historyCol, orderBy('BookedOn'));
		const docs = await getDocs(historyCol);
		// let userDataList = [];
		// let historyList = {};
		let historyList = [];
		docs.forEach((history) => {
			let item = {
				...history.data(),
				id: history.id
			};
			historyList = [item, ...historyList];
			// userDataList = [item, ...userDataList];
			// let user = history.data().userEmail;
			// historyList[user] = userDataList;
		});
		console.log('item ', historyList);
		return historyList;
	},
	get: async (docId) => {
		const user = await getDoc(doc(historyCol, docId));
		return {
			...user.data(),
			id: user.id
		};
	},
	update: async (docId, data) => {
		await updateDoc(doc(historyCol, docId), data);
	},
	delete: async (docId) => {
		await deleteDoc(doc(historyCol, docId));
	}
};
