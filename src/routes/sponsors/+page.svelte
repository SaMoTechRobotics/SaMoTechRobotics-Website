<script>
	import SponsorsSection from '$lib/components/sponsors/SponsorsSection.svelte';
</script>

<SponsorsSection />

<style lang="scss">
	:global(.layout.sponsors) {
		background: linear-gradient(
			180deg,
			$primary-dark 0%,
			$primary 30%,
			$primary 70%,
			$primary-dark 92%,
			$primary-darker 100%
		);
	}
</style>
