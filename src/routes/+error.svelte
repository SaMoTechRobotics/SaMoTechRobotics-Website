<div class="wrapper">
	<h1>404</h1>
	<!--	<p>Go to <a href="/">Home</a></p>-->
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 10rem;
      text-align: center;
      margin-top: 10rem;
      color: $primary;
      text-shadow: 0 0 10rem darken($primary, 30);
    }

    p {
      text-align: center;
      font-size: 1rem;
      color: $text-light;
    }

    a {
      @include button(true, true);
    }
  }
</style>