<script>
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import { auth } from '$lib/firebaseConfig.js';

	let clickHandler = () => {
		window.location.href = '/home';
	};

	// Reactive variables to store input values
	let username = '';
	let password = '';

	// Function to handle login
	async function handleLogin() {
		try {
			// Authenticate with Firebase using email and password
			const userCredential = await signInWithEmailAndPassword(auth, username, password);
			const user = userCredential.user;
			console.log('User logged in:', user);
			document.cookie = `user=${user}`;
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
	<img src="./loginImg/top-left-design.svg" class="bg-img e1" alt="Ellipse1" />
	<img src="./loginImg/bottom-left-design.svg" class="bg-img e2" alt="Ellipse2" />
	<img src="./loginImg/middle-right-design.svg" class="bg-img e3" alt="Ellipse3" />
	<div class="header">
		<div class="logo">
			<img src="./loginImg/kjc-logo.png" alt="kjc logo" />
		</div>
		<div class="heads">
			<h1>Welcome to KJC</h1>
			<h2 style="color: #FFC438;font-weight:500">Component Management System</h2>
		</div>
		<div class="login-form">
			<p>User Name/Email</p>
			<input type="text" bind:value={username} placeholder="Enter your username" />
			<p>Password</p>
			<input type="password" bind:value={password} placeholder="Enter your password" />
			<button class="btn btnlog" on:click={handleLogin}>Login</button>
			<a href="/about"><button class="btn btnabt">About</button></a>
		</div>
		<p class="version">version 1.0.0</p>
	</div>
</div>

<style>
	.main {
		width: 100%;
		height: 100%;
		max-height: 100vh;
	}
	.bg-img {
		position: absolute;
		z-index: -1;
	}
	.e3 {
		right: 0;
		top: 20%;
	}
	.e2 {
		left: 1;
		bottom: 0;
	}
	.e1 {
		top: 0;
		left: 1;
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
	.logo img {
		max-height: 25vh;
	}
	.login-form {
		min-width: 40vw;
		max-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 1rem;
		padding: 20px;
		box-shadow: 0px 0px 25px #585757b3;
		border-radius: 20px;
	}
	.login-form p {
		font-size: 20px;
		font-weight: 600;
		margin: 0.5rem;
	}
	.login-form input {
		width: 70%;
		height: 1.5rem;
		padding: 1rem;
		font-size: 18px;
		border-style: none;
		background-color: #d9d9d9;
		border-radius: 15px;
	}
	.btn {
		min-width: 200px;
		height: 3rem;
		padding: 1rem;
		border-radius: 12px;
		border: none;
		font-size: 19px;
		font-weight: 600;
		margin: 1rem auto 0px;
		cursor: pointer;
	}
	.btnabt {
		background-image: linear-gradient(to right, #3d76e6 0%, #7599e0 100%);
	}
	.btnlog {
		background-image: linear-gradient(to right, #ffc235 0%, #ffdf95 100%);
	}
	.version {
		font-size: 20px;
		color: #404040;
		bottom: 1%;
		position: absolute;
	}
</style>
