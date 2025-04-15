<script>
	import Icon from '@iconify/svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';

	export let homepage = false;

	let copied = false;
	const email = 'info@samotechrobotics.com';
	const phone = '323-309-6687';

	function copyEmail() {
		navigator.clipboard.writeText(email).then(() => {
			copied = true;
			setTimeout(() => (copied = false), 2000);
		});
	}
</script>

<div class="join-wrapper">
	<h1>SaMoTech Is Looking For New Team Members!</h1>

	<p>
		Our middle school team is looking to recruit for next year! If you have a child who will be in
		middle or starting
		high school
		next year who might be interested call or text Chris, our
		head mentor, at
		<span class="accent">{phone}</span> or email us at
		<a href="mailto:{email}" class="accent email-link">{email}</a>
		<button class="copy-button" on:click={copyEmail} aria-label="Copy email">
			{#if copied}
				<Icon icon="mdi:check" width="18" />
			{:else}
				<Icon icon="mdi:content-copy" width="18" />
			{/if}
		</button>
		.
	</p>

	<p>
		We may also have an
		off-season program as well (April thru
		August), or summer camps, so there's no time like the present to reach out and let us know what you'd like to be a
		part of!

		{#if homepage}
			Check out our middle school team page for more information!
		{:else}
			Read below to learn more!
		{/if}

	</p>

	{#if homepage}
		<div class="buttons">
			<LinkButton to="/middleSchool" primary>Learn More</LinkButton>
		</div>
	{/if}
</div>

<style lang="scss">
  .join-wrapper {
    background: var(--bg-dark-transparent);
    color: var(--text-inv);
    padding: 3rem 4rem;
    border-radius: 1.5rem;
    border: 2px solid var(--bg-primary);
    box-shadow: var(--box-shadow);
    text-align: center;
    margin: 3rem $page-padding;

    @media (max-width: 810px) {
      margin: 3rem $mobile-padding;
      padding: 2.5rem 4rem;
    }

    h1 {
      font-size: 2.3rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .accent {
      color: var(--secondary);
      font-weight: 500;

      &:hover {
        color: var(--primary);
      }
    }

    .email-link {
      text-decoration: underline;
    }

    .copy-button {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--primary);
      padding-left: 0.3rem;
      vertical-align: middle;
      display: inline-flex;
      align-items: center;
      transition: color 0.2s ease;

      &:hover {
        color: var(--secondary);
      }
    }

    .buttons {
      margin-top: 2rem;
    }
  }
</style>
