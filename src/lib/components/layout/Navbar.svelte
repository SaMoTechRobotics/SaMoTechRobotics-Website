<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let scrollY = -100;
	let innerWidth = 1000;

	let menuOpen = false;

	$: miniNav = innerWidth < 810;

	$: path = $page.url.pathname.replace('/', '');

	import { onDestroy } from 'svelte';

	const unsubscribe = page.subscribe(() => {
		if (miniNav && menuOpen) {
			menuOpen = false;
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<title>SaMoTech Robotics{path === '' ? '' : ' » ' + path.charAt(0).toUpperCase() + path.slice(1)}</title>

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
				<a href="/news" class:active={path==='news'}>
					News
				</a>
				<a href="/middleSchool" class:active={path==='middleSchool'}>
					Middle School
				</a>
				<!--				<a href="/competition" class:active={path==='competition'}>-->
				<!--					Competition-->
				<!--				</a>-->
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
			<a href="/">
				<h1>SaMoTech Robotics</h1>
			</a>

			<button class="menu" on:click={() => menuOpen = !menuOpen}>
				{#if menuOpen}
					<Icon icon="ic:round-close" />
				{:else}
					<Icon icon="ic:round-menu" />
				{/if}
			</button>

			<div class="mobile-menu" class:open={menuOpen}>
				<div class="mobile-tabs">
					<a href="/" class:active={path===''}>
						Home
					</a>
					<a href="/about" class:active={path==='about'}>
						About Us
					</a>
					<a href="/news" class:active={path==='news'}>
						News
					</a>
					<a href="/middleSchool" class:active={path==='middleSchool'}>
						Middle School
					</a>
					<a href="/sponsors" class:active={path==='sponsors'}>
						Sponsors
					</a>
					<a href="/support" class:active={path==='support'}>
						Support
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<svelte:window bind:scrollY bind:innerWidth />


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

    :has(.mini) {
      width: calc(100vw - $mobile-padding);
    }

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

      &:has(.open) {
        border-radius: 1rem 1rem 0 0;
      }

      transition: background-color 200ms ease-in-out;

      .divider {
        margin: 0 1rem;
        background-color: var(--bg-primary);
        height: 1rem;
        width: 1px;
      }

      .tabs {
        $home: 5rem;
        $about: 6rem;
        $news: 5rem;
        $middleSchool: 8.3rem;
        $sponsors: 6rem;
        $support: 5.8rem;


        &.about > .glider {
          transform: translateX($home);
          width: $about;
        }

        &.news > .glider {
          transform: translateX($home + $about);
          width: $news;
        }

        &.competition > .glider {
          transform: translateX($home + $about + $news);
          width: 7.5rem;
        }

        &.middleSchool > .glider {
          transform: translateX($home + $about + $news);
          width: $middleSchool - 0.4rem;
        }

        &.sponsors > .glider {
          transform: translateX($home + $about + $news + $middleSchool);
          width: $sponsors;
        }

        &.support > .glider {
          transform: translateX($home + $about + $news + $middleSchool + $sponsors + 2.9rem);
          width: $support;
          opacity: 0;
        }

        .glider {
          position: absolute;
          top: 0.5rem;
          left: 14.4rem;
          width: $home;
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
          @include button(true);
        }
      }

      h1 {
        font-size: 1rem;
        margin: 0;
      }

      &.mini {
        width: 100%;
        justify-content: space-between;
        align-items: center;

        box-shadow: none;

        .menu {
          background: transparent;
          border: none;
          color: $text-light;
          font-size: 1.5rem;
          cursor: pointer;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }


      .mobile-menu {
        display: none;

        position: fixed;
        top: $navbar-height - 1rem;
        left: 0;
        background: linear-gradient(transparentize($primary-dark, 0.6) 0%, transparentize($primary-dark, 0.1) 25%, transparentize($primary-dark, 0.05) 100%);
        backdrop-filter: blur(2px);

        z-index: 30000;

        width: 100%;

        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

        //transition: background 100ms ease-in-out;

        &.open {
          display: block;

          //animation: slideIn 300ms ease-in-out;

          @keyframes slideIn {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        }

        .mobile-tabs {
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;

          width: 100%;

          padding-bottom: 2rem;

          a {
            margin-left: auto;
            margin-right: 2rem;
            font-size: 2rem;
            font-weight: bold;
            text-decoration: none;
          }
        }
      }
    }

    &.scrolled {
      .mobile-menu {
        background: transparentize($primary-dark, 0.1);
        backdrop-filter: blur(2px);
        top: $navbar-height - 1rem;
      }
    }
  }
</style>
