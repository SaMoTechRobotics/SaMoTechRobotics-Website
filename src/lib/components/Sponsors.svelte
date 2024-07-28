<script>
	import SponsorLogo from '$lib/components/SponsorLogo.svelte';
</script>

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

<style lang="scss">
  .wrapper {
    padding: 20rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .logos {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
      grid-gap: 2rem;
      justify-items: center;
      align-items: center;
    }
  }
</style>
