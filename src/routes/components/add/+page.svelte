	<script context="module">
		export async function load({ fetch }) {
			// Fetch any initial data if needed
			return {
				/* Initial data */
			};
		}
	</script>

	<script>
		import { onMount } from 'svelte';
		import { createEventDispatcher } from 'svelte';
		import Button from '$lib/components/Button.svelte'; 

		const dispatch = createEventDispatcher();
		let componentImage = '';
		let componentName = '';
		let componentModel = '';
		let componentPrice = '';
		let componentQuantity = '';

		function handleImageChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = () => {
            const img = new Image();
            img.onload = function () {
                if (this.width === this.height) {
                    componentImage = reader.result;
                } else {
                    alert(`Please upload a square-shaped image ${ this.width} ,${this.height}`);
					return;
                }
            };
            img.src = reader.result;
        };

        reader.readAsDataURL(file);
    }


		function handleSave() {
			dispatch('save', {
				image: componentImage,
				name: componentName,
				model: componentModel,
				price: componentPrice,
				quantity: componentQuantity
			});
		}

		function handleCancel() {
			componentImage = '';
			componentName = '';
			componentModel = '';
			componentPrice = '';
			componentQuantity = '';
		}
	</script>

	<main>
		<div class="header">
			<div class="left">
				<h3>Add components</h3>
			</div>
			<div class="right">
				<!-- Using the imported Button component -->
				<Button variant="back" 
					><span class="material-symbols-outlined">arrow_back</span>Back</Button
				>
			</div>
		</div>
		<hr class="headerLine" />

		<div class="component-form">
			<div class="input-group">
				<label for="component-image">Upload Component Image:</label>
				<div class="component-image">
					<input type="file" id="component-image" on:change={handleImageChange} />
					{#if componentImage}
						<img
							src={componentImage}
							alt="Uploaded Component Image"
							style="width: 300px; height: 247px;object-fit: cover;  border-radius: 5px;"
						/>
					{/if}
				</div>
				
				<div class="input-group">
					<label for="component-name">Name:</label>
					<input
				    type="text"
					placeholder="Enter component name"
					id="component-name"
					bind:value={componentName}
					/>
				</div>
			</div>

			<div class="input-group">
				<label for="component-model">Model:</label>
				<input
					type="text"
					placeholder="Enter model name"
					id="component-model"
					bind:value={componentModel}
				/>
			</div>

			<div class="input-group">
				<label for="component-price">Price:</label>
				<input
					type="number"
					placeholder="Enter price in INR"
					id="component-price"
					min="0"
					bind:value={componentPrice}
				/>
			</div>

			<div class="input-group">
				<label for="component-quantity">Quantity:</label>
				<input
					type="number"
					placeholder="Enter the quantity"
					id="component-quantity"
					min="1"
					bind:value={componentQuantity}
				/>
			</div>

			<div class="buttons">
				<button class="save-btn" on:click={handleSave}>Save</button>
				<button class="cancel-btn" on:click={handleCancel}>Clear</button>
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
			width: 300px;
			height: 247px;
			border: 1px solid #ccc;
			border-radius: 5px;
			margin-left: 200px;
			position: relative;
		}
		
		.component-image input {
			position: absolute;
			/* background-color: red; */
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
