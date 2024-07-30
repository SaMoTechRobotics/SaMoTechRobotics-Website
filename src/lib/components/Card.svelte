<script lang="ts">
	export let img: string;
	export let title: string;
	export let textSide: 'right' | 'left' = 'right';
</script>

<div class="card" class:reverse={textSide === 'left'}>
	<img src={img} alt="" />
	<div class="text">
		<h2>{title}</h2>
		<slot />
	</div>
</div>

<style lang="scss">
  .card {
    height: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    //background-color: var(--bg);
    background: transparent;

    border-radius: 1rem;
    overflow: hidden;

    padding: 2rem;

    &.reverse {
      grid-template-columns: 1fr 1fr;

      > .text {
        order: 1;
      }

      > img {
        order: 2;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .text {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
</style>