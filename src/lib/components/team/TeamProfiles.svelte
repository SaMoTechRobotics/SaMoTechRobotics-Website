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
    margin: 0 $page-padding;
    border-radius: 1rem;
    padding: 0 1rem;

    color: $text-light;

    .top-content {
      padding: 0 1rem 0;
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

        font-family: $font;

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

    @media (max-width: 560px) {
      text-align: center;
      margin: 0 $mobile-padding;

      .content {
        padding: 0;
      }

      .profiles {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 1rem;
      }
    }
  }
</style>