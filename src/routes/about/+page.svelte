<script>
	import Card from '$lib/components/Card.svelte';
</script>

<h1>About Us</h1>

<Card img="images/photos/samotech-winning1.webp" title="About Us" textSide="left">
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
</Card>

<style lang="scss">
  :global(.layout.about) {
    background: linear-gradient(180deg, var(--bg-dark) 0%, var(--primary) 50%, var(--bg-dark) 100%);
  }
</style>