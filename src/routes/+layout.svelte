<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	// import { onMount } from 'svelte';
	export let data;
	var user = data.user;
	// navigate to login page if user is not logged in
	// onMount(() => {
	// 	if (!user) {
	// 		window.location.href = '/login';
	// 	}
	// });
</script>

<div class="app">
	{#if user}
		<!-- TODO: Do not display the sidebar if the user is not logged in -->
		<Sidebar name={user.name} email={user.email} />
	{/if}
	<slot />
</div>

<style>
	.app {
		display: flex;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		overflow-y: hidden;
	}
</style>
