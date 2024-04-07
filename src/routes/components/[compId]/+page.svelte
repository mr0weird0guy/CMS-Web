
<!-- <h1>You are viewing component: {componentId}</h1> -->
<script>
	import { page } from '$app/stores';
	let componentId = $page.params.compId;
	import { onMount } from 'svelte';
	import Button from '$lib/components/Button.svelte';
	import InputField from '$lib/components/InputField.svelte';

	let componentimg = '/addCompoImgs/compoimg1.png';
	let isEditMode = false;
	let componentName = '';
	let componentModel = '';
	let componentPrice = '';
	let componentQuantity = '';

	function handleUpdateClick() {
		isEditMode = true;
	}

	function handleSaveClick() {
		isEditMode = false;
	}

	onMount(() => {
		// Fetch data from Firebase and set component name to Firebase data
	});
</script>

<main>
	<div class="header">
		<div class="left">
			<h3>{isEditMode ? 'Update Component' : 'Each Component'}</h3>
		</div>
		<div class="right">
			<Button variant="back"><span class="material-symbols-outlined">arrow_back</span>Back</Button>
		</div>
	</div>
	<hr class="headerLine" />

	<div class="imgbox">
		<div class="img-div">
			<img src={componentimg} alt="" />
		</div>
	</div>

	<div class="left-box">
		<InputField label="Name" bind:value={componentName} readonly={!isEditMode} />
		<InputField label="Model" bind:value={componentModel} readonly={!isEditMode} />
		<InputField label="Price" bind:value={componentPrice} readonly={!isEditMode} />
		<InputField label="Quantity" bind:value={componentQuantity} readonly={!isEditMode} />
	  </div>
	<div class="right-box">
		<div id="updatebox">
			{#if !isEditMode}
				<button class="update-btn" on:click={handleUpdateClick}>Edit</button>
			{/if}
		</div>
		<div id="historybox"><button class="hisory-button">History</button></div>
	</div>

	<div class="footer-buttons">
		{#if isEditMode}
			<div class="save-button">
				<button class="save-btn" on:click={handleSaveClick}>Save</button>
			</div>
		{/if}
		<div class="delete-button">
			<button class="delete-btn" id="DELETE-btn">Delete</button>
		</div>
	</div>
</main>

<style>
	main {
		width: 100vw;
		overflow-y: scroll;
		/* height: 100vh; */
		/* background: red; */
		/* background-color: bisque; */
	}

	.header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		/* background-color: aqua; */
	}
	.header h3 {
		/* color: white; */
		font-size: 30px;
	}

	.imgbox {
		width: 343px;
		height: 237px;
		/* background-color: red; */
		margin-left: 32%;
		margin-top: 10px;
		border: 1px solid #ffffff;
		border-radius: 15px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}
	.imgbox:hover {
		transform: scale(1.05);
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
	}

	.img-div {
		width: 186px;
		position: absolute;
		height: 173px;
		margin: 30px;
		margin-left: 75px;
	}

	.left-box {
		width: 266px;
		height: 280px;
		/* background-color: red; */
		margin-top: 3%;
		margin-left: 180px;
		/* gap: 20px; */
		float: left;
	}
	
	.right-box {
		width: 338px;
		height: 367px;
		float: right;
		margin-top: 2%;
		margin-right: 180px;
		/* background-color: red; */
	}

	#updatebox {
		width: 100%;
		height: 156px;
		display: flex;
		justify-content: center;
		/* background-color: rgb(67, 37, 59); */
	}
	#historybox {
		width: 100%;
		height: 187px;
		display: flex;
		justify-content: center;
		/* background-color: rgb(92, 148, 129); */
	}

	.right-box .update-btn {
		width: 209px;
		height: 53px;
		border: none;
		border-radius: 5px;
		color: #ffffff;
		background-color: #27d76d;
	}

	.right-box .update-btn:hover {
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
	}

	.right-box .hisory-button {
		width: 209px;
		height: 53px;
		border: none;
		border-radius: 5px;
		color: #ffffff;
		background-color: #e5b711;
	}
	.right-box .hisory-button:hover {
		background-color: #d3a010;
		transform: translateY(-3px);
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
	}

	.save-button {
		width: 100%;
		text-align: center;
		margin-top: 20px;
	}

	.delete-button {
		width: 100%;
		text-align: center;
		margin-top: 20px;
		/* background-color: #e5b711; */
		height: 100px;
	}

	.footer-buttons {
		display: flex; /* Change to flex to enable side-by-side positioning */
		justify-content: center; /* Align buttons horizontally */
		align-items: center; /* Center items vertically */
		/* background-color: #3eba70; */
		height: 100px;
		width: 900px;
		margin-top: 30%;
	}

	.save-button,
	.delete-button {
		width: 209px; /* Each button takes 50% width */
		text-align: center;
		margin-top: 10px;
	}

	.save-button {
		margin-right: 5px; /* Add some space between buttons */
	}

	.delete-button {
		margin-left: 200px;
		/* background-color: #997f22; Adjust delete button background color */
	}

	.save-btn,
	.delete-btn {
		width: 100%;
		height: 53px;
		border: none;
		border-radius: 5px;
		color: #ffffff;
	}

	.save-btn {
		background-color: #3d76e6;
	}

	.delete-btn {
		background-color: #e51111;
	}

	.delete-btn:hover,
	.save-btn:hover {
		transform: translateY(-3px);
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
	}

	
</style>
