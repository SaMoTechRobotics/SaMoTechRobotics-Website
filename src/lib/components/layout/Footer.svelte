<script>
	import SocialButton from '$lib/components/layout/SocialButton.svelte';
</script>

<div class="wrapper">
	<div class="socials">
		<SocialButton icon="akar-icons:instagram-fill"
									to="https://www.instagram.com/samotechrobotics/" />
		<SocialButton icon="akar-icons:github-fill"
									to="https://github.com/SaMoTechRobotics" />
		<SocialButton icon="akar-icons:youtube-fill"
									to="https://www.youtube.com/@samotechrobotics" />
	</div>
	<p>SaMoTech Robotics #21936</p>
	<p>Contact us at <a href="mailto:samotechrobotics@gmail.com">samotechrobotics@gmail.com</a></p>
</div>

<style lang="scss">
  .wrapper {
    background-color: transparentize($primary-dark, 0.5);
    border-top: 1px solid $border;
    color: $text-light;

    padding: 2rem;

    height: 10rem;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      color: $text-light;
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