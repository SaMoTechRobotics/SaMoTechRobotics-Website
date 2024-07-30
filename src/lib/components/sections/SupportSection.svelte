<div class="wrapper">
	<h1>Support Us</h1>

	<p>
		<slot></slot>
	</p>

	<div class="buttons">
		<a href="/" class="donate">Donate via Paypal</a>
		<a href="/" class="learn">Learn More</a>
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

      a.donate {
        @include button(false, true);
      }

      a.learn {
        @include button(true, true);
      }
    }
  }
</style>