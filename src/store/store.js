import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, updateDoc, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase/config';
import { firestore } from '../lib/firebase/config';
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

export const componentHandler = {
	set: async (docId, data) => {
		await setDoc(doc(firestore, 'Components', docId), data);
	},
	getAll: async () => {
		await getDocs(doc(firestore, 'Components'));
	},
	get: async (docId) => {
		await getDoc(doc(firestore, 'Components', docId));
	},
	update: async (docId, data) => {
		await updateDoc(doc(firestore, 'Components', docId), data);
	},
	delete: async (docId) => {
		await deleteDoc(doc(firestore, 'Components', docId));
	}
};
