<script lang="ts">
	export let open: boolean;
</script>

<div class="wrapper" class:open>
	<div class="modal">
		<slot />
	</div>
</div>

<style lang="scss">
  .wrapper {
    display: none;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);

    &.open {
      display: flex;
    }
  }
</style>