<script>
	import LinkButton from '$lib/components/layout/LinkButton.svelte';
	import SplitSection from '$lib/components/sections/SplitSection.svelte';
</script>

<SplitSection img="images/2024-25/SaMoTech_Garage.jpg" title="Support Us" textSide="left" dark>
	<!--Our costs for the 24/25 regular season are estimated at $8,700, with an additional $6,400 required if (when) we make
	the World Championship in Texas. As all members of SaMoTech, including coaches and mentors, serve as unpaid
	volunteers, every donation will be used to cover practical expenses such as robot components, control systems, tools,
	registration fees, as well as marketing and travel/transport expenses. Any surplus funds will go to support SaMoTech’s
	future FIRST seasons or will be donated to other FTC teams in need. Donations to SaMoTech can be made through SaMoTech
	Booster Club, a 501c3 non-profit charity. Donations are typically 100% tax deductible in the US. Thank you for any
	consideration you may give to supporting our team. 
	-->
	Our estimated costs for the current season are $14,000 to $20,000, depending on how far each team makes it in the season, and especially if
	we qualify for Worlds. Our teams are volunteer run. Donations will be used to cover practical expenses such as robot components, control systems, tools,
	registration fees, food at meets, and travel/transport expenses. Donations to SaMoTech can be made through SaMoTech
	Booster Club, a 501c3 non-profit charity. Donations are typically 100% tax deductible in the US. Thank you for any
	consideration you may give to supporting our team. 

	<div slot="buttons">
		<LinkButton to="https://www.paypal.com/donate/?hosted_button_id=6M6HKRXT9468Y" newTab>Donate via Paypal</LinkButton>
	</div>
</SplitSection>

<SplitSection img="images/2023-24/230101_NewYear.jpg" title="Sponsor Us" textSide="right" dark>
	We would be proud to include your company’s name and/or logo as our sponsor on all promotional materials including on
	our website, social media accounts, team banner and t-shirts worn at all competitions. The size and placement of the
	name/logo will be dependent on the number of sponsors we require and will reflect their relative contributions. We
	also welcome any discussion on how else we could show our thanks.

	<div slot="buttons">
		<LinkButton to="mailto:samotechrobotics@gmail.com" newTab transparent>Contact us at samotechrobotics@gmail.com
		</LinkButton>
	</div>
</SplitSection>

<div class="spacer" />

<style lang="scss">
  :global(.layout.support) {
    background: linear-gradient(180deg, $primary-darker 0%, $primary-dark 50%, $primary 82%, darken($primary, 20) 88%, $primary-dark 95%, $primary-darker 100%);
  }

  .spacer {
    height: 4rem;
  }
</style>
