<script lang="ts">
	export let variant: string;
	export let clickHandler: any = () => {};
</script>

<button class={variant} on:click={clickHandler}><slot /></button>

<style>
	button {
		width: 110px;
		height: 40px;
		border-radius: 8px;
		border: none;
		font-size: 16px; /* Now looks better */
		cursor: pointer;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.3s ease; /* Smooth transition for background color */
	}

	/* Standardizing the size and padding of all variants */
	.search,
	.primary,
	.danger,
	.success {
		width: 110px;
		height: 40px;
		padding: 0 10px;
	}

	.search {
		background-color: #1d4ed8;
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

	/* I add a hover effect */
	button:hover {
		opacity: 0.9; /* Adjust some opacity on hover :) */
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
