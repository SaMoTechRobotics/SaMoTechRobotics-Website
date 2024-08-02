<div class="wrapper">
	<slot />
</div>

<style lang="scss">
  .wrapper {
    //display: flex;
    //flex-direction: row;
    //flex-wrap: wrap;
    //justify-content: center;
    //align-items: center;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-template-rows: auto;

    gap: 2rem;

    padding: 2rem $page-padding;
  }
</style>