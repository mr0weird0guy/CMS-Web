<script lang="js">
	import Button from '$lib/components/Button.svelte';
	export let historyItem;
	export let user;
	console.log(user);
</script>

<div class="card-custom">
	<!-- Left User Section -->
	<div class="user-section">
		<div class="user-avatar">
			<span>&#128100;</span>
			<!-- Placeholder for user icon -->
		</div>
		<div class="user-details">
			<p><strong>Name:</strong> {user.Name}</p>
			<p><strong>Email:</strong> {user.Email}</p>
			<p><strong>Department:</strong> {user.Department}</p>
			<p><strong>Booking Date:</strong> {historyItem.BookedOn}</p>
		</div>
	</div>

	<!-- Right Components Section -->
	<div class="components-section">
		<h6>Components Booked</h6>
		<ul class="components-list">
			{#each Array(4)
				.fill()
				.map((_, i) => historyItem.Component[i]) as item, i}
				{#if item}
					<li>{i + 1}. {item.name} <Button variant="primary">View</Button></li>
				{/if}
			{/each}
			<!-- View All Button -->
			<div class="view-all">
				<Button variant="success">View All</Button>
			</div>
		</ul>
	</div>
</div>

<style>
	p {
		max-width: 250px;
	}

	.card-custom {
		width: 50vw;
		margin: 1.5rem auto;
		border-radius: 15px;
		box-shadow: 0px 0px 12px 8px rgba(0, 0, 0, 0.1);
		padding: 20px;
		display: flex;
		justify-content: space-around;
	}

	.user-section {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;
	}

	.user-avatar {
		width: 50px;
		height: 50px;
		background-color: #e0e0e0;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		color: #555;
		margin-right: 15px;
	}

	.user-details p {
		margin: 5px 0;
	}

	.components-section h6 {
		margin-bottom: 10px;
		font-size: 16px;
		font-weight: bold;
	}

	.components-section {
		display: flex;
		width: 50%;
		flex-direction: column;
		justify-content: space-between;
	}

	.components-list {
		list-style: none;
		padding: 0;
	}

	.components-list li {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #f0f0f0;
		padding: 8px;
		margin-bottom: 10px;
		border-radius: 10px;
	}

	.view-all {
		align-items: flex-end;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}
</style>
