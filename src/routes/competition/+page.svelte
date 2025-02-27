<script>
	import SeasonSummary from '$lib/components/competition/SeasonSummary.svelte';
</script>

<SeasonSummary game="CenterStage" year="2023-2024" />

<SeasonSummary game="PowerPlay" year="2022-2023" />

<style lang="scss">
  :global(.layout.competition) {
    background: linear-gradient(180deg, $primary-darker 0%, $primary-dark 60%, $primary-darker 100%);
  }
</style>