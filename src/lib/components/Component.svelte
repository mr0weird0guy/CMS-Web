<script>
	export var component;
</script>

<a class="box" href="/components/${component.id}">
	<img src={component.Image} alt={component.Name} />
	<div class="comp-name">{component.Name}</div>
</a>

<style>
	.box {
		width: 200px;
		height: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	img {
		width: 70%;
		height: 70%;
		/* object-fit: cover; */
		background-color: #fefefe;
		margin: 10px;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		border-radius: 15px;
	}

	.comp-name {
		text-align: center;
		padding: 10px;
		color: #4982ff;
		font-size: 16px;
		font-weight: 400;
	}
</style>
