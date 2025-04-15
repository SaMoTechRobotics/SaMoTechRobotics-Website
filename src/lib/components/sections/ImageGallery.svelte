<script lang="ts">
	export let images: string[] = [];
</script>

<div class="wrapper">
	<div class="grid">
		{#each images as image}
			<div class="image">
				<img src={image} alt="" />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
  .wrapper {
    padding: 2rem $page-padding;

    //display: flex;
    //justify-content: center;
  }

  .grid {
    //display: grid;
    //grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    //grid-auto-flow: dense;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    //grid-template-columns: 1fr 1fr 1fr;
    //grid-template-rows: repeat(auto-fill, minmax(20rem, 1fr));
    //grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    //grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    flex: 1 1 30rem;

    img {
      //width: 20rem;
      width: 100%;
      height: auto;
      //object-fit: cover;
      border-radius: 1rem;
    }
  }
</style>
