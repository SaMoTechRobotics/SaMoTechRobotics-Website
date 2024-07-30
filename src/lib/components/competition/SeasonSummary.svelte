<script lang="ts">
	export let game: string;
	export let year: string;
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