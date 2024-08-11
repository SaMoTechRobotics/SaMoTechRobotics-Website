<script>
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { page } from '$app/stores';
	import '@fontsource/inter';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	$: path = $page.url.pathname.replace('/', '');
</script>

<div class="layout {path}">
	<Navbar />

	<slot></slot>

	<Footer />
</div>

<style lang="scss">
  :global(body) {
    margin: 0;
    padding: 0;
    background-color: $primary-dark;
    color: $text;
    font-family: $font;
    overflow-x: hidden;
    overflow-y: scroll;
    width: 100vw;
    line-height: 1.6;
  }

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    :global(> :last-child) {
      margin-top: auto;
    }
  }

  :global(h1) {
    font-size: 2rem;
    font-weight: bold;
  }

  :root {
    --bg: rgb(239, 253, 255);
    --bg-hover: rgb(203, 222, 228);
    --bg-secondary: #f5f5f5;

    --bg-primary: #66DEF0;
    --bg-dark: #011f2c;
    --bg-dark-transparent: rgba(3, 77, 91, 0.8);

    --border: #0A627C;

    --primary: rgba(0, 200, 255, 1);
    --secondary: rgb(77, 216, 254);
    --dark: rgba(2, 145, 184, 1);

    --text: rgb(5, 81, 100);
    --text-gray: rgb(54, 89, 98);
    --text-muted: rgb(0, 139, 177);
    --text-inv: #fff;

    --text-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
    --text-shadow-hover: 0 3px 3px rgba(0, 0, 0, 0.3);
    --box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
    --box-shadow-hover: 0 3px 3px rgba(0, 0, 0, 0.5);

    --img-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);

    --font: 'Inter', sans-serif;
  }
</style>