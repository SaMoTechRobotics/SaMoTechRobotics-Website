<script>
	import LinkButton from '$lib/components/layout/LinkButton.svelte';
</script>

<div class="wrapper">
	<h1>Support Us</h1>

	<p>
		<slot></slot>
	</p>

	<div class="buttons">
		<LinkButton to="https://www.paypal.com/donate/?hosted_button_id=6M6HKRXT9468Y" newTab>Donate via Paypal</LinkButton>
		<LinkButton to="/support" transparent>Learn More</LinkButton>
	</div>
</div>

<style lang="scss">
  .wrapper {
    padding: 4rem $page-padding;

    color: $text-light;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3rem;
      margin: 0;
    }

    p {
      font-size: 1.2rem;
      text-align: center;
    }

    .buttons {
      margin-top: 2rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
</style>