<script lang="ts">
	import PreviousTeamProfiles from '$lib/components/team/PreviousTeamProfiles.svelte';

	const years = ['2024-2025', '2023-2024', '2022-2023'] as const;
	let year: (typeof years)[number] = '2024-2025';
</script>

<div class="wrapper">
	<div class="top-content">
		<h1>Team of
			<select bind:value={year}>
				{#each years as y}
					<option value={y}>{y}</option>
				{/each}
			</select>
		</h1>
	</div>
	<div class="content">
		<div class="profiles">
			{#if year === "2024-2025"}
				<slot />
			{:else}
				<PreviousTeamProfiles {year} />
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
  .wrapper {
    //background-color: transparentize($primary-dark, 0.5);
    margin: 0rem 2rem;
    border-radius: 1rem;
    padding: 1rem;

    font-family: var(--font);
    color: $text-light;

    @media (max-width: 700px) {
      margin: 2rem 1rem;
    }

    .top-content {
      padding: 1rem 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: 2rem;
        font-weight: 600;
      }

      select {
        background-color: transparent;
        border: none;
        font-size: 2rem;
        cursor: pointer;

        font-weight: bold;
        color: $text-light;

        font-family: var(--font);

        transition: color 100ms ease-in-out;

        &:hover {
          color: var(--text-hover);
        }
      }
    }

    .content {
      padding: 1rem;
    }

    .profiles {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  }
</style>