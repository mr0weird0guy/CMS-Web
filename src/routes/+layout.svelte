<script>
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { auth } from '$lib/firebase/config';
	import { onMount } from 'svelte';
	import { authStore } from '../store/store';
	// export let data;

	const nonAuthRoute = ['/login', '/about'];
	let cUser = auth.currentUser;

	// navigate to login page if user is not logged in
	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged(async (user) => {
			cUser = user;
			const currentPath = window.location.pathname;
			if (!user && !nonAuthRoute.includes(currentPath)) {
				window.location.href = '/login';
				return;
			}

			if (user && (currentPath === '/' || currentPath === '/login')) {
				window.location.href = '/home';
				return;
			}

			if (!user) {
				return;
			}

			authStore.update((curr) => {
				return {
					...curr,
					user: user,
					loading: false,
					data: {}
				};
			});
		});
		return unsubscribe;
	});
</script>

<div class="app">
	{#if cUser !== null}
		<Sidebar email={cUser.email} />
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
