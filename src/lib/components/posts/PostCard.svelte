<script lang="ts">
	import dayjs from 'dayjs';
	import type { PostDetails } from '$lib/types/Post';
	import Icon from '@iconify/svelte';

	export let post: PostDetails;
	export let index: number;
</script>

<div class="wrapper">
	<div class="image">
		<img src={post.images[0]} alt="" />
		<a href="/news" class="image-overlay">
			<Icon icon="bi:image" inline />  {post.images.length}</a>
		<!--{#if post.images.length > 1}-->
		<!--			<div class="images-count">+ {post.images.length - 1}</div>-->
		<!--		{/if}-->
		<!--		<div class="images-count">{post.images.length}</div>-->
	</div>
	<div class="content">
		<h1>{post.title}</h1>
		<p class="date">{dayjs(post.date).format('MMMM D, YYYY')}
			<span class="break-dot">&#x2022;</span>
			<span class="icon">
				<Icon icon="bi:image" inline />
			</span>
			{post.images.length}
		</p>
		<p>{@html post.text}</p>
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

      .image-overlay {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: calc(100% - 2rem);
        height: calc($img-height - 2rem);

        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.6rem;

        text-decoration: none;
        font-size: 2rem;

        color: transparentize($text-light, 1);
        background-color: transparentize($primary-dark, 1);

        transition: color 200ms ease-in-out, background-color 200ms ease-in-out, backdrop-filter 200ms ease-in-out;

        &:hover {
          color: $text-light;
          background-color: transparentize($primary-dark, 0.6);
          backdrop-filter: blur(2px);
        }
      }

      .images-count {
        position: absolute;
        top: $img-height - 3rem - 1rem;
        right: 1rem + 0.5rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        background: transparentize($primary-darker, 0.2);
        backdrop-filter: blur(2px);
        color: $text-light;
        font-size: 1.2rem;

        &:hover {
          background: $primary-dark;
        }
      }
    }

    .content {
      padding: 0 1rem;
      margin: 0;

      overflow: hidden;
    }

    h1 {
      font-size: 2rem;
      padding: 0 $page-padding;
      margin: 0;
      text-align: center;
    }

    .date {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      text-align: center;

      .break-dot {
        margin: 0 0.2rem;
      }

      .icon {
        margin-right: 0.2rem;
        font-size: 1.2rem;
      }
    }

    p {
      font-size: 1rem;
      font-weight: normal;
      padding: 0 $page-padding;

      text-overflow: ellipsis;
    }

    :global(a) {
      color: $primary;
      font-weight: bold;
    }
  }
</style>