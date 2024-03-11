<script lang="ts">
	export let variant: string;
	export let clickHandler: any = () => {};
</script>

<button class={variant} on:click={clickHandler}><slot /></button>

<style>
	button {
		width: 110px;
		height: 40px;
		border-radius: 10px;
		border: none;
		font-size: 20px;
		cursor: pointer;
        color: #fff;
	}

	.primary {
		background-color: #1d4ed8;
		
	}

	.danger {
		background-color: #e51111;
		
	}

	.success {
		background-color: #27d76d;
		
	}
</style>
