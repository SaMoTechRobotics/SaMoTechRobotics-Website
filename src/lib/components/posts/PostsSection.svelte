<script lang="ts">
	import { posts } from '$lib/ts/posts';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';

	// let open = false;
	// let post: PostDetails;

	// function openPost(e: CustomEvent) {
	// 	open = true;
	// 	post = e.detail;
	// }

	// onMount(() => {
	// document.addEventListener('openPost', openPost);
	// });
</script>

<div class="wrapper">
	{#each posts.slice(0, 4) as post}
		<PostCard img={post.images[0]} title={post.title} date={post.date}>{post.text}</PostCard>
	{/each}
</div>

<div class="button">
	<LinkButton transparent to="/news">View More</LinkButton>
</div>
<!--<PostsModal bind:open {post}>-->
<!--	<slot />-->
<!--</PostsModal>-->

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
    grid-template-rows: auto;

    gap: 2rem;

    padding: 2rem $page-padding;

    @media (max-width: 810px) {
      grid-template-columns: 1fr;
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem $page-padding;
    }
  }
</style>