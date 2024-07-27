<script>
	import Hero from '$lib/components/Hero.svelte';
	import Card from '$lib/components/Card.svelte';
</script>

<div>
	<Hero title="SaMoTech Robotics" img="images/photos/team/samotech-team1.jpg" />

	<p>
		SaMoTech is a 501c3 community-based robotics team competing in the FIRST Tech Challenge (FTC). Based in Santa
		Monica, CA, our mission is to inspire young people to be the science and technology leaders of the future. Through
		participation in FTC, we develop hands-on skills in engineering, robotics, and coding while improving life-skills
		like teamwork and self-confidence.

		SaMoTech currently has 8 members, aged 13-15, all hard-working and high-achieving students from diverse backgrounds
		and with varied interests, each bringing a vital perspective necessary for our success. We students are responsible
		for the design and construction of our robots, using a variety of tools and techniques, with guidance from our
		volunteer coaches and mentors. We also collaborate on marketing and outreach efforts, helping to promote the team
		and engage with our community. In particular, we dedicate many hours to helping other teams and schools.
	</p>
</div>

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

<style lang="scss">
  div {
    background-color: var(--primary);
    height: 100%;

    p {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
</style>