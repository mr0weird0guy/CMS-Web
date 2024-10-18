<script>
	import Button from './Button.svelte';
	export let label = '';
	export let back = 'none';
</script>

<div class="header">
	<div class="left">
		<h3>{label}</h3>
	</div>
	<div class="right" style="display: {back};">
		<Button variant="back"><span class="material-symbols-outlined">arrow_back</span>Back</Button>
	</div>
</div>
<hr class="headerLine" />

<style>
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
</style>
