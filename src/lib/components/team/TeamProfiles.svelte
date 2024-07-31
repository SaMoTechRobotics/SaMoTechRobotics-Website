<script lang="ts">
	import PreviousTeamProfiles from '$lib/components/team/PreviousTeamProfiles.svelte';

	const years = ['2024-2025', '2023-2024', '2022-2023'] as const;
	let year: (typeof years)[number] = '2024-2025';
</script>

<div class="wrapper">
	<div class="top-content">
		<select bind:value={year}>
			{#each years as y}
				<option value={y}>{y}</option>
			{/each}
		</select>
	</div>
	<div class="content">
		<h1>SaMoTech Team of {year}</h1>
		<div class="profiles">
			{#if year === "2024-2025"}
				<slot />
			{:else}
				<PreviousTeamProfiles {year} />
			{/if}
		</div>
	</div>
</div>