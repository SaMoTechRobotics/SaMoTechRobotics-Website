<script lang="ts">
	import type { PostDetails } from '$lib/types/Post';
	import dayjs from 'dayjs';

	let text: HTMLParagraphElement;

	export let img: string = '';
	export let title: string = '';
	export let date: string = '';

	export let big = false;

	function openPost() {
		document.dispatchEvent(new CustomEvent<PostDetails>('openPost', {
			detail: {
				img,
				title,
				date,
				text: text.innerText
			}
		}));
	}
</script>

<!--svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
<div class="wrapper" on:click={openPost} class:big>
	<img src={img} alt="" />
	<h1>{title}</h1>
	<p class="date">{dayjs(date).format('MMMM D, YYYY')}</p>
	<p bind:this={text}>
		<slot />
	</p>
</div>

<style lang="scss">
  .wrapper {
    background: transparentize($primary-dark, 0.4);
    backdrop-filter: blur(2px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;

    padding-bottom: 2rem;

    color: $text-light;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
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
    }

    &.big {
      img {
        width: calc(100% - 20rem);
        border-radius: 1rem;
      }
    }
  }
</style>