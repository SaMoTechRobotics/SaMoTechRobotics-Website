<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let scrollY = 0;

	onMount(() => {
		window.addEventListener('scroll', () => {
			scrollY = window.scrollY;
		});
	});

	$: path = $page.url.pathname.replace('/', '');
</script>

<div class="spacer" />

<div class="wrapper" class:scrolled={scrollY > 100}>
	<div class="navbar">
		<a href="/">
			<h1>SaMoTech Robotics</h1>
		</a>

		<div class="divider" />

		<a href="/" class:active={path===''}>
			<h2>Home</h2>
		</a>
		<a href="/competition" class:active={path==='competition'}>
			<h2>Competition</h2>
		</a>
		<a href="/about" class:active={path==='about'}>
			<h2>About Us</h2>
		</a>
		<a href="/sponsors" class:active={path==='sponsors'}>
			<h2>Our Sponsors</h2>
		</a>

		<div class="divider" />

		<button>Support</button>
	</div>
</div>

<style lang="scss">
  .spacer {
    height: 6rem;
  }

  .wrapper {
    position: fixed;
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    &.scrolled {
      height: 4rem;
      padding: 0.5rem 1rem;

      .navbar {
        background-color: var(--bg-dark-transparent);
        padding: 0.5rem 1rem;
      }
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 2rem;
      color: var(--text);

      gap: 0.5rem;

      background-color: var(--bg-dark-transparent);
      backdrop-filter: blur(2px);

      border-radius: 1rem;

      .divider {
        margin: 0 1rem;
        background-color: var(--bg-primary);
        height: 1rem;
        width: 1px;
      }

      a {
        padding: 1rem 1rem;
        border-radius: 0.5rem;
        text-decoration: none;
        color: var(--text-inv);

        &.active {
          background-color: var(--bg-dark-transparent);
          color: var(--primary);
        }
      }

      h1 {
        font-size: 1rem;
        margin: 0;
      }

      h2 {
        font-size: 0.8rem;
        margin: 0;
      }

      button {
        @include button(true);
      }
    }
  }
</style>
