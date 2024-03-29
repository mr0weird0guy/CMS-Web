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
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.search {
		background-color: #1d4ed8;
		width: 50%;
		height: 2.8rem;
		margin-left: -3.5rem;
		padding: 5px;
		border: none;
		outline: none;
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

	.back {
		background-color: white;
		color: #ffc235;
	}

	.login {
		background-color: #4c76c5;
	}

	.about {
		background-color: #f8eb72;
	}
</style>
