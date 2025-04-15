<script>
	import PostsSection from '$lib/components/posts/PostsSection.svelte';
</script>

<PostsSection />


<style lang="scss">
  :global(.layout.news) {
    background: linear-gradient(180deg, $primary-darker 0%, $primary 30%, $primary-dark 95%, $primary-darker 100%);
  }
</style>