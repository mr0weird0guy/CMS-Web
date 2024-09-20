<script>
	import Button from '$lib/components/Button.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header label="Components" />
	<div class="items">
		<Button variant="success"><span class="material-symbols-outlined"> add </span>Add</Button>
		<Searchbar text="Search" />
	</div>
	<div class="container">
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
	</div>
	<div class="container">
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
	</div>
	<div class="container">
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
		<div class="box">
			<img src="src\lib\images\img1.jpg" alt="dd" />
			<div class="comp-name">VGA Adapter Connector</div>
		</div>
	</div>
</main>

<style>
	main {
		width: 100%;
	}

	.items {
		display: flex;
		align-items: center;
		padding: 20px;
		justify-content: space-between;
	}
	.container {
		display: flex;
		justify-content: space-evenly;
		padding: 20px;
		flex-wrap: wrap;
		margin-bottom: 1vh;
	}
	.box {
		width: 200px;
		height: 200px;
		background-color: #fefefe;
		margin: 10px;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
	}
	.comp-name {
		text-align: center;
		padding: 10px;
		color: #4982ff;
		font-size: 16px;
		font-weight: 400;
	}
</style>
