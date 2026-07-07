<script>
	import ChampionshipSupportSection from '$lib/components/sections/ChampionshipSupportSection.svelte';
	import Hero from '$lib/components/sections/Hero.svelte';
	import SplitSection from '$lib/components/sections/SplitSection.svelte';
	import SponsorsSection from '$lib/components/sponsors/SponsorsSection.svelte';
	// Legacy homepage support block kept commented out below for reference.
	// import SupportSection from '$lib/components/sections/SupportSection.svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';
	import PostsSection from '$lib/components/posts/PostsSection.svelte';
	import Page from './about/+page.svelte';

	const heroImagesWorlds = [
		
		'images/Hero/Cameron and Brandon tuning camera on main field morning of elims.jpg',
		'images/Hero/Worlds pit decorations.jpeg',
		'images/Hero/Brandon close-up on jumbotron.jpg',
		'images/Hero/6-7 goofing around.jpg',
		'images/Hero/close-up of bot sponsors at end of elims match on main field.jpg'
	];
		const heroImagesRegionals = [
		'images/Hero/2026Regionals.jpg',
		'images/Hero/Franklin 2.jpg',
		'images/Hero/ILT6.jpg',
		'images/Hero/Regionals_06_FinalQ.jpg'
	];
		const coolDrawing = [
		'images/Hero/robot-spotlight.png'
	];
</script>
<link
      href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

<div class="homepage"></div>
<SplitSection img="images/Hero/robot-spotlight.png" title="" textSide="left" dark>
	
	 <h1 style="color:#66DEF0; font-family: Outfit; font-size: 50px; line-height: 1.1em;">Samotech Robotics</h1>

	<h3 style="font-style: italic;" id="programs">Building young innovators in Santa Monica since 2022</h3>
          <p>Unaffiliated with any school, we welcome kids from all over the west side to have fun with robotics and compete on one of 
			our award-winning robotics teams (<a style="color: rgba(0, 200, 255, 1);" href="#Worlds">SoCal Champs 2026!</a>), regardless of what school they attend.</p>
		<p id="programs">Our organization currently has multiple programs going into the 2026/27 season: </p>
			<ul>
				<li>SaMoTech 21536 - our high school teams</li>
				<li>Cyberquakes 27299 - our middle school team</li>
				<li>Samotech Bricks - our FLL Lego Challenge team, grades 4-6</li>
				<li>Summer programs for FTC, CAD, 3d printing, and more!</li>
			</ul>
			<p><i><b>For more information about robotics and camps, please email Coach Chris at bebuckle@gmail.com. Camps run through August, and all teams are currently accepting applications for the upcoming season. </b></i></p>
	</SplitSection>
	<SplitSection img="images/Hero/Cameron and Brandon tuning camera on main field morning of elims.jpg" title="" textSide="right" dark>
	
	<h3>Why FTC robotics?</h3>
          <p>Robotics competitions - especially FIRST Tech Challenge (FTC) - have emerged as a super fun way for young people to get hands-on experience with technology and engineering: coding, 3d printing, CAD, motion planning, servo motors, PID control, computer vision, and more. <i>(In case you're wondering, this is not BattleBots where they destroy each other, it's more like a game.)</i></p>
          <p>Robotics teams also foster real world skills like team building, project management, and collaborative problem-solving, skills that will be important no matter how AI shapes the world ahead. Like youth sports, robotics builds character and teaches kids to deal with adversity. </p>
		  <p>LAUSD and many private schools have embraced robotics, but Santa Monica schools have not. Luckily the west side has Samotech. We offer championship-level robotics teams, taught by a <a style="color: #ddd;" href="#Chris">Stanford-trained mechanical engineer</a>, without the scheduling or budget limitations of a school environment. We have fun building, and we build to win.</p>      
     

	<div slot="buttons">
		<LinkButton to="#programs" primary>See our programs</LinkButton>
		<LinkButton to="/support" >Sponsor Us</LinkButton>
	</div>
</SplitSection>




<Hero title="BIG NEWS: SaMoTech Went To Worlds!" imgs={heroImagesWorlds} interval={5000}><!-- heroImages is defined above on line 11, so just put file names there  -->
	<h2 id="Worlds" class="subtitle" style="color: #ddd;">We were big dogs amongst the biggest dogs, going 8 wins 2 losses at the FTC World Championships in Houston, May 2026</h2>
</Hero>



<!--<ChampionshipSupportSection /> -->

<!--<StatsSection />-->

<!-- Temporarily commented out new team member banner -->
<!-- <JoinSection homepage /> -->

<!--<PostsSection home postsCount={4} /> -->

<SponsorsSection small />

<SplitSection title="Watch us in action" youtube="WQUBVjbh-hM?si=UcOmOXhCwHD9-Nai&amp;start=6567" textSide="right" dark>
	<p>SaMoTech is 501(c)(3) nonprofit community team founded in 2022 by a motly crew of mostly ninth graders and a couple dads. Working out of a family
	garage, SaMoTech has fought its way to the #1 ranking in the SoCal region, and with most of the original members in their final senior year of high school,
	we finally won FTC Socal Regionals and went to worlds! Beyond learning engineering and
	robotics through competition, we regularly support other teams and promote robotics and STEM
	education in our local community.</p><p id="Chris"></p>
</SplitSection>

<SplitSection title="Coaching Makes a Difference" youtube="kuJhER0P9zs?si=Na7c7tETP8chtfzo" textSide="left" dark>
	<p id="Chris">All Samotech programs are led by the award-winning head coach of Samotech, Chris Rowe, who very much wishes that robotics competitions had existed when he was a lad!</p>
	<p>This video was the team's secretly made surprise submission nominating Coach Chris as Socal Coach of the Year (aka the Compass Award) at 2025 Socal FTC Championship. We didn't make Worlds that year, sadly, but Chris was flumoxed and a bit tearful from the incredible honor, mostly because of the kind words of the kids speaking from their hearts. If he could have nominated them the best kids of the year, he would have!</p>
</SplitSection>


<section class="support-intro">
	<h2>Support SaMoTech</h2>
	<p>Does this p text show up as part of a photo-free section?</p>
</section>

<Hero title="SaMoTech is SoCal Champs!" imgs={heroImagesRegionals} interval={5000}><!-- heroImages is defined above on line 11, so just put file names there  -->
	<h2 class="subtitle">After knocking on the door for 3 years</h2>
</Hero>

<div class="bottom-spacer" />



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
