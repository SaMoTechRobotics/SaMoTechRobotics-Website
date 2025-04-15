<script lang="ts">
	import LinkButton from '$lib/components/layout/LinkButton.svelte';

	export let title: string;
	export let img: string = '';
</script>

<div class="wrapper" class:img={img !== ""} style={img ? `background-image: url(${img})` : ""}>
	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>

	<!-- New section for "Interested in joining?" and Learn More button -->
	<!--	<div class="bottom-section">-->
	<!--		<p>Interested in joining?</p>-->
	<!--		<LinkButton to="/join" primary>Learn More</LinkButton>-->
	<!--	</div>-->
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

    &.img {
      background-size: cover;
      background-position: center;
    }

    .content {
      text-align: center;
      width: 100%;
      backdrop-filter: blur(0.8px);
      padding-bottom: 3rem; /* Ensure there is space for the bottom section */

      h1 {
        font-size: min(10vw, 6rem);
        color: $text-light;
        padding: 0;
        margin: 0;
        font-weight: bolder;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.8);
      }
    }

    .bottom-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: calc(100% - $page-padding * 2);
      padding: 2rem;
      background-color: var(--bg-dark-transparentish);
      color: var(--primary);
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
      z-index: 1;

      @media (max-width: 768px) {
        padding: 1rem;
        flex-direction: column;
        align-items: center;
      }
    }

    .bottom-section p {
      font-size: 1.2rem;
      margin: 0;
    }

    .learn-more-btn {
      margin-left: auto;
    }

    @media (max-width: 768px) {
      margin: 1rem $mobile-padding;
    }
  }
</style>
