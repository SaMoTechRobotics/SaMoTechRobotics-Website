<script lang="ts">
	import { posts } from '$lib/ts/posts';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';

	export let home = false;

	export let postsCount = -1;
</script>

<div class="wrapper">
	<div class="grid" class:home>
		{#each (postsCount === -1 ? posts : posts.slice(0, postsCount)) as post, i}
			<PostCard post={post} index={i} />
		{/each}
	</div>
</div>

{#if home}
	<div class="button">
		<LinkButton to="/news">View More SaMoTech News</LinkButton>
	</div>
{/if}

<style lang="scss">
  .wrapper {
    padding-right: $page-padding * 2;

    @media (max-width: 810px) {
      padding-right: $mobile-padding * 2;
    }

    &:has(.home) {
      padding-right: 0;
      @media (max-width: 810px) {
        margin-right: 2rem + $mobile-padding * 2;
      }

      .grid {
        width: calc(100% + $page-padding);
      }
    }

    .grid {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
      grid-template-rows: auto;

      gap: 2rem;

      padding: 2rem $page-padding;

      @media (max-width: 810px) {
        padding: 1rem $mobile-padding;
        grid-template-columns: 100%;
      }

      &.home {
        @media (min-width: 810px) {
          display: grid;
          grid-template-columns: repeat(4, minmax(24rem, 1fr)) 4rem;
          grid-template-rows: 1fr;
          gap: 2rem;

          overflow: scroll;

          scrollbar-width: none;
        }
      }
    }
  }

  .button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
</style>