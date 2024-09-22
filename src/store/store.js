import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { writable } from 'svelte/store';
import { auth } from '$lib/firebase/config';
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
