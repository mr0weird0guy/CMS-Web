<script lang="ts">
	import firebase from 'firebase/compat/app';
	import 'firebase/compat/auth';

	export let clickHandler: any = () => {};

	// Config constant from my project
	// Android setup is not supported
	const firebaseConfig = {
		// Put the required config here
		// Tsted with an example key
	};

	firebase.initializeApp(firebaseConfig);

	// Reactive variables to store input values
	let username = '';
	let password = '';

	// Function to handle login
	async function handleLogin() {
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

<div class="main">
	<!--Exlipse images for the background-->
	<img src="./loginImg/Ellipse1.png" class="e1" alt="Ellipse1" />
	<img src="./loginImg/Ellipse2.png" class="e2" alt="Ellipse2" />
	<img src="./loginImg/Ellipse3.png" class="e3" alt="Ellipse3" />
	<div class="header">
		<div class="logo">
			<img src="./loginImg/kjc-logo.png" alt="kjc logo" />
		</div>
		<div class="heads">
			<h1>Welcome to KJC</h1>
			<h1 style="color: #FFC438;">Component Management System</h1>
		</div>
		<div class="inputs">
			<p>User Name/Email</p>
			<input type="text" bind:value={username} placeholder="Enter your username" />
			<p>Password</p>
			<input type="password" bind:value={password} placeholder="Enter your password" />
			<button class="btnlog" on:click={handleLogin}>Login</button>
			<button class="btnabt">About</button>
		</div>
		<p class="version">version 1.0.0</p>
	</div>
</div>

<style>
	.e3 {
		position: absolute;
		right: 0;
		top: 20%;
		z-index: -1;
	}
	.e2 {
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: -1;
	}
	.e1 {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
	}
	.version {
		font-size: 20px;
		bottom: 1%;
		position: absolute;
	}
	.btnabt {
		width: 200px;
		height: 56px;
		border-radius: 25px;
		border: none;
		font-size: 20px;
		background-image: linear-gradient(to right, #ffc235 0%, #ffdf95 100%);
		font-weight: 200;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.btnlog {
		width: 200px;
		height: 56px;
		border-radius: 25px;
		border: none;
		font-size: 20px;
		background-image: linear-gradient(to right, #3d76e6 0%, #7599e0 100%);
		font-weight: 200;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.inputs input {
		width: 80%;
		height: 30px;
		padding: 10px;
		margin: 8px 0;
		font-size: 17px;
		border-style: none;
		background-color: #d9d9d9;
		border-radius: 20px;
	}
	.inputs p {
		font-size: 20px;
		font-weight: bold;
		margin: 10px;
	}
	.inputs {
		width: 600px;
		height: 400px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25px;
		margin-bottom: 30px;
		padding: 20px;
		box-shadow: 0px 0px 25px #585757b3;
		border-radius: 30px;
	}
	.main {
		width: 100%;
		height: 100%;
		margin: 10px;
	}
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.heads {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		height: 100%;
	}
</style>
