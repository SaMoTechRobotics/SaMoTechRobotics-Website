<script lang="ts">
	export let title: string;
</script>
<div class="wrapper">
	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>
	<div />
</div>

<style lang="scss">
  .wrapper {
    padding: 2rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .content {
      text-align: center;
      margin-bottom: 2rem;

      color: var(--text-inv);
      text-shadow: var(--text-shadow);

      h1 {
        font-size: 3rem;
      }
    }
  }
</style>