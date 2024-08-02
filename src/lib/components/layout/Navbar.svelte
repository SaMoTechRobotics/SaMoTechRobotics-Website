<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import type { Snapshot } from '@sveltejs/kit';

	let scrollY = -100;
	let miniNav = false;

	// onMount(() => {
	// 	scrollY = window.scrollY;
	// 	window.addEventListener('scroll', () => {
	// 		scrollY = window.scrollY;
	// 	});
	//
	// 	window.addEventListener('resize', () => {
	// 		miniNav = window.innerWidth < 810;
	// 	});
	// });

	export const snapshot: Snapshot = {
		capture: () => scrollY,
		restore: (value: number) => {
			scrollY = value;
			console.log('yay');
		}
	};

	$: path = $page.url.pathname.replace('/', '');
</script>

<div class="spacer" />

<div class="wrapper" class:scrolled={scrollY > 30} class:loading={scrollY === -100}>
	{#if !miniNav}
		<div class="navbar">
			<a href="/">
				<h1>SaMoTech Robotics</h1>
			</a>

			<div class="divider" />

			<div class="tabs {path}">
				<div class="glider" />
				<a href="/" class:active={path===''}>
					Home
				</a>
				<a href="/about" class:active={path==='about'}>
					About Us
				</a>
				<a href="/competition" class:active={path==='competition'}>
					Competition
				</a>
				<a href="/sponsors" class:active={path==='sponsors'}>
					Sponsors
				</a>
			</div>

			<div class="divider" />

			<a href="/support" class="support">
				Support
			</a>
		</div>
	{:else}
		<div class="navbar mini">
		</div>
	{/if}
</div>

<svelte:window bind:scrollY />

<style lang="scss">
  .spacer {
    height: 6rem;
    width: $page-padding;
  }

  $bar-height: 3rem;

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100vw - $page-padding);
    height: $navbar-height;

    z-index: 1000;

    pointer-events: none;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    transition: height 300ms ease-in-out, padding 500ms ease-in-out, background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

    &.scrolled {
      height: 4rem;
      padding: 0.2rem 1rem;

      .navbar {
        background-color: transparentize($primary-dark, 0.1);
      }
    }

    &.loading {

      .navbar {
        background-color: transparentize($primary-dark, 0.1);
      }
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem 1rem;
      color: $text-light;

      height: $bar-height;

      pointer-events: all;

      background-color: transparentize($primary-dark, 0.6);
      backdrop-filter: blur(2px);
      box-shadow: $shadow;

      border-radius: 1rem;

      transition: background-color 200ms ease-in-out;

      .divider {
        margin: 0 1rem;
        background-color: var(--bg-primary);
        height: 1rem;
        width: 1px;
      }

      .tabs {
        &.about > .glider {
          transform: translateX(5rem);
          width: 6rem;
        }

        &.competition > .glider {
          transform: translateX(11rem);
          width: 7.5rem;
        }

        &.sponsors > .glider {
          transform: translateX(18.5rem);
          width: 6.4rem;
        }

        &.support > .glider {
          transform: translateX(27.5rem);
          width: 5.8rem;
          opacity: 0;
        }

        .glider {
          position: absolute;
          top: 0.5rem;
          left: 14.4rem;
          width: 5rem;
          height: $bar-height;
          border-radius: 0.5rem;
          z-index: -1;
          pointer-events: none;
          background-color: transparentize(lighten($primary-dark, 10%), 0.5);

          transition: transform 150ms ease-in-out, width 50ms ease-in-out, opacity 150ms ease-in-out;
        }
      }

      a {
        padding: 1rem 0.5rem;
        border-radius: 0.5rem;
        margin: 0 0.5rem;
        text-decoration: none;
        font-size: 0.9rem;
        color: var(--text-inv);

        transition: color 200ms ease-in-out;

        &.active {
          color: $primary;
        }

        &:hover {
          color: $primary;
        }

        &.support {
          margin: 0 0 0 1rem;
          @include button(false, true);
        }
      }

      h1 {
        font-size: 1rem;
        margin: 0;
      }
    }
  }
</style>
