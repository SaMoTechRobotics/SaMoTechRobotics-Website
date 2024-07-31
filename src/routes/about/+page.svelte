<script>
	import Card from '$lib/components/sections/SplitSection.svelte';
	import TeamProfiles from '$lib/components/team/TeamProfiles.svelte';
	import Profile from '$lib/components/team/Profile.svelte';
</script>

<Card img="images/photos/team/samotech-team1.jpg" title="About Us" textSide="right">
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

<TeamProfiles>
	<Profile name="Alexa">
		Outside of robotics, I enjoy reading and writing. I contribute to the team
		by organizing our outreach and portfolio, and by strategizing. My favorite
		thing about FTC is supporting and coaching my teammates during the matches.
	</Profile>
	<!--	<Profile name="Andrew">-->
	<!--		...-->
	<!--	</Profile>-->
	<Profile name="Ari">
		I enjoy video games, soccer, rock climbing, writing, and math. I contribute
		to the team by 3D printing the claw and beacon. In FTC, I like that you can
		iterate through meets, and see how robots improve through the challenge.
	</Profile>
	<Profile name="Brandon">
		Aside from robotics, I run and work on coding projects. I focus on coding
		teleop and autonomous, as well as building mechanical features on the robot. My
		favorite thing about FTC is being amazed by the many different approaches teams
		come up with for their robots.
	</Profile>
	<Profile name="Cameron">
		I really enjoy cycling, and getting fit for that. I've been helping by
		creating pods for our dead wheel odometry. I also helped CAD, and brainstorm
		for the claw. I like FTC because I learn a ton of new skills from it, and I
		love seeing the progression of our robot.
	</Profile>
	<Profile name="Camille">
		Outside of robotics, I enjoy rock climbing and music. My contribution to the
		team is mostly building and being a human player. My favorite thing about
		FTC is that it has helped me find an amazing community, and something that I
		enjoy.
	</Profile>
	<Profile name="Georgia">
		I enjoy playing soccer and doing art outside of robotics. My roles on the
		team are driving, building, and designing the t-shirt. My favorite thing
		about FTC is that it is a great community and everyone is so nice.
	</Profile>
	<Profile name="Jasmine">
		Outside of robotics, I play volleyball and make art. I help with driving,
		organizing the portfolio, and designing the t-shirt and logo. My favorite
		thing about FTC is the competitions and learning from other teams.
	</Profile>
	<Profile name="Waylon">
		Hey, I am Waylon. In robotics I find my passion to be solving problems in an organized, logical manner, as well
		as building, coding and strategizing. Aside from robotics, I enjoy competitive swimming, programming, and
		algorithmic trading. My favorite part about our robotics competition is the excitement of competition and team
		scouting.
	</Profile>
</TeamProfiles>

<style lang="scss">
  :global(.layout.about) {
    background: linear-gradient(180deg, $primary-dark 0%, $primary 10%, white 30%, white 60%, $primary 80%, $primary-darker 100%);
  }
</style>