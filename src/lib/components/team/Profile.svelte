<script lang="ts">
	export let name: string;

	let img: string = `images/photos/bios/${name}2025.jpg`;
</script>

<div class="wrapper">
	<img src={img} alt="" />
	<div class="content">
		<h1>{name}</h1>
		<!--		<hr />-->
		<p style="display: visible;">
			<slot />
		</p>
	</div>
</div>

<style lang="scss">
  .wrapper {
    padding: 1rem 1rem;

    //display: grid;
    //grid-template-columns: 13rem 1fr;
    //grid-template-rows: 1fr;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 12rem;
      height: 12rem;
      border-radius: 50%;
      object-fit: cover;
    }

    h1 {
      font-size: 2rem;
      margin-top: 0.5rem;
      color: $text-light;
    }

    @media (max-width: 768px) {
      img {
        width: 6rem;
        height: 6rem;
      }

      h1 {
        font-size: 1.5rem;
      }
    }
  }
</style>
