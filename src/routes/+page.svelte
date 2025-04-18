<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import SplitSection from '$lib/components/sections/SplitSection.svelte';
	import SponsorsSection from '$lib/components/sponsors/SponsorsSection.svelte';
	import SupportSection from '$lib/components/sections/SupportSection.svelte';
	import LinkButton from '$lib/components/layout/LinkButton.svelte';
	import PostsSection from '$lib/components/posts/PostsSection.svelte';
	import JoinSection from '$lib/components/sections/JoinSection.svelte';
</script>

<div class="homepage"></div>

<Hero title="SaMoTech Robotics" img="images/2024-25/Regionals_06_FinalQ.jpg" />

<!--<StatsSection />-->

<JoinSection homepage />

<PostsSection home postsCount={4} />

<SponsorsSection small />

<SplitSection img="images/2024-25/230909_Kickoff-Field.jpg" title="About Us" textSide="right" dark>
	SaMoTech NOW is a 501c3 community-based robotics team competing in the FIRST Tech Challenge (FTC). Based in Santa
	Monica,
	CA, our mission is to inspire young people to be the science and technology leaders of the future. Through
	participation in FTC, we develop hands-on skills in engineering, robotics, and coding while improving life-skills like
	teamwork and self-confidence.

	<br />

	SaMoTech currently has 9 members, aged 14-16, all hard-working and high-achieving students from diverse backgrounds
	and with varied interests, each bringing a vital perspective necessary for our success.
	<br />
	We students are responsible for the design and construction of our robots, using a variety of tools and techniques,
	with guidance from our
	volunteer coaches and mentors. We also collaborate on marketing and outreach efforts, helping to promote the team and
	engage with our community. In particular, we dedicate many hours to helping other teams and schools.

	<div slot="buttons">
		<LinkButton to="/support" primary>Support Us</LinkButton>
		<LinkButton to="/about">Learn More</LinkButton>
	</div>
</SplitSection>


<SplitSection img="images/photos/samotech-winning1.webp" title="FIRST Tech Challenge" textSide="left" dark>
	FIRST challenges teams of students, grades 7-12, to design, build, and program autonomous & driver-operated robots
	that compete in head-to-head competitions. Each unique season concludes with inter-league, regional, and world
	championships. Participants also gain access to educational opportunities, exclusive scholarships, and potential dream
	employers.
	FIRST organizes robotics competitions involving more than 600,000 students in over 100 countries through programs
	sponsored by the likes of Amazon, Disney & NASA.

	<div slot="buttons">
		<LinkButton to="https://www.firstinspires.org/robotics/ftc" newTab>Learn More</LinkButton>
	</div>
</SplitSection>

<SupportSection>
	As all members of SaMoTech, including coaches and mentors, serve as unpaid volunteers, every donation will be used to
	cover practical expenses such as robot components, control systems, tools, registration fees, as well as marketing and
	travel/transport expenses. Any surplus funds will go to support SaMoTech’s future FIRST seasons or will be donated to
	other FTC teams in need. Donations to SaMoTech can be made through SaMoTech Booster Club, a 501c3 non-profit charity.
	Donations are typically 100% tax deductible in the US. Thank you for any consideration you may give to supporting our
	team.
</SupportSection>

<style lang="scss">
  :global(.layout):has(.homepage) {
    background: linear-gradient(180deg, $primary-darker 0%, $primary-dark 24%, darken($primary, 0) 35%, darken($primary, 20) 70%, $primary-dark 80%, $primary-darker 100%);
  }
</style>