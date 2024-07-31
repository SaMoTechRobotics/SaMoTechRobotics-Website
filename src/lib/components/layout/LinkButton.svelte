<script lang="ts">
	export let to: string;
	export let newTab: boolean = false;

	export let dark: boolean = false;
	export let transparent: boolean = false;
</script>

<a href={to} target={newTab ? '_blank' : ''} class:dark class:transparent>
	<slot />
</a>

<style lang="scss">
  a {
    margin: 0 0.5rem;

    &:not(.transparent) {
      @include button(false, true);
    }

    &.transparent {
      @include button(true);
    }

    &.dark {
      @include button(false, false);
    }

  }
</style>
