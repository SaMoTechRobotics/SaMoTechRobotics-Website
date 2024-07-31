<script lang="ts">
	export let img: string;
	export let title: string;
	export let textSide: 'right' | 'left' = 'right';
	export let dark: boolean = false;
</script>

<div class="card" class:reverse={textSide === 'left'} class:dark>
	<div class="img">
		<img src={img} alt="" />
	</div>
	<div class="text">
		<h2>{title}</h2>
		<p>
			<slot />
		</p>
		<div class="buttons">
			<slot name="buttons" />
		</div>
	</div>
</div>

<style lang="scss">
  .card {
    height: 100%;

    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;

    //background-color: var(--bg);
    background: transparent;

    border-radius: 1rem;
    overflow: hidden;

    padding: 0 $page-padding;

    &.dark {
      color: $text-light;
    }

    &.reverse {
      grid-template-columns: 1fr 1fr;

      > .text {
        order: 1;
      }

      > .img {
        order: 2;
      }
    }

    .img {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        @include image();
      }
    }

    .text {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      p {
        margin-left: 1rem;
        font-size: 1.1rem;
        line-height: 1.8rem;
        text-align: left;
      }
    }

    .buttons {
      margin-top: 1rem;
      margin-bottom: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>