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

<div class="wrapper" class:scrolled={scrollY > 30}>
	<div class="navbar">
		<a href="/">
			<h1>SaMoTech Robotics</h1>
		</a>

		<div class="divider" />

		<a href="/" class:active={path===''}>
			<h2>Home</h2>
		</a>
		<a href="/about" class:active={path==='about'}>
			<h2>About Us</h2>
		</a>
		<a href="/competition" class:active={path==='competition'}>
			<h2>Competition</h2>
		</a>
		<a href="/sponsors" class:active={path==='sponsors'}>
			<h2>Sponsors</h2>
		</a>

		<div class="divider" />

		<a href="/support" class="support">
			Support
		</a>
	</div>
</div>

<style lang="scss">
  .spacer {
    height: 6rem;
    width: $page-padding;
  }

  .wrapper {
    position: fixed;
    width: 100vw;
    height: $navbar-height;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    transition: height 300ms ease-in-out, padding 300ms ease-in-out, background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

    &.scrolled {
      height: 4rem;
      padding: 0.5rem 1rem;

      .navbar {
        background-color: transparentize($primary-dark, 0.1);
      }
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      color: var(--text);

      background-color: transparentize($primary-dark, 0.6);
      backdrop-filter: blur(2px);
      box-shadow: $shadow;

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
        margin: 0 0.5rem;
        color: var(--text-inv);

        &.active {
          background-color: transparentize(lighten($primary-dark, 10%), 0.5);
          color: $primary;
        }

        &.support {
          @include button(false, true);
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
    }
  }
</style>
