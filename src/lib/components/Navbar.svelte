<div class="wrapper">
	<div class="navbar">
		<a href="/">
			<h1>SaMoTech Robotics</h1>
		</a>

		<div class="divider" />

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

		<div class="divider" />

		<button>Support</button>
	</div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      color: var(--text);

      gap: 1rem;

      background-color: rgba(7, 58, 85, 0.2);
      backdrop-filter: blur(10px);

      border-radius: 1rem;

      .divider {
        margin: 0 1rem;
        background-color: var(--bg-primary);
        height: 1rem;
        width: 1px;
      }

      a {
        text-decoration: none;
        color: var(--text-inv);
      }

      h1 {
        font-size: 1rem;
        margin: 0;
      }

      h2 {
        font-size: 0.8rem;
        margin: 0;
      }
    }
  }
</style>
