<script lang="ts">
	import firebase from 'firebase/compat/app';
	import 'firebase/compat/auth';

	export let variant: string;
	export let clickHandler: any = () => {};

	//config constant from my project
	//android setup is not supported
	const firebaseConfig = {
		apiKey: 'AIzaSyClFl9Z83m1_cKfjOBWmgPASfh6JxBEbt4',
		authDomain: 'lumosai-8c4e8.firebaseapp.com',
		databaseURL: 'https://lumosai-8c4e8-default-rtdb.firebaseio.com',
		projectId: 'lumosai-8c4e8',
		storageBucket: 'lumosai-8c4e8.appspot.com',
		messagingSenderId: '1027651970462',
		appId: '1:1027651970462:web:1a48cb44d763c32d62e28f'
	};

	firebase.initializeApp(firebaseConfig);

	// Function to handle login
	async function handleLogin() {
		// Get username and password from input fields
		const username = document.getElementById('username').textContent;
		const password = document.getElementById('password').textContent;

		try {
			// Authenticate with Firebase using email and password
			const userCredential = await firebase.auth().signInWithEmailAndPassword(username, password);
			const user = userCredential.user;
			console.log('User logged in:', user);
			// Call clickHandler if login successful
			clickHandler();
		} catch (error) {
			// Handle login errors
			console.error('Login error:', error.message);
		}
	}
</script>

<button class={variant} on:click={handleLogin}><slot /></button>

<style>
	button {
		width: 110px;
		height: 40px;
		border-radius: 10px;
		border: none;
		font-size: 20px;
		cursor: pointer;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
