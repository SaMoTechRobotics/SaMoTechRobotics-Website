<script>
	import SponsorLogo from '$lib/components/sponsors/SponsorLogo.svelte';

	export let small = false;
</script>

{#if !small}
	<div class="wrapper">
		<h1>Our Sponsors</h1>
		<p>
			Thank you to all our amazing sponsors who made SaMoTech possible and who help us to pursue our
			interests in robotics and engineering!
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
      <div style="height: 50%;">
          <a href="https://www.bxp.com">
            <svg aria-label="BXP Logo" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 40"><defs><clipPath id="c"><path data-name="Rectangle 752" fill="none" d="M0 0h62.061v40H0z"/></clipPath></defs><g data-name="Group 3750"><g data-name="Group 2201" clip-path="url(#a)"><path data-name="Path 1801" d="M39.836 30.499l-15.44-21.08a.484.484 0 00-.39-.2h-4.96a.175.175 0 00-.141.278l15.4 21.08a.485.485 0 00.39.2h5a.175.175 0 00.141-.278" fill="#0769af"/><path data-name="Path 1802" d="M34.304 9.42l-15.4 21.08a.175.175 0 00.141.278H24a.485.485 0 00.39-.2L39.836 9.5a.175.175 0 00-.141-.279h-5a.484.484 0 00-.39.2" fill="#28a6de"/><path data-name="Path 1803" d="M51.282 9.222h-8.909a.434.434 0 00-.432.432v29.914a.434.434 0 00.432.432h3.464a.434.434 0 00.432-.431v-8.791h5.013a10.778 10.778 0 000-21.556m0 17.228h-5.013v-12.9h5.013a6.45 6.45 0 010 12.9" fill="#0769af"/><path data-name="Path 1804" d="M20.119 20A10.79 10.79 0 009.341 9.222H4.328V.431A.433.433 0 003.9 0H.432A.433.433 0 000 .432v29.914a.433.433 0 00.432.432h8.909A10.79 10.79 0 0020.119 20m-4.328 0a6.458 6.458 0 01-6.45 6.45H4.328v-12.9h5.013a6.457 6.457 0 016.45 6.45" fill="#0769af"/></g></g></svg>
          </a> 
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
      <SponsorLogo to="https://www.bxp.com/" sponsor="BXP" />

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
      font-size: 2rem;
      font-weight: bold;
      color: $text-light;
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
        grid-template-rows: repeat(6, minmax(4rem, 0.5fr));
      }
    }
  }
</style>
