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
			<h2>Budget for Worlds</h2>
			<p>
				Attending the World Championship will cost our team more than $20,000—more than double our
				usual expenses for an entire season. Most of these costs are unavoidable, since all
				competitors must stay in event-sanctioned hotels near the venue, and with tens of thousands
				of people attending, travel and lodging are at a premium. Because SaMoTech is entirely
				volunteer-run, including our coaches and mentors, every donation goes directly toward
				essential team expenses like robot upgrades, registration fees, flights, hotels, and meals
				for 10 teenagers for nearly a week. Donations are made through the SaMoTech Booster Club, a
				501(c)(3) nonprofit organization, and are generally 100% tax-deductible in the U.S.
			</p>

			<div class="budget-list" aria-label="World Championship budget breakdown">
				<div class="budget-row">
					<span>Registration & Entry Fees (FIRST)</span>
					<strong>$2,500</strong>
				</div>
				<div class="budget-row">
					<span>Flights (12 x $400)</span>
					<strong>$4,800</strong>
				</div>
				<div class="budget-row">
					<span>Hotel near competition (9 x $250 x 5 nights)</span>
					<strong>$11,250</strong>
				</div>
				<div class="budget-row">
					<span>Van rental / fuel (2 x $90 x 5 days)</span>
					<strong>$900</strong>
				</div>
				<div class="budget-row">
					<span>Practice field / space rental</span>
					<strong>$1,000</strong>
				</div>
				<div class="budget-row">
					<span>Meals & Snacks (12 x $45 x 5 days)</span>
					<strong>$2,700</strong>
				</div>
				<div class="budget-row">
					<span>Transport robot & gear / pit supplies</span>
					<strong>$600</strong>
				</div>
				<div class="budget-row">
					<span>Robot upgrades</span>
					<strong>$600</strong>
				</div>
				<div class="budget-row total">
					<span>Total</span>
					<strong>$24,350</strong>
				</div>
			</div>
		</div>

		<div class="panel">
			<h2>Sponsorship Levels</h2>
			<p>
				We would be proud to recognize sponsors across our engineering portfolio, pit station,
				website, social media, team shirts, and robot. We are also happy to discuss custom support
				options for businesses or organizations interested in partnering with the team.
			</p>
			<p class="deadline">Sponsorship deadline: April 10, 2026.</p>

			<div class="sponsorship-levels" aria-label="Sponsorship levels">
				<div class="level">
					<h3>$500</h3>
					<p>
						Logo / company name in team engineering portfolio, in our pit station, and on our
						website.
					</p>
				</div>
				<div class="level">
					<h3>$1,000</h3>
					<p>
						Logo / company name on team shirts, shout out on social media, and all benefits in the
						above level.
					</p>
				</div>
				<div class="level">
					<h3>$2,500</h3>
					<p>Standard-size logo on the robot, plus all benefits above.</p>
				</div>
				<div class="level">
					<h3>$5,000</h3>
					<p>Large logo on the robot, plus all above benefits.</p>
				</div>
			</div>
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

	.deadline {
		margin-top: 0.8rem;
		font-weight: 700;
		color: $text-light;
	}

	.budget-list,
	.sponsorship-levels {
		margin-top: 1.4rem;
	}

	.budget-list {
		display: grid;
		gap: 0.65rem;
	}

	.budget-row {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1.5rem;
		padding-bottom: 0.65rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
		font-size: 1.06rem;
		color: rgba(255, 255, 255, 0.9);

		strong {
			color: $text-light;
			font-size: 1.08rem;
			white-space: nowrap;
		}

		&.total {
			margin-top: 0.3rem;
			padding-top: 0.5rem;
			border-top: 1px solid rgba(255, 255, 255, 0.18);
			border-bottom: 0;
			font-size: 1.2rem;

			strong {
				font-size: 1.3rem;
			}
		}
	}

	.sponsorship-levels {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem 1.25rem;
	}

	.level {
		padding: 1rem 1.1rem;
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 0.9rem;
		background: rgba(255, 255, 255, 0.04);

		h3 {
			margin: 0 0 0.35rem;
			font-size: 1.45rem;
			color: $text-light;
		}

		p {
			font-size: 1rem;
			line-height: 1.6;
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

		.budget-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.3rem;
		}

		.sponsorship-levels {
			grid-template-columns: 1fr;
		}

		.spacer {
			height: 2.5rem;
		}
	}
</style>
