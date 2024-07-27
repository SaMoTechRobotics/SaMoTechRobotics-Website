<script lang="ts">
	export let img: string;
	export let title: string;
	export let textSide: 'right' | 'left' = 'right';
</script>

<div class="card" class:right={textSide === 'right'}>
	<img src={img} alt="" />
	<div class="text">
		<h2>{title}</h2>
		<slot />
	</div>
</div>

<style lang="scss">
  .card {
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    background-color: var(--bg-secondary);
    box-shadow: var(--box-shadow);

    border-radius: 1rem;
    overflow: hidden;

    &.right {
      flex-direction: row-reverse;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }
</style>