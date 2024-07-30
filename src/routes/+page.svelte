<script>
	import Hero from '$lib/components/sections/Hero.svelte';
	import SplitSection from '$lib/components/sections/SplitSection.svelte';
	import SponsorsSection from '$lib/components/sponsors/SponsorsSection.svelte';
	import SupportSection from '$lib/components/sections/SupportSection.svelte';
</script>

<Hero title="SaMoTech Robotics" img="images/2024-25/Regionals_06_FinalQ.jpg" />

<SponsorsSection small />

<SplitSection img="images/photos/samotech-winning1.webp" title="About Us" textSide="right">
	FIRST (For Inspiration and Recognition of Science and Technology) is a global organization that hosts robotics
	competitions for over 600,000 students across more than 100 countries. The world's leading youth-serving nonprofit
	advancing STEM education, FIRST inspires young people to be technology innovators by engaging them in exciting
	mentor-based programs that build science, engineering, and technology skills.

	FIRST Tech Challenge teams, comprised of students grades 7-12, learn to think like engineers. Teams design, build,
	and code autonomous and driver-operated robots that compete in head-to-head competitions. Each unique season
	concludes with inter-league, regional, and world championships. Participants also gain access to education
	opportunities including $80M+ in college scholarships.
</SplitSection>


<SplitSection img="images/photos/samotech-winning1.webp" title="FIRST Tech Challenge" textSide="left">
	FIRST (For Inspiration and Recognition of Science and Technology) is a global organization that hosts robotics
	competitions for over 600,000 students across more than 100 countries. The world's leading youth-serving nonprofit
	advancing STEM education, FIRST inspires young people to be technology innovators by engaging them in exciting
	mentor-based programs that build science, engineering, and technology skills.

	FIRST Tech Challenge teams, comprised of students grades 7-12, learn to think like engineers. Teams design, build,
	and code autonomous and driver-operated robots that compete in head-to-head competitions. Each unique season
	concludes with inter-league, regional, and world championships. Participants also gain access to education
	opportunities including $80M+ in college scholarships.
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
  :global(.layout) {
    background: linear-gradient(180deg, $primary-darker 0%, $primary 20%, $primary 35%, white 50%, white 70%, $primary 80%, $primary-darker 100%);
  }
</style>