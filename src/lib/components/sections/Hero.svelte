<script lang="ts">
	export let title: string;
	export let img: string = '';
</script>
<div class="wrapper" class:img={img !== ""} style={img ? `background-image: url(${img})` : ""}>
	<div class="content">
		<h1>{title}</h1>
		<slot />
	</div>
</div>

<style lang="scss">
  .wrapper {
    margin: 1rem $page-padding;
    border-radius: 1rem;
    height: calc(100vh - $navbar-height - 4rem);

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    &.img {
      background-size: cover;
      background-position: center;

      //&::before {
      //  content: '';
      //  z-index: 10;
      //  width: calc(100% - $page-padding * 2);
      //  height: 100%;
      //  display: block;
      //  position: absolute;
      //  //background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 50%);
      //}
    }

    .content {
      text-align: center;
      margin-bottom: 2rem;

      color: $text-light;

      h1 {
        font-size: 8rem;
        font-weight: bolder;
        text-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
      }
    }

    @media (max-width: 768px) {
      margin: 1rem $mobile-padding;
    }
  }
</style>