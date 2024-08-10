<script lang="ts">
	import type { PostDetails } from '$lib/types/Post';
	import PostCard from '$lib/components/posts/PostCard.svelte';
	import Icon from '@iconify/svelte';

	export let open: boolean;

	export let post: PostDetails;

	function nextPost() {
	}
</script>

<!--svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions-->
<div class="background" class:open on:click={() => open = false} />
<div class="wrapper" class:open>
	<div class="modal">
		<button>
			<Icon icon="material-symbols:keyboard-arrow-left" />
		</button>
		<div>
			{#if post}
				<PostCard big img={post.img} title={post.title} date={post.date}>{post.text}</PostCard>
			{/if}
		</div>
		<button on:click={nextPost}>
			<Icon icon="material-symbols:keyboard-arrow-right" />
		</button>
		<!--		<div class="post-list">-->
		<!--			<slot />-->
		<!--		</div>-->
	</div>
</div>

<style lang="scss">
  :global(body:has(.open > .modal)) {
    overflow: hidden;
  }

  .background {
    display: none;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 5;

    &.open {
      display: block;
    }
  }

  .wrapper {
    display: none;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 10;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    pointer-events: none;

    backdrop-filter: blur(2px);

    &.open {
      display: flex;

      animation: modalOpen 150ms ease-in-out;
    }

    @keyframes modalOpen {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .modal {
      background: transparentize($primary-dark, 0.1);
      backdrop-filter: blur(4px);
      border-radius: 1rem;

      pointer-events: all;

      $padding: 4rem;

      margin-top: $navbar-height - 2rem;

      width: calc(100% - $padding * 2);
      height: calc(100% - $padding - $navbar-height + 2rem);

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      button {
        background: transparent;
        border: none;
        color: white;
        font-size: 10rem;
        cursor: pointer;
      }

      //.post-list {
      //  width: 20rem;
      //  overflow-y: auto;
      //  padding: 1rem;
      //}
    }
  }
</style>