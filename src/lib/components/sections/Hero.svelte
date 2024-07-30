<script lang="ts">
	export let title: string;
	export let img: string = '';
</script>
<div class="wrapper" class:img={img !== ""} style={img ? `background-image: url(${img})` : ""}>
	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>
</div>

<style lang="scss">
  .wrapper {
    margin: 1rem 2rem;
    border-radius: 1rem;
    height: calc(100vh - $navbar-height - 4rem);

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    &.img {
      background-size: cover;
      background-position: center;
    }

    .content {
      text-align: center;
      margin-bottom: 2rem;

      color: $text-light;

      h1 {
        font-size: 3rem;
      }
    }
  }
</style>