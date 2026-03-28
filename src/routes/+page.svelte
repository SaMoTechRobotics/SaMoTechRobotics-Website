<script>
	import ChampionshipSupportSection from '$lib/components/sections/ChampionshipSupportSection.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import SplitSection from '$lib/components/sections/SplitSection.svelte';
	import SponsorsSection from '$lib/components/sponsors/SponsorsSection.svelte';
	// Legacy homepage support block kept commented out below for reference.
	// import SupportSection from '$lib/components/sections/SupportSection.svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';
	import PostsSection from '$lib/components/posts/PostsSection.svelte';

	const heroImages = [
		'images/Hero/2026Regionals.jpg',
		'images/Hero/Franklin 2.jpg',
		'images/Hero/ILT6.jpg',
		'images/Hero/Regionals_06_FinalQ.jpg'
	];
</script>

<div class="homepage"></div>

<Hero title="SaMoTech Is Going To Worlds!" imgs={heroImages} interval={5000}>
	<h2 class="subtitle">Winning Alliance Captain</h2>
</Hero>

<section class="support-intro">
	<h2>Support SaMoTech's Journey to the World Championship</h2>
</section>

<ChampionshipSupportSection />

<!--<StatsSection />-->

<!-- Temporarily commented out new team member banner -->
<!-- <JoinSection homepage /> -->

<PostsSection home postsCount={4} />

<SponsorsSection small />

<SplitSection img="images/2024-25/230909_Kickoff-Field.jpg" title="About Us" textSide="right" dark>
	SaMoTech is a student-led, all-volunteer 501(c)(3) nonprofit community team founded in 2022 by six
	freshmen at Santa Monica High School. Now with ten members, ages 15–18, working out of a family
	garage, SaMoTech has fought its way to the #1 ranking in the SoCal region, competing against teams
	backed by schools with paid coaches and dedicated workspaces. Beyond learning engineering and
	robotics through competition, we regularly support other teams and promote robotics and STEM
	education in our local community.
	<!-- SaMoTech is a 501c3 community-based robotics program competing in the FIRST Tech Challenge (FTC). Based in Santa
	Monica, CA, our mission is to inspire young people to be the science and technology leaders of the future. Through
	participation in FTC, we develop hands-on skills in engineering, robotics, and coding while improving life-skills like
	teamwork and self-confidence.

	<br />

	SaMoTech currently has two teams with 15 members total: 10 members on SaMoTech and 5 members on Cyberquakes, ranging
	in age from 13 to 18. Our hard-working and high-achieving students come from diverse backgrounds and bring varied
	interests, with each member contributing a vital perspective to the team.
	<br />
	We students are responsible for the design and construction of our robots, using a variety of tools and techniques,
	with guidance from our volunteer coaches and mentors. We also collaborate on marketing and outreach efforts, helping
	to promote the team and engage with our community. In particular, we dedicate many hours to helping other teams and
	schools. -->

	<div slot="buttons">
		<LinkButton to="/support" primary>Support Us</LinkButton>
		<LinkButton to="/about">Learn More</LinkButton>
	</div>
</SplitSection>

<SplitSection
	img="images/photos/samotech-winning1.webp"
	title="FIRST Tech Challenge"
	textSide="left"
	dark
>
	FIRST challenges teams of students, grades 7-12, to design, build, and program autonomous &
	driver-operated robots that compete in head-to-head competitions. Each unique season concludes
	with Inter-league, Regional, and World Championships. FIRST competitions involve more than 600,000
	students in over 50 countries thanks to sponsors like NASA, Google, and Apple.
	<!-- FIRST challenges teams of students, grades 7-12, to design, build, and program autonomous &
	driver-operated robots that compete in head-to-head competitions. Each unique season concludes
	with inter-league, regional, and world championships. Participants also gain access to educational
	opportunities, exclusive scholarships, and potential dream employers. FIRST organizes robotics
	competitions involving more than 600,000 students in over 100 countries through programs sponsored
	by the likes of Amazon, Disney & NASA. -->

	<div slot="buttons">
		<LinkButton to="https://www.firstinspires.org/robotics/ftc" newTab>Learn More</LinkButton>
	</div>
</SplitSection>

<div class="bottom-spacer" />

<!--
<SupportSection>
	As all members of SaMoTech, including coaches and mentors, serve as unpaid volunteers, every donation will be used to
	cover practical expenses such as robot components, control systems, tools, registration fees, as well as marketing and
	travel/transport expenses. Any surplus funds will go to support SaMoTech’s future FIRST seasons or will be donated to
	other FTC teams in need. Donations to SaMoTech can be made through SaMoTech Booster Club, a 501c3 non-profit charity.
	Donations are typically 100% tax deductible in the US. Thank you for any consideration you may give to supporting our
	team.
</SupportSection>
-->

<style lang="scss">
	:global(.layout):has(.homepage) {
		background: linear-gradient(
			180deg,
			$primary-darker 0%,
			$primary-dark 24%,
			darken($primary, 0) 35%,
			darken($primary, 20) 70%,
			$primary-dark 80%,
			$primary-darker 100%
		);
	}

	/* Subtitle style for the hero slot */
	.subtitle {
		font-size: min(4vw, 2rem);
		color: $text-light;
		margin-top: 0.5rem;
		font-weight: 600;
		text-shadow: 0 0 0.6rem rgba(0, 0, 0, 0.6);
	}

	.bottom-spacer {
		height: 2.5rem;
	}

	.support-intro {
		margin: 1.5rem auto 0;
		padding: 0 2rem;
		max-width: 72rem;
		text-align: center;
		color: $text-light;

		h2 {
			margin: 0;
			font-size: clamp(2rem, 3.6vw, 3.2rem);
			line-height: 1.05;
			text-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.28);
		}
	}

	@media (max-width: 900px) {
		.support-intro {
			margin-top: 1rem;
			padding: 0 $mobile-padding;

			h2 {
				font-size: 1.7rem;
			}
		}
	}
</style>
