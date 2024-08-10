<script lang="ts">
	import type { PostDetails } from '$lib/types/Post';
	import dayjs from 'dayjs';

	let text: HTMLParagraphElement;

	export let img: string = '';
	export let title: string = '';
	export let date: string = '';

	export let big = false;
</script>

<div class="wrapper" class:big>
	<img src={img} alt="" />
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

    //display: flex;
    //flex-direction: column;
    //justify-content: start;
    //align-items: center;
    display: grid;
    grid-template-rows: $img-height 20rem;
    grid-template-columns: 1fr;


    border-radius: 1rem;

    padding-bottom: 2rem;

    color: $text-light;

    img {
      width: calc(100% - 2rem);
      max-height: $img-height;
      padding: 1rem;
      object-fit: cover;
    }

    .content {
      padding: 1rem;

      //display: flex;
      //flex-direction: column;
      //justify-content: start;
      //align-items: center;
      //max-height: 100%;

      overflow: hidden;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0;
      padding: 0 $page-padding;
      text-align: left;
    }

    .date {
      font-size: 0.8rem;
      font-weight: bold;
      margin: 0;
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