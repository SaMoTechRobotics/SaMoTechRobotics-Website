<script>
	import SponsorLogo from '$lib/components/sponsors/SponsorLogo.svelte';

	export let small = false;
</script>

{#if !small}
	<div class="wrapper">
		<h1>Our Sponsors</h1>
		<p>
			We would like to thank our main sponsors of our 2023-2024 season, ZipRecruiter, Boeing, and Rotary Club of Santa
			made SaMoTech possible and have allowed us to pursue our interests in robotics and engineering. We greatly
			Monica along with supporting sponsors, Yahoo, Panasonic, and Czeh for their generous support. Your contributions
			appreciate your belief in us and the opportunities you have provided.
		</p>
		<div class="logos">
			<div>
				<SponsorLogo to="https://www.ziprecruiter.com/about" sponsor="ZipRecruiter" />
			</div>
			<div>
				<SponsorLogo to="https://www.facebook.com/rotarysm/" sponsor="RotaryClub" />
				<SponsorLogo to="https://lenzcharging.com/" sponsor="Lenz" />
				<SponsorLogo to="https://www.boeing.com/" sponsor="Boeing" />
			</div>
			<div>
				<SponsorLogo to="https://www.yahooinc.com/" sponsor="Yahoo" />
				<SponsorLogo to="https://www.na.panasonic.com/" sponsor="Panasonic" />
				<SponsorLogo to="" sponsor="Czeh" />
			</div>
		</div>
	</div>
{:else}
	<div class="wrapper small">
		<h1>Our Sponsors</h1>
		<div class="logos">
			<SponsorLogo to="https://www.ziprecruiter.com/about" sponsor="ZipRecruiter" />
			<SponsorLogo to="https://lenzcharging.com/" sponsor="Lenz" />
			<SponsorLogo to="https://www.boeing.com/" sponsor="Boeing" />
			<SponsorLogo to="https://www.facebook.com/rotarysm/" sponsor="RotaryClub" />
			<SponsorLogo to="https://www.yahooinc.com/" sponsor="Yahoo" />
			<SponsorLogo to="https://www.na.panasonic.com/" sponsor="Panasonic" />
			<SponsorLogo to="" sponsor="Czeh" />
		</div>
	</div>
{/if}

<style lang="scss">
  .wrapper {
    padding: 0 2rem 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: $text-light;

    h1 {
      font-size: 3rem;
      margin-bottom: 0;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
    }

    .logos {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 4rem;

      :first-child {
        height: 10rem;
      }

      :nth-child(2) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        height: 6rem;

        :global(> a) {
          flex: 1;
          height: 14rem;
        }

        :global(> a:nth-child(2)) {
          transform: scale(0.7);
        }
      }

      :nth-child(3) {
        margin: 4rem 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 3rem;
      }
    }
  }

  .wrapper.small {
    padding: 2rem 4rem;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.2rem;
      color: $text;
    }

    .logos {
      display: grid;
      grid-template-columns: repeat(7, minmax(4rem, 1fr));
      justify-items: center;
      align-items: center;
      grid-gap: 2rem;

      :global(> a:nth-child(2)) {
        transform: scale(0.5);
      }
    }

    @media (max-width: 768px) {
      padding: 2rem 1rem;

      h1 {
        margin-bottom: 2rem;
        margin-top: 0;
      }

      .logos {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, 4rem);
      }
    }
  }
</style>
