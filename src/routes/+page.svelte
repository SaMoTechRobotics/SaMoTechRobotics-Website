<script>
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/Card.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
</script>

<Hero title="SaMoTech Robotics" img="images/photos/team/samotech-team1.jpg" />

<Card img="images/photos/samotech-winning1.webp" title="About Us" textSide="right">
	<p>
		FIRST (For Inspiration and Recognition of Science and Technology) is a global organization that hosts robotics
		competitions for over 600,000 students across more than 100 countries. The world's leading youth-serving nonprofit
		advancing STEM education, FIRST inspires young people to be technology innovators by engaging them in exciting
		mentor-based programs that build science, engineering, and technology skills.

		FIRST Tech Challenge teams, comprised of students grades 7-12, learn to think like engineers. Teams design, build,
		and code autonomous and driver-operated robots that compete in head-to-head competitions. Each unique season
		concludes with inter-league, regional, and world championships. Participants also gain access to education
		opportunities including $80M+ in college scholarships.
	</p>
</Card>


<Card img="images/photos/samotech-winning1.webp" title="About Us" textSide="left">
	<p>
		FIRST (For Inspiration and Recognition of Science and Technology) is a global organization that hosts robotics
		competitions for over 600,000 students across more than 100 countries. The world's leading youth-serving nonprofit
		advancing STEM education, FIRST inspires young people to be technology innovators by engaging them in exciting
		mentor-based programs that build science, engineering, and technology skills.

		FIRST Tech Challenge teams, comprised of students grades 7-12, learn to think like engineers. Teams design, build,
		and code autonomous and driver-operated robots that compete in head-to-head competitions. Each unique season
		concludes with inter-league, regional, and world championships. Participants also gain access to education
		opportunities including $80M+ in college scholarships.
	</p>
</Card>

<Sponsors />

<style lang="scss">
  :global(.layout) {
    background: linear-gradient(180deg, var(--bg-dark) 0%, var(--primary) 15%, var(--primary) 25%, white 35%, white 70%, var(--primary) 80%, var(--bg-dark) 100%);
  }
</style>