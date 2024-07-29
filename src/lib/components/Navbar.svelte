<div class="wrapper">
	<a href="/">
		<h1>SaMoTech Robotics</h1>
	</a>

	<div class="right-content">
		<a href="/">
			<h2>Home</h2>
		</a>
		<a href="/about">
			<h2>About Us</h2>
		</a>
		<a href="/support">
			<h2>Support Us</h2>
		</a>
		<a href="/sponsors">
			<h2>Our Sponsors</h2>
		</a>
	</div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    //background-color: var(--primary);
    color: var(--text);

    a {
      text-decoration: none;
      color: var(--text-inv);
    }

    h1 {
      font-size: 2rem;
      margin: 0;
    }

    .right-content {
      display: flex;
      gap: 1rem;

      h2 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
  }
</style>
