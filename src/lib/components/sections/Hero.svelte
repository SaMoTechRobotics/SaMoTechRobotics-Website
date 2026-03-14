<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	export let title: string;
	export let img: string = '';
	export let imgs: string[] = [];
	export let interval: number = 5000;

	let activeIndex = 0;
	let mounted = false;
	let timer: ReturnType<typeof setInterval> | undefined;
	let carouselSignature = '';
	let progressToken = 0;

	$: slides = imgs.length > 0 ? imgs : img ? [img] : [];
	$: if (activeIndex >= slides.length) activeIndex = 0;
	$: nextSignature = `${interval}:${slides.join('|')}`;
	$: if (mounted && nextSignature !== carouselSignature) {
		carouselSignature = nextSignature;
		startCarousel();
	}

	function startCarousel() {
		stopCarousel();
		progressToken += 1;

		if (slides.length < 2 || interval <= 0) return;

		timer = setInterval(() => {
			activeIndex = (activeIndex + 1) % slides.length;
		}, interval);
	}

	function stopCarousel() {
		if (timer) {
			clearInterval(timer);
			timer = undefined;
		}
	}

	function showSlide(index: number) {
		activeIndex = index;
		startCarousel();
	}

	onMount(() => {
		mounted = true;
		carouselSignature = nextSignature;
		startCarousel();
	});

	onDestroy(stopCarousel);
</script>

<div class="wrapper" class:img={slides.length > 0}>
	{#if slides.length > 0}
		<div class="backgrounds" aria-hidden="true">
			{#each slides as slide, index}
				<img
					class="background"
					class:active={index === activeIndex}
					src={encodeURI(slide)}
					alt=""
				/>
			{/each}
			<div class="overlay"></div>
		</div>
	{/if}

	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>

	{#if slides.length > 1}
		<div class="indicators" aria-label="Hero image carousel controls">
			{#each slides as _, index}
				<button
					type="button"
					class="indicator"
					class:active={index === activeIndex}
					aria-label={`Show slide ${index + 1}`}
					aria-pressed={index === activeIndex}
					on:click={() => showSlide(index)}
				>
					<span class="indicator-track">
						{#if index === activeIndex}
							{#key `${activeIndex}-${progressToken}`}
								<span class="indicator-progress" style={`animation-duration: ${interval}ms;`}></span>
							{/key}
						{/if}
					</span>
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
  .wrapper {
    margin: 1rem $page-padding;
    border-radius: 1rem;
    height: calc(100vh - $navbar-height - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    overflow: hidden;

    &.img {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .backgrounds,
    .overlay {
      position: absolute;
      inset: 0;
    }

    .background {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      opacity: 0;
      transform: scale(1.03);
      transition:
        opacity 800ms ease,
        transform 6s ease;
    }

    .background.active {
      opacity: 1;
      transform: scale(1);
    }

    .overlay {
      background:
        linear-gradient(180deg, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.42) 65%, rgba(0, 0, 0, 0.58) 100%);
    }

    .content {
      position: relative;
      z-index: 1;
      text-align: center;
      width: 100%;
      backdrop-filter: blur(0.8px);
      padding-bottom: 3rem; /* Ensure there is space for the bottom section */
      padding-inline: 1.5rem;

      h1 {
        font-size: min(10vw, 6rem);
        color: $text-light;
        padding: 0;
        margin: 0;
        font-weight: bolder;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
      }
    }

    .indicators {
      position: absolute;
      bottom: 0.85rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      display: flex;
      gap: 0.65rem;
      width: min(32rem, calc(100% - 3rem));
    }

    .indicator {
      flex: 1 1 0;
      height: 0.65rem;
      padding: 0;
      border: 0;
      background: transparent;
      cursor: pointer;
    }

    .indicator-track {
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 999px;
      background-color: rgba(255, 255, 255, 0.28);
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.18);
    }

    .indicator.active .indicator-track,
    .indicator:hover .indicator-track {
      background-color: rgba(255, 255, 255, 0.36);
    }

    .indicator-progress {
      display: block;
      width: 100%;
      height: 100%;
      transform-origin: left center;
      animation: fill-progress linear forwards;
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 1) 100%);
    }

    @keyframes fill-progress {
      from {
        transform: scaleX(0);
      }

      to {
        transform: scaleX(1);
      }
    }

    @media (max-width: 768px) {
      margin: 1rem $mobile-padding;

      .content {
        padding-inline: 1rem;
      }

      .indicators {
        bottom: 0.75rem;
        width: calc(100% - 2rem);
      }
    }
  }
</style>
