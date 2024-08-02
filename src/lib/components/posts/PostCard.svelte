<script lang="ts">
	export let img: string = '';
	export let title: string = '';
	export let date: string = '';
</script>

<a href="/">
	<div class="wrapper">
		<img src={img} alt="" />
		<h1>{title}</h1>
		<p>{date}</p>
		<p>
			<slot />
		</p>
	</div>
</a>

<style lang="scss">
  a {
    text-decoration: none;
    color: inherit;

    .wrapper {
      background: transparentize($primary-dark, 0.4);
      backdrop-filter: blur(2px);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;

      border-radius: 1rem;

      padding-bottom: 2rem;

      color: $text-light;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
      }

      h1 {
        font-size: 2rem;
        margin-bottom: 0;
        padding: 0 $page-padding;
        text-align: left;
      }

      p {
        font-size: 1rem;
        font-weight: normal;
        padding: 0 $page-padding;
      }
    }
  }
</style>