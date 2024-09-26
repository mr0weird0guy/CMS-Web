<script>
	export var componentData;
</script>

<a class="box" href="/components/${componentData.Id}">
	<img src={componentData.Image} alt={componentData.Name} />
	<div class="comp-name">{componentData.Name}</div>
</a>

<style>
	.box {
		width: 200px;
		height: 200px;
		background-color: #fefefe;
		margin: 10px;
		border-radius: 15px;
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
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
