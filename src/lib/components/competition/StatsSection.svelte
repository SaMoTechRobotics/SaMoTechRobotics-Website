<script>
	import Icon from '@iconify/svelte';
</script>

<div class="wrapper">
	<div>
		<Icon icon="material-symbols:trophy" width="3rem" height="3rem" />
		<h2>100</h2>
	</div>
</div>

<style lang="scss">
  .wrapper {
    margin: 0 $page-padding;

    height: 12rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 1rem;

    background: transparentize($primary-dark, 0.5);

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        font-size: 2rem;
        font-weight: 600;
      }
    }
  }
</style>