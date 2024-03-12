<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	export let no: number;
	export let name: String;
	export let email: String;
	export let department: String;
</script>

<div class="user-card">
	<p>{no}.{name}</p>
	<p>{email}</p>
	<p>{department}</p>
	<Button variant="danger">Delete<span class="material-symbols-outlined"> delete </span></Button>
</div>

<style>
	.user-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		font-size: 22px;
		background-color: #d9d9d9;
		margin: 20px;
		border-radius: 10px;
	}
	p {
		max-width: 250px;
	}
</style>
