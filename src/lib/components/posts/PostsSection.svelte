<script>
	import PostsModal from '$lib/components/posts/PostsModal.svelte';
	import { onMount } from 'svelte';

	let open = false;

	function openPost() {
		alert('open');
		open = true;
	}

	onMount(() => {
		document.addEventListener('openPost', openPost);
	});
</script>

<div class="wrapper">
	<slot {openPost} />
	<PostsModal open>
		<slot />
	</PostsModal>
</div>

<style lang="scss">
  .wrapper {
    //display: flex;
    //flex-direction: row;
    //flex-wrap: wrap;
    //justify-content: center;
    //align-items: center;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-template-rows: auto;

    gap: 2rem;

    padding: 2rem $page-padding;
  }
</style>