<script lang="js">
	import UserInfo from '$lib/components/UserInfo.svelte';
	import Button from '$lib/components/Button.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import { onMount } from 'svelte';

	let users = [];


	onMount(() => {
		// Fetch data from firebase using Joe's functions
		users = [...data]
	})
	
</script>

<main>
	 <div class="header">
		<div class="left">
			<span class="material-symbols-outlined">account_circle</span>
			<h3>Users</h3>
		</div>
		<div class="right">
			<Button variant="back"><span class="material-symbols-outlined">arrow_back</span>Back</Button>
		</div>
	</div>
	<hr class="headerLine" />
	<div class="items">
		<Button variant="success"><span class="material-symbols-outlined"> add </span>Add</Button>
		<Searchbar text="Search" />
	</div> 
	<div class="popup">
		<p class="h">AddFaculty</p>
		<hr class="line" />
		<div class="inputs">
			<input type="text" placeholder="Name" class="input" />
			<div class="email">
				<input type="text" placeholder="Email" class="input" />
				<p>@kristujayanti.com</p>
			</div>
			<div class="info">
				<input type="text" placeholder="Select Department" class="input" />
				<input type="text" placeholder="Select Clubs" class="input" />
			</div>
			<div class="popupbtn">
				<Button variant="primary">Add</Button>
			</div>
		</div>
	</div>
	 <div class="title">
		<h3>Name</h3>
		<h3>Email</h3>
		<h3>Department</h3>
	</div>
	<div class="entries">
		<UserInfo name="user" no={1} department="Computer Science" email="user@kristujayanti.com" />
		<UserInfo name="user" no={2} department="Computer Science" email="user@kristujayanti.com" />
	</div> 
</main>

<style>
	main {
		width: 100%;
	}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}

	.left {
		display: flex;
		align-items: center;
	}

	.left span {
		font-size: 30px;
		margin-right: 10px;
	}

	.right span {
		padding-right: 5px;
	}

	.headerLine {
		width: 100%;
		height: 1px;
		background-color: #000;
		box-sizing: border-box;
	}

	.items {
		display: flex;
		align-items: center;
		padding: 20px;
		justify-content: space-between;
	}

	.title {
		width: 66%;
		display: flex;
		align-items: center;
		padding: 16px 50px;
		justify-content: space-between;
	}
	.entries {
		align-items: center;
	}

	.popup .h {
		padding: 5px;
		position: relative;
		left: -35%;
		font-size: 37px;
	}
	.popup {
		position: fixed;
		top: 27%;
		left: 35%;
		background-color: whitesmoke;
		width: 45rem;
		height: 25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-radius: 10px;
		visibility: hidden;
	}

	.popup .line {
		width: 100%;
	}

	.email {
		width: 90%;
		display: flex;
		align-items: center;
	}

	.popup input {
		width: 90%;
		height: 25px;
		padding: 10px;
		border-radius: 5px;
		font-size: 20px;
		border: none;
		outline: none;
	}

	.popup .input {
		margin: 10px;
		box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
	}

	.inputs {
		width: 95%;
		height: 100%;
		font-size: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.info {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.popupbtn {
		position: relative;
		right: -80%;
	}
</style>
