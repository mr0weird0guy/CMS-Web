<script>
	import Header from '$lib/components/Header.svelte';
</script>

<main>
	<Header label="About" />
	<div class="container">
		<div class="header">
			<p>Designed for <a href="https://kristujayanti.edu.in/">Kristu Jayanti College</a></p>
		</div>

		<div class="paragraph">
			<p>
				The complete project comprises of Mobile Applicaion(Kotlin), Web Dashboard(Svelte) and
				Firebase as Database and backend.
			</p>
			<p>
				The purpose of this project is to manage the component booking and allowing access to
				specific users on the platform.
			</p>
			<p>History can be reviewed and to track the use of the components by several users</p>
		</div>

		<h2>App Developers</h2>
		<ul>
			<li>Rohan Agarwal</li>
		</ul>

		<h2>Web Developers</h2>
		<ul>
			<li>Rohan Agarwal</li>
			<li>San Joe Cijo</li>
			<li>Agnik Paul</li>
			<li>Rishabh Bhatt</li>
			<li>Harsh Pratap Singh</li>
		</ul>

		<h2>Designers</h2>
		<ul>
			<li>Manush [Web Page Designer]</li>
			<li>Aditya [Web & App Designer]</li>
			<li>Shambhavi [Web & App Designer]</li>
			<li>Rishu [App Designer]</li>
		</ul>
	</div>
</main>

<style>
	.container {
		width: 75vw;
		padding: 15px;
		margin: 0 auto;
	}

	.header {
		font-size: 14px;
		margin-bottom: 20px;
	}

	.header a {
		text-decoration: none;
		color: #0066cc;
	}

	.header a:hover {
		text-decoration: underline;
	}

	.paragraph {
		margin-bottom: 30px;
	}

	h2 {
		color: #333333;
		font-size: 20px;
		margin-bottom: 10px;
	}

	ul {
		list-style-type: disc;
		padding-left: 20px;
		margin-bottom: 20px;
	}

	ul li {
		margin-bottom: 5px;
	}
</style>
