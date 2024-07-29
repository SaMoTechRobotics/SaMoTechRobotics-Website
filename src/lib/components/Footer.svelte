<script>
	import { page } from '$app/stores';
	import SocialButton from '$lib/components/SocialButton.svelte';
</script>

<div class="wrapper">
	<div class="socials">
		<SocialButton icon="akar-icons:instagram-fill" white={$page.url.pathname !== "/"}
									to="https://www.instagram.com/samotechrobotics/" />
		<SocialButton icon="akar-icons:github-fill" white={$page.url.pathname !== "/"}
									to="https://github.com/SaMoTechRobotics" />
		<SocialButton icon="akar-icons:youtube-fill" white={$page.url.pathname !== "/"}
									to="https://www.youtube.com/@samotechrobotics" />
	</div>
	<p>SaMoTech Robotics #21936</p>
	<p>Contact us at <a href="mailto:samotechrobotics@gmail.com">samotechrobotics@gmail.com</a></p>
</div>

<style lang="scss">
  .wrapper {
    background-color: var(--primary);
    color: var(--text-inv);

    height: 10rem;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      color: var(--text-inv);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .socials {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }
  }
</style>