<script>
	import SponsorLogo from '$lib/components/sponsors/SponsorLogo.svelte';

	export let small = false;
</script>

{#if !small}
	<div class="wrapper">
		<h1>Our Sponsors</h1>
		<div class="logos">
			<SponsorLogo to="https://www.ziprecruiter.com/" sponsor="ZipRecruiter" />
			<SponsorLogo to="" sponsor="Boeing" />
			<SponsorLogo to="" sponsor="RotaryClub-GEAR" />
			<SponsorLogo to="" sponsor="Yahoo" />
			<SponsorLogo to="https://www.na.panasonic.com/" sponsor="Panasonic" />
			<SponsorLogo to="" sponsor="Czeh" />
		</div>
	</div>
{:else}
	<div class="wrapper small">
		<div class="logos">
			<SponsorLogo to="https://www.ziprecruiter.com/" sponsor="ZipRecruiter" />
			<SponsorLogo to="" sponsor="Boeing" />
			<SponsorLogo to="" sponsor="RotaryClub" />
			<SponsorLogo to="" sponsor="Yahoo" />
			<SponsorLogo to="https://www.na.panasonic.com/" sponsor="Panasonic" />
			<SponsorLogo to="" sponsor="Czeh" />
		</div>
	</div>
{/if}

<style lang="scss">
  .wrapper {
    padding: 4rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logos {
      display: grid;
      grid-template-columns: repeat(6, minmax(4rem, 1fr));
      grid-gap: 2rem;
      justify-items: center;
      align-items: center;
    }
  }

  .wrapper.small {
    padding: 2rem 4rem;

    display: flex;
    flex-direction: column;

    .logos {
      grid-gap: 2rem;
    }
  }
</style>
