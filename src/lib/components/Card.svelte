<script lang="ts">
	export let img: string;
</script>

<div class="card">
	<img src={img} alt="" />
	<slot />
</div>

<style lang="scss">
  .card {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: var(--bg-secondary);
    box-shadow: var(--box-shadow);

    border-radius: 1rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
  }
</style>