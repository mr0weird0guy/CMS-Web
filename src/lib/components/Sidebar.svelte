<script>
	// let user = './images/user-icon.png';
	import user from '$lib/assets/user-icon.png';
	import history from '$lib/assets/history-icon.png';
	import about from '$lib/assets/about-icon.png';
	import home from '$lib/assets/home-icon.png';
	import profile from '$lib/assets/profile-picture.png';
	//Function to sign out the user
	function signOut() {
        // Navigate to the login page
        window.location.href = '/login';
    }
</script>

<div class="wrapper">

<div class="sidebar">
	<div class="menu">
		<div class="profile-info">
			<div class="profile">
				<!-- dummy profile picture -->
				<img src={profile} alt="Profile Picture" class="profile-picture" />
			</div>
			<p class="username">Agnik Paul</p>
			<p class="email">23phcs01@kristujayanti.com</p>
		</div>

		<!-- Class was applied to img -->
		<!-- We need to apply a class to the anchor tag -->
		<!-- :facepalm: -->

		<a class="navlink" href="/home">
			<img class="icon" src={home} alt="Home" />
			Home
		</a>

		<a class="navlink" href="/users">
			<img src={user} alt="Users" class="icon" />
			Users
		</a>
		<a class="navlink" href="/history">
			<img src={history} alt="History" class="icon" />
			History
		</a>

		<a class="navlink" href="/about">
			<img src={about} alt="About" class="icon" />
			About
		</a>
	</div>
	<button class="sign-out" on:click={signOut}>Sign Out</button>
	<p class="version">Version 1.0.0</p>
</div>
</div>

<style>
	.wrapper {
		display: flex;
		margin-right: 300px;
	}
	.sidebar {
		width: 100%;
		max-width: 300px;
		height: 100vh;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		/* border: 1px solid #e0e0e0; */
		padding: 20px;
		position: fixed;
		background-image: url('/images/background-image.png'), linear-gradient(to bottom right, #ffffff, #f0f0f0);
		background-size: fill;
		background-position: center;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		/* border-radius: 10px; */
	}

	.profile {
		margin-bottom: 20px;
	}

	.profile-picture {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		border: 3px solid #ffffff;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.profile-info {
		margin-bottom: 20px;
		text-align: center;
	}

	.username,
	.email {
		color: #333333;
		margin: 0;
	}

	.menu {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		padding: 10px;
		margin-top: 120px;
		background-color: rgba(255, 255, 255, 0.9);
		width: 80%;
	}

	.menu a {
		color: #333333;
		text-decoration: none;
		margin-bottom: 10px;
		display: flex;
		align-items: center;
		transition: background-color 0.3s ease;
		padding: 10px;
		border-radius: 5px;
	}

	.menu a:hover {
		background-color: #cedeff;
	}

	.icon {
		height: 20px;
		margin-right: 4px;
	}

	.navlink {
		width: 100%;
		justify-content: center;
	}

	.sign-out {
		background-color: #ffffff;
		color: #e53935;
		border: 2px solid #e53935;
		padding: 10px 20px;
		cursor: pointer;
		font-size: 16px;
		border-radius: 5px;
		transition: background-color 0.3s ease;
	}

	.sign-out:hover {
		background-color: #e53935;
		color: #ffffff;
	}

	.version {
		font-size: 1rem;
		letter-spacing: 1px;
		color: #ffff;
		font-family: junge;
		font-weight: 800;
	}

	.email {
		font-size: 14px;
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			max-width: none;
		}
	}
</style>
