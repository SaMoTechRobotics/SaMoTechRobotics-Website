<script lang="ts">
	import { onMount } from 'svelte';

	export let game: string;
	export let year: string;

	onMount(() => {
		fetch(`https://api.ftcscout.org/rest/v1/teams/21936/events/2023`)
			.then(res => res.json())
			.then(data => {
				console.log(data);
			});
	});
</script>

<div class="wrapper">
	<div class="header">
		<h1>{game}</h1>
		<p>{year}</p>
	</div>

	<div class="stats">
	</div>
</div>

<style lang="scss">
  .wrapper {
    background-color: transparentize($primary-dark, 0.5);
    margin: 2rem;
    border-radius: 1rem;
    padding: 1rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    color: $text-light;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      h1 {
        font-size: 2rem;
      }

      p {
        font-size: 1rem;
      }
    }

    .stats {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
</style>