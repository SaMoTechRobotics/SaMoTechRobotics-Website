<script lang="ts">
	import PostsModal from '$lib/components/posts/PostsModal.svelte';
	import { onMount } from 'svelte';
	import type { PostDetails } from '$lib/types/Post';

	let open = false;
	let post: PostDetails;

	function openPost(e: CustomEvent) {
		open = true;
		post = e.detail;
	}

	onMount(() => {
		// @ts-ignore
		document.addEventListener('openPost', openPost);
	});
</script>

<div class="wrapper">
	<slot />
</div>
<PostsModal bind:open {post}>
	<slot />
</PostsModal>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-template-rows: auto;

    gap: 2rem;

    padding: 2rem $page-padding;

    @media (max-width: 810px) {
      grid-template-columns: 1fr;
    }
  }
</style>