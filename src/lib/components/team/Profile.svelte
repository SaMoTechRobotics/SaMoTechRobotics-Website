<script lang="ts">
	export let name: string;

	let img: string = `images/photos/bios/${name}.webp`;
</script>

<div class="wrapper">
	<img src={img} alt="" />
	<div class="content">
		<h1>{name}</h1>
		<hr />
		<p>
			<slot />
		</p>
	</div>
</div>

<style lang="scss">
  .wrapper {
    padding: 1rem 1rem;

    display: grid;
    grid-template-columns: 13rem 1fr;
    grid-template-rows: 1fr;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
</style>
