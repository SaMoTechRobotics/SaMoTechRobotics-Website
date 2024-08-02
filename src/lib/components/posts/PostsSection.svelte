<div class="wrapper">
	<slot />
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    gap: 2rem;

    padding: 2rem $page-padding;
  }
</style>