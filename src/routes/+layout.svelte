<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/scss/_mixins.scss';
</script>

<div class="layout">
	<Navbar />

	<slot></slot>

	<Footer />
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font);
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    background: rgb(0, 221, 255);
    background: radial-gradient(circle, rgba(0, 221, 255, 1) 19%, rgba(13, 111, 133, 1) 65%, rgba(10, 98, 117, 1) 83%, rgba(0, 50, 64, 1) 99%);

    :global(> :last-child) {
      margin-top: auto;
    }
  }

  :root {
    --bg: rgb(239, 253, 255);
    --bg-hover: rgb(203, 222, 228);
    --bg-secondary: #f5f5f5;

    --bg-primary: #66DEF0;
    --bg-dark: #01172C;
    --bg-dark-transparent: rgba(0.392%, 9.02%, 17.3%, 0.5);

    --primary: rgba(0, 200, 255, 1);
    --secondary: rgb(77, 216, 254);
    --dark: rgba(2, 145, 184, 1);

    --text: rgb(10, 100, 124);
    --text-gray: rgb(54, 89, 98);
    --text-muted: rgb(0, 139, 177);
    --text-inv: #fff;

    --text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    --text-shadow-hover: 0 3px 3px rgba(0, 0, 0, 0.3);
    --box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    --box-shadow-hover: 0 3px 3px rgba(0, 0, 0, 0.5);

    --img-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    --font: "Roboto", sans-serif;
  }
</style>