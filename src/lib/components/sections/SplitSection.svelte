<script lang="ts">
	export let img: string;
	export let title: string;
	export let textSide: 'right' | 'left' = 'right';
	export let dark: boolean = false;
</script>

<div class="wrapper" class:reverse={textSide === 'left'} class:dark>
	<div class="img">
		<img src={img} alt="" />
	</div>
	<div class="text">
		<h1>{title}</h1>
		<p>
			<slot />
		</p>
		<div class="buttons">
			<slot name="buttons" />
		</div>
	</div>
</div>

<style lang="scss">
  .wrapper {
    height: 100%;

    display: grid;
    grid-template-columns: 0.8fr 1fr;
    grid-template-rows: 1fr;


    background: transparent;

    border-radius: 1rem;
    overflow: hidden;

    padding: 0 $page-padding;

    &.dark {
      color: $text-light;
    }

    @media(min-width: 810px) {
      &.reverse {
        grid-template-columns: 1fr 1fr;

        > .text {
          order: 1;
        }

        > .img {
          order: 2;
        }
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

      h1 {
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

      &:empty {
        display: none;
      }
    }

    @media(max-width: 1100px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 0;

      padding: 0 $mobile-padding;


      .text {
        padding: 2rem 0;

        h1 {
          margin-top: 0;
        }

        p {
          margin-left: 0;
          text-align: center;
        }
      }

      .buttons {
        margin-bottom: 1rem;
      }
    }
  }
</style>