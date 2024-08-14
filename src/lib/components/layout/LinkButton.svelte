<script lang="ts">
	export let to: string;
	export let newTab: boolean = false;

	export let primary: boolean = false;
</script>

<a href={to} target={newTab ? '_blank' : ''} class:primary>
	<slot />
</a>

<style lang="scss">
  a {
    margin: 0 0.5rem;

    &.primary {
      @include button(true);
    }

    &:not(.primary) {
      @include button(false);
    }
  }
</style>
