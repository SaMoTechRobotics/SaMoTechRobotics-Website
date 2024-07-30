<script lang="ts">
	export let title: string;
	export let img: string = '';
</script>
<div class="wrapper" class:img={img !== ""} style={img ? `background-image: url(${img})` : ""}>
	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>
	<div />
</div>

<style lang="scss">
  .wrapper {
    margin: 1rem 2rem;
    border-radius: 1rem;
    padding: 20rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.img {
      background-size: cover;
      background-position: center;
    }

    .content {
      text-align: center;
      margin-bottom: 2rem;

      color: var(--text-inv);
      text-shadow: var(--text-shadow);

      h1 {
        font-size: 3rem;
      }
    }
  }
</style>