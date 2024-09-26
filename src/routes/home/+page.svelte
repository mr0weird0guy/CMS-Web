<script>
	import Button from '$lib/components/Button.svelte';
	import Searchbar from '$lib/components/Searchbar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Component from '$lib/components/Component.svelte';

	export let componentList;
</script>

<main>
	<div class="head">
		<Header label="Components" />
		<div class="items">
			<Button variant="success"><span class="material-symbols-outlined"> add </span>Add</Button>
			<Searchbar text="Search" />
		</div>
	</div>
	<div class="componentList">
		{#each componentList as component}
			<Component {component} />
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
	}

	.head {
		width: calc(100% - 300px);
		position: fixed;
		margin-bottom: 30px;
		background: white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 13px -2px;
	}

	.componentList {
		padding-top: 22vh;
		display: grid;
		grid-template-columns: auto auto auto auto;
		justify-content: space-evenly;
	}

	@media only screen and (max-width: 1200px) {
		.componentList {
			grid-template-columns: auto auto auto;
		}
	}

	@media only screen and (max-width: 980px) {
		.componentList {
			grid-template-columns: auto auto;
		}
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
</style>
