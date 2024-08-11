<script lang="ts">
	import dayjs from 'dayjs';

	let text: HTMLParagraphElement;

	export let img: string = '';
	export let title: string = '';
	export let date: string = '';

	export let big = false;
</script>

<div class="wrapper" class:big>
	<div class="image">
		<img src={img} alt="" />
	</div>
	<div class="content">
		<h1>{title}</h1>
		<p class="date">{dayjs(date).format('MMMM D, YYYY')}</p>
		<p bind:this={text}>
			<slot />
		</p>
	</div>
</div>

<style lang="scss">
  .wrapper {
    background: transparentize($primary-dark, 0.4);
    backdrop-filter: blur(2px);

    $img-height: 20rem;

    display: grid;
    grid-template-rows: $img-height 1fr;
    grid-template-columns: 1fr;

    border-radius: 1rem;

    padding-bottom: 2rem;

    color: $text-light;

    .image {
      padding: 1rem;

      img {
        border-radius: 0.5rem;
        width: 100%;
        height: 100%;
        max-height: $img-height;
        object-fit: cover;
      }
    }

    .content {
      padding: 0 1rem;
      margin: 0;

      overflow: hidden;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0;
      padding: 0 $page-padding;
      text-align: center;
    }

    .date {
      font-size: 0.8rem;
      font-weight: bold;
      margin: 0;
      text-align: center;
    }

    p {
      font-size: 1rem;
      font-weight: normal;
      padding: 0 $page-padding;

      text-overflow: ellipsis;
    }

    &.big {
      img {
        width: calc(100% - 20rem);
      }
    }
  }
</style>