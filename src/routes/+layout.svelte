<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="app">
	<Sidebar />
	<slot />
</div>

<style>
	.app {
		display: flex;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
</style>
