<script lang="js">
	import UserInfo from '$lib/components/UserInfo.svelte';
	import Button from '$lib/components/Button.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
</script>

<main>
	<div class="header">
		<div class="left">
			<!-- <span class="material-symbols-outlined">account_circle</span> -->
			<h3>Add components</h3>
		</div>
		<div class="right">
			<Button variant="back"><span class="material-symbols-outlined">arrow_back</span>Back</Button>
		</div>
	</div>
	<hr class="headerLine" />
	<div class="component-form">
		<div class="input-group">
			<label for="component-image">Upload Component Image:</label>
			<div class="component-image">
				<input type="file" id="component-image" />
			</div>
		</div>
		<div class="input-group">
			<label for="component-name">Name:</label>
			<input type="text" placeholder="Enter component name" id="component-name" />
		</div>
		<div class="input-group">
			<label for="component-model">Model:</label>
			<input type="text" placeholder="Enter model name" id="component-model" />
		</div>
		<div class="input-group">
			<label for="component-price">Price:</label>
			<input type="number" placeholder="Enter price in INR" id="component-price" min="0" />
		</div>
		<div class="input-group">
			<label for="component-quantity">Quantity:</label>
			<input type="number" placeholder="Enter the quantity"  id="component-quantity" min="1" />
		</div>
		<div class="buttons">
			<button class="save-btn">Save</button>
			<button class="cancel-btn">Cancel</button>
		</div>
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

	.right span {
		padding-right: 5px;
	}

	.headerLine {
		width: 100%;
		height: 1px;
		background-color: #000;
		box-sizing: border-box;
	}

	.component-form {
		margin: 0 auto;
		max-width: 600px;
		padding: 20px;
	}

	.input-group {
		margin-bottom: 15px;
	}

	.input-group label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	.input-group input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		transition: border-color 0.3s;
	}

	.input-group input:focus {
		outline: none;
		border-color: #66afe9;
	}

	.component-image {
		width: 100%;
		height: 247px;
		border: 1px solid #ccc;
		border-radius: 5px;
		position: relative;
	}

	.component-image input {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
		cursor: pointer;
	}
	.buttons {
		display: flex;
		justify-content: flex-end;
		margin-top: 20px;
	}

	.buttons button {
		padding: 10px 20px;
		margin-left: 10px;
		border: none;
		border-radius: 100px;
		cursor: pointer;
		transition:
			background-color 0.3s,
			color 0.3s,
			transform 0.3s;
	}

	.buttons button:hover {
		transform: translateY(-2px);
		color: #0e0909;
	}

	.save-btn {
		background-color: #007bff;
		color: white;
	}

	.cancel-btn {
		background-color: #ffc107;
		color: black;
	}
</style>
    