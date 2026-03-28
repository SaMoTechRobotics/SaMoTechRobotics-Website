<script>
	import ChampionshipSupportSection from '$lib/components/sections/ChampionshipSupportSection.svelte';

	// Legacy support page sections kept for reference during the current Worlds push.
	// import LinkButton from '$lib/components/layout/LinkButton.svelte';
	// import SplitSection from '$lib/components/sections/SplitSection.svelte';
</script>

<section class="support-page">
	<div class="hero-copy">
		<h1>Support SaMoTech's Journey to the World Championship</h1>
		<p class="lead">
			Every donation and sponsorship helps SaMoTech cover robot components, registration fees,
			tools, food at meets, and travel expenses as the team works toward the World Championship in
			Houston.
		</p>
	</div>

	<ChampionshipSupportSection large />

	<div class="details">
		<div class="panel">
			<h2>About Donations</h2>
			<p>
				Our estimated costs for the current season are $14,000 to $20,000, depending on how far the
				team advances and especially if we qualify for Worlds. As all members of SaMoTech, including
				coaches and mentors, serve as unpaid volunteers, every donation goes directly toward
				practical team expenses. Donations are made through SaMoTech Booster Club, a 501c3
				non-profit charity, and are typically 100% tax deductible in the US.
			</p>
		</div>

		<div class="panel">
			<h2>About Sponsorships</h2>
			<p>
				We would be proud to include your company’s name or logo on promotional materials including
				our website, social media, team banner, and team shirts worn at competitions. Sponsor
				recognition will reflect relative contributions, and we are happy to discuss other ways we
				can show our thanks and highlight your support.
			</p>
		</div>
	</div>
</section>

<!--
<SplitSection img="images/2024-25/SaMoTech_Garage.jpg" title="Support Us" textSide="left" dark>
	Legacy copy:
	Our costs for the 24/25 regular season are estimated at $8,700, with an additional $6,400 required if (when) we make
	the World Championship in Texas. As all members of SaMoTech, including coaches and mentors, serve as unpaid
	volunteers, every donation will be used to cover practical expenses such as robot components, control systems, tools,
	registration fees, as well as marketing and travel/transport expenses. Any surplus funds will go to support SaMoTech’s
	future FIRST seasons or will be donated to other FTC teams in need. Donations to SaMoTech can be made through SaMoTech
	Booster Club, a 501c3 non-profit charity. Donations are typically 100% tax deductible in the US. Thank you for any
	consideration you may give to supporting our team. 
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
		<LinkButton to="mailto:samotechrobotics@gmail.com" newTab>Contact us at samotechrobotics@gmail.com</LinkButton>
	</div>
</SplitSection>
-->

<div class="spacer" />

<style lang="scss">
	:global(.layout.support) {
		background: linear-gradient(
			180deg,
			$primary-darker 0%,
			$primary-dark 48%,
			// darken($primary, 8) 76%,
			// darken($primary, 18) 86%,
			$primary-dark 94%,
			$primary-darker 100%
		);
	}

	.support-page {
		color: $text-light;
		padding: 2rem $page-padding 0;
	}

	.hero-copy {
		max-width: 72rem;
		margin: 0 auto;
		padding: 1.5rem 2rem 0.25rem;
		text-align: center;

		h1 {
			margin: 0 auto 1rem;
			max-width: 18ch;
			font-size: clamp(2.6rem, 5vw, 4.5rem);
			line-height: 1.02;
		}

		p {
			margin: 0 auto 1rem;
			font-size: 1.15rem;
			line-height: 1.68;
			color: rgba(255, 255, 255, 0.9);
			max-width: 52rem;
		}

		.lead {
			font-size: 1.28rem;
			color: $text-light;
		}
	}

	.details {
		max-width: 72rem;
		padding: 0 2rem;
		margin: 0 auto;
	}

	.panel {
		padding: 0.75rem 0 0;

		& + .panel {
			margin-top: 1.5rem;
		}

		h2 {
			margin: 0 0 0.8rem;
			font-size: 1.6rem;
		}

		p {
			margin: 0;
			max-width: 62rem;
			font-size: 1.12rem;
			line-height: 1.7;
			color: rgba(255, 255, 255, 0.88);
		}
	}

	.spacer {
		height: 4rem;
	}

	@media (max-width: 900px) {
		.support-page {
			padding: 1.25rem $mobile-padding 0;
		}

		.hero-copy {
			padding-top: 1rem;
			padding-inline: $mobile-padding;

			h1 {
				font-size: 2.2rem;
			}

			p {
				font-size: 1.02rem;
			}

			.lead {
				font-size: 1.12rem;
			}
		}

		.details {
			padding: 0 $mobile-padding;
		}

		.panel {
			padding-top: 0.5rem;

			& + .panel {
				margin-top: 1.25rem;
			}
		}

		.spacer {
			height: 2.5rem;
		}
	}
</style>
