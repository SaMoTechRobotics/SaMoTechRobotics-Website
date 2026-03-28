<script>
	import AccomplishmentsSection from '$lib/components/sections/AccomplishmentsSection.svelte';
	import ImageGallery from '$lib/components/sections/ImageGallery.svelte';
	import Card from '$lib/components/sections/SplitSection.svelte';
</script>

<Card img="images/Hero/ILT6.jpg" title="About Us" textSide="right" dark>
	<p>
		SaMoTech is a student-led, all-volunteer 501(c)(3) nonprofit community team founded in 2022 by
		six freshmen at Santa Monica High School. Now with ten members, ages 15–18, working out of a
		family garage, SaMoTech has fought its way to the #1 ranking in the SoCal region, competing
		against teams backed by schools with paid coaches and dedicated workspaces. Beyond learning
		engineering and robotics through competition, we regularly support other teams and promote
		robotics and STEM education in our local community. Here are just some highlights of SaMoTech’s
		journey so far:
		<!-- SaMoTech is a 501c3 community-based robotics program competing in the FIRST Tech Challenge
		(FTC). Based in Santa Monica, CA, our mission is to inspire young people to be the science and
		technology leaders of the future. Through participation in FTC, we develop hands-on skills in
		engineering, robotics, and coding while improving life-skills like teamwork and self-confidence.
		SaMoTech currently has two teams with 15 members total: 10 members on SaMoTech and 5 members on
		Cyberquakes, ranging in age from 13 to 18. Our hard-working and high-achieving students come
		from diverse backgrounds and bring varied interests, with each member contributing a vital
		perspective to the team. We students are responsible for the design and construction of our
		robots, using a variety of tools and techniques, with guidance from our coaches and mentors. We
		also collaborate on marketing and outreach efforts, helping to promote the team and engage with
		our community. In particular, we dedicate many hours to helping other teams and schools. -->
	</p>
</Card>

<AccomplishmentsSection>
	<ul slot="competition">
		<li>2026 SoCal Regional Champions</li>
		<li>Achieved #1 Autonomous Program worldwide, 2025</li>
		<li>1st Place Inspire - ILT7, 2025. FIRST's highest award</li>
		<li>League Champions (3 years in a row)</li>
		<li>Achieved #1 ranking in SoCal (2024-2026)</li>
		<li>Consistently ranks in the top 1% worldwide</li>
	</ul>

	<ul slot="outreach">
		<li>Helped launch & mentor 2 new FTC teams</li>
		<li>Presenters: Franklin Elementary Science Club '25 & '26</li>
		<li>Exhibitors: Grant Elementary STEAM Fair 2023-2025</li>
		<li>Presenters: SMMUSD Summer Adventure Program 2025</li>
		<li>Opening Presenters: Santa Monica Arts Festival '24</li>
		<li>Exhibitors at the 2024 Innovation Hub in Santa Monica</li>
	</ul>
</AccomplishmentsSection>

<!-- <TeamProfiles>
	<Profile name="Alexa">
		Outside of robotics, I enjoy reading and writing. I contribute to the team by organizing our
		outreach and portfolio, and by strategizing. My favorite thing about FTC is supporting and
		coaching my teammates during the matches.
	</Profile>
	<Profile name="Ari">
		I enjoy video games, soccer, rock climbing, writing, and math. I contribute to the team by 3D
		printing the claw and beacon. In FTC, I like that you can iterate through meets, and see how
		robots improve through the challenge.
	</Profile>
	<Profile name="Brandon">
		Aside from robotics, I run and work on coding projects. I focus on coding teleop and autonomous,
		as well as building mechanical features on the robot. My favorite thing about FTC is being
		amazed by the many different approaches teams come up with for their robots.
	</Profile>
	<Profile name="Cameron">
		I really enjoy cycling, and getting fit for that. I've been helping by creating pods for our
		dead wheel odometry. I also helped CAD, and brainstorm for the claw. I like FTC because I learn
		a ton of new skills from it, and I love seeing the progression of our robot.
	</Profile>
	<Profile name="Camille">
		Outside of robotics, I enjoy rock climbing and music. My contribution to the team is mostly
		building and being a human player. My favorite thing about FTC is that it has helped me find an
		amazing community, and something that I enjoy.
	</Profile>
	<Profile name="Georgia">
		I enjoy playing soccer and doing art outside of robotics. My roles on the team are driving,
		building, and designing the t-shirt. My favorite thing about FTC is that it is a great community
		and everyone is so nice.
	</Profile>
	<Profile name="Jasmine">
		Outside of robotics, I play volleyball and make art. I help with driving, organizing the
		portfolio, and designing the t-shirt and logo. My favorite thing about FTC is the competitions
		and learning from other teams.
	</Profile>
	<Profile name="Waylon">
		Hey, I am Waylon. In robotics I find my passion to be solving problems in an organized, logical
		manner, as well as building, coding and strategizing. Aside from robotics, I enjoy competitive
		swimming, programming, and algorithmic trading. My favorite part about our robotics competition
		is the excitement of competition and team scouting.
	</Profile>
</TeamProfiles> -->

<ImageGallery
	images={[
		// 'images/Hero/ILT6.jpg',
		// 'images/2025-26/FTC-Champs2026-team.jpg',
		'images/2025-26/FTC-Champs2026-stands.jpg',
		'images/2025-26/ILT6-8807.jpg',
		'images/2025-26/Franklin 2.jpg',
		'images/2025-26/FTC_Regionals_2025-4688.jpg',
		'images/2025-26/FTC_Regionals_2025-9035.jpg',
		'images/2025-26/ND7_2691-Edit-57.jpg',
		'images/2025-26/ND7_0724.jpg',
		// 'images/2025-26/ILT6-8708.jpg',
		'images/2025-26/FTC-Champs2026-repairs.jpg',
		'images/2025-26/IMG_8469-5.jpg',
		'images/News/Promenade.jpg',
		'images/News/Rockwell.jpg',
		'images/News/InnovationHub.jpg',
		'images/Hero/Regionals_06_FinalQ.jpg',
		'images/2024-25/231202_Samo_Meet1_Practice.jpg',
		'images/2024-25/Samo-CDs-Trophies_240316.jpg',
		'images/2023-24/CAD-Seminar.jpg',
		'images/2024-25/230909_MeetingTable2.jpg',
		'images/2024-25/FTC_L-W_Meet2-1729.jpg'
	]}
/>

<style lang="scss">
	:global(.layout.about) {
		background: linear-gradient(
			180deg,
			$primary-darker 0%,
			lighten($primary-dark, 8) 25%,
			darken($primary, 10) 36%,
			$primary-dark 60%,
			$primary-darker 100%
		);
	}
</style>
