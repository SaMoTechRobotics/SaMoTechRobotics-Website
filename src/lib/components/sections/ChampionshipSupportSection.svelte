<script>
	import LinkButton from '$lib/components/layout/LinkButton.svelte';

	const cards = [
		{
			title: 'Make a Tax-Deductible Donation',
			text: "Please consider making a tax-deductible donation to support the team's journey to the World Championship in Houston from April 29 to May 3.",
			image: 'images/GoFundMe/21936_Worlds_GoFundMe.jpg',
			alt: 'SaMoTech students competing with World Championship text and a GoFundMe logo.',
			actionLabel: 'Donate on GoFundMe',
			actionTo: 'https://gofund.me/ee79fe2fb',
			imagePosition: 'left top',
			newTab: true
		},
		{
			title: 'Sponsor the Team',
			text: "If you're a business or organization interested in sponsoring the team, please contact",
			image: 'images/GoFundMe/21936_Worlds_Sponsors.jpg',
			alt: 'SaMoTech robot sponsorship mockup with logo placement areas.',
			actionLabel: 'Contact',
			imagePosition: 'center center',
			email: 'rob@samotechrobotics.com',
			copyValue: 'rob@samotechrobotics.com'
		}
	];

	let copiedCardTitle = '';

	async function copyToClipboard(value, title) {
		try {
			await navigator.clipboard.writeText(value);
			copiedCardTitle = title;
			setTimeout(() => {
				if (copiedCardTitle === title) copiedCardTitle = '';
			}, 2000);
		} catch (error) {
			console.error('Failed to copy email address.', error);
		}
	}
</script>

<section class="wrapper" aria-label="World Championship support options">
	<div class="cards">
		{#each cards as card}
			<article class="card">
				<div class="image-frame">
					<img
						src={encodeURI(card.image)}
						alt={card.alt}
						style={`object-position: ${card.imagePosition};`}
					/>
				</div>

					<div class="content">
						<h2>{card.title}</h2>
						<p>
							{card.text}
							{#if card.email}
								<button
									type="button"
									class="inline-email"
									on:click={() => copyToClipboard(card.email, card.title)}
								>
									<span>{card.email}</span>
									<span class="email-status" aria-hidden="true">
										{#if copiedCardTitle === card.title}
											<svg viewBox="0 0 16 16" focusable="false">
												<path
													d="M13.3 4.3 6.5 11.1 2.7 7.3"
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="1.8"
												/>
											</svg>
										{:else}
											<svg viewBox="0 0 16 16" focusable="false">
												<rect
													x="5"
													y="3"
													width="8"
													height="10"
													rx="1.5"
													fill="none"
													stroke="currentColor"
													stroke-width="1.4"
												/>
												<rect
													x="3"
													y="1"
													width="8"
													height="10"
													rx="1.5"
													fill="none"
													stroke="currentColor"
													stroke-width="1.4"
												/>
											</svg>
										{/if}
									</span>
									<span class="sr-only">
										{#if copiedCardTitle === card.title}
											Email copied
										{:else}
											Copy email address
										{/if}
									</span>
								</button>
								.
							{/if}
						</p>

						<div class="actions">
							{#if card.copyValue}
								<button
									type="button"
									class="primary-button"
									on:click={() => copyToClipboard(card.copyValue, card.title)}
								>
									{copiedCardTitle === card.title ? 'Copied Email' : card.actionLabel}
								</button>
							{:else}
								<LinkButton to={card.actionTo} newTab={card.newTab} primary>{card.actionLabel}</LinkButton>
							{/if}
						</div>
					</div>
				</article>
			{/each}
		</div>
</section>

<style lang="scss">
  .wrapper {
    position: relative;
    z-index: 2;
    margin: 2rem;
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .card {
    overflow: hidden;
    border-radius: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: linear-gradient(180deg, rgba(3, 25, 34, 0.9) 0%, rgba(7, 41, 52, 0.96) 100%);
    box-shadow: 0 1.5rem 3rem rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(10px);
  }

  .image-frame {
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.05);

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    padding: 1.5rem 1.5rem 1.75rem;
    color: $text-light;

    h2 {
      margin: 0 0 0.75rem;
      font-size: clamp(1.4rem, 2vw, 2rem);
      line-height: 1.1;
    }

    p {
      margin: 0;
      font-size: 1.05rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.88);
    }
  }

  .actions {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    align-items: center;

    :global(a) {
      margin: 0;
    }
  }

  .primary-button {
    @include button(true);
    border: 0;
    cursor: pointer;
  }

  .inline-email {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-left: 0.35rem;
    padding: 0.15rem 0.55rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    color: $text-light;
    font: inherit;
    cursor: pointer;
    transition: background-color 150ms ease, border-color 150ms ease, transform 150ms ease;

    &:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: rgba(255, 255, 255, 0.34);
    }

    &:active {
      transform: translateY(1px);
    }
  }

  .email-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.14);

    svg {
      width: 0.82rem;
      height: 0.82rem;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 900px) {
    .wrapper {
      margin-inline: $mobile-padding;
      margin-top: 0;
      margin-bottom: 1.5rem;
    }

    .cards {
      grid-template-columns: 1fr;
    }
  }
</style>
