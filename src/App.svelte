<script>
	import Box from "./components/wideBox.svelte";
	import people from "./components/people";
</script>

<main>
	<details>
		<summary>Material</summary>
		<div />
	</details>

	<article>
		<h2>Jump to</h2>
		<a href="#svelte">Team Svelte</a> <br />
		<a href="#jekyll"> Team Jekyll</a>
	</article>

	{#each ["svelte", "jekyll"] as team}
		<h1 id="svelte">Team {team}</h1>
		{#each people[team] as peep}
			<Box>
				<div slot="lhs">
					<iframe
						title="Web Demo by {peep.name}"
						src="./{team}/{peep.name}"
						frameborder="0"
					/>
				</div>
				<div slot="rhs"><strong>By</strong>: {peep.name}</div>
			</Box>
		{/each}
	{/each}
</main>

<style>
	main {
		padding: 1em;
		margin: 0 auto;
	}
	a,
	a:visited,
	a:hover {
		color: #a8f;
		text-decoration: none;
	}
</style>
