<script>
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
	import Searchbar from '$lib/components/SearchBar.svelte';
	import History from '$lib/components/History.svelte';

	export let data;

	const historyList = data.historyList;
	const userList = data.userList;
</script>

<main>
	<div class="head">
		<Header label="History" />
		<div class="items">
			<Button variant="success"><span class="material-symbols-outlined"> add </span>Add</Button>
			<Searchbar text="Search" />
		</div>
	</div>
	<div class="HistoryList">
		{#each historyList as historyItem}
			<History
				{historyItem}
				user={userList.filter((item) => item.Email === historyItem.userEmail)[0]}
			/>
		{/each}
	</div>
</main>

<style>
	main {
		width: 100%;
	}

	.HistoryList {
		padding-top: 20vh;
	}

	.head {
		width: calc(100% - 300px);
		position: fixed;
		margin-bottom: 30px;
		background: white;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 0px 13px -2px;
	}

	.items {
		display: flex;
		align-items: center;
		padding: 20px;
		justify-content: space-between;
	}
</style>
