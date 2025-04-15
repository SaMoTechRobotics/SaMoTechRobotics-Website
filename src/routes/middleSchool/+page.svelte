<script>
	import Card from '$lib/components/sections/SplitSection.svelte';
	import TeamProfiles from '$lib/components/team/TeamProfiles.svelte';
	import Profile from '$lib/components/team/Profile.svelte';
	import AccomplishmentsSection from '$lib/components/sections/AccomplishmentsSection.svelte';
	import ImageGallery from '$lib/components/sections/ImageGallery.svelte';
	import JoinSection from '$lib/components/sections/JoinSection.svelte';

</script>

<JoinSection />

<Card img="images/middle-school/Middle-school-robot-in-pits-Jan2025.jpg" title="Middle School Program" textSide="right" dark>
	
	<p>
		For Samotech's 24/25 season we added a second team for younger students called the Samotech Cyberquakes (team 27299). They compete in FTC League W right alongside original Samotech, and they have done great!  Ranging in age from grades 6-8, they have been near the top of the standings in their league of 20-ish West LA teams, and they can't wait to make an even better robot next year.
	</p>
	<p>
		If you have a child who will be in middle or high school next year who might be interested, <b>call or text Chris at 323-309-6687</b>. We may also have an off-season program as well (April thru August), or summer camps, so there's no time like the present to reach out and let us know what you'd like to be a part of!
	</p>
</Card>
<Card img="images/middle-school/JV-chatting-during-driver-meeting-meet-3.jpg" title="A Brief History of Cyberquakes" textSide="left" dark>
	<p>
		The core members of our high school team have been competing in FTC for several seasons, so we realized it was very intimidating for new, younger members to join the team. Interested middle schoolers didn't like the sound of working with (being ignored) by the "big" kids, and that team's focus is on getting to Worlds, not teaching new members the basics.  So we started the new team where almost everyone is a rookie, and they've had a great time and learned as a group. They even did pretty well in competition, which is the cherry on top! 
	</p>
	<p> 
		It's the best of both worlds for the younger players: they get to be key members of their team, but they get the advantage of Samotech's experience in the form of mentoring and technical help. Our mentors have been doing this a long time, but Cyberquakes would not have had the amazing season they've had without the guidance and technical help of Samotech's seasoned veterans - as well as the cool second-hand tech we have laying around thanks to years of Samotech's ascendancy into the top tier of competitive robotics.
	</p>
</Card>

<Card img="images/middle-school/JV-and-Samotech-action-shot-during-meet-3.jpg" title="Rookie Season Success!" textSide="right" dark>
	<p>
		Feb 16, 2025 -- The Cyberquakes just wrapped up their rookie season with a bang. After a virtual tie for 3rd place in the regular season standings, they performed great at the big elimination tournament called ILT. While we didn't do quite well enough to advance to the Socal Regional Championship Tournament in March, Cyberquakes managed to score the second most points per match at ILT, even beating Samotech's high school team in that metric! (To be fair, Samotech had a rough day with a mechanical issue.)
	</p>
	<p>We had a little bad luck and made a couple mistakes so we didn't make it through this year, but that will make us even better for next year. In robotics, sports and life in general there is no substitute for experience, and this was after all a rookie team so we didn't quite get to the next level this time. But it was a super fun season and ILT was our best tournament of the year in terms of driving and the robot's performance, so we're very proud of the kids and can't wait for September, when the next season's game will be announced!
	</p>
	<!-- <p><a href="/docs/CyberQukes-Portfolio-ILT2025.pdf"><img src="/docs/Cyberquakes-Portfolio-ILT2025-THUMB.png" width="400" border="red" style="border:5px solid #0000dd; padding:3px; margin:5px"></a></p>
	<h2>Check out our <a href="/docs/CyberQukes-Portfolio-ILT2025.pdf">Engineering Portfolio (above)</a>, a 12-page robot report which we presented to the judges to get second place in the Design Award.</h2> -->
</Card>


<a href="/docs/CyberQukes-Portfolio-ILT2025.pdf" style="text-decoration: none;">
	<Card img="/docs/Cyberquakes-Portfolio-ILT2025-THUMB.png" title="Engineering Portfolio 2025" textSide="right" dark>
		
	</Card>
</a>


<TeamProfiles>
	<style>
		.top-content (display: none)
			
	</style>
	<Profile name="Jackson">
		I am 12 years old, and this is my second year of FTC. I enjoy programming and 3d modeling.
	</Profile>
	<Profile name="Beckett">
		I am 14, and this is my first year in FTC. I enjoy swimming.
	</Profile>
	<Profile name="Cyrus">
		I am 11 years old and this is my first year in FTC. I enjoy 3D Printing, modeling  and building computers.

	</Profile>
	<Profile name="David">
		I am twelve years old, this is my first year in FTC. I enjoy Fencing.
	</Profile>
</TeamProfiles>

<ImageGallery images={[
	'images/middle-school/JV-bot-meet-3.jpg',
	'images/middle-school/JV-and-Samotech-action-shot-during-meet-3.jpg',
	'images/middle-school/Jackson-meet-3.jpg',
	'images/middle-school/JV-chatting-during-driver-meeting-meet-3.jpg',
	'images/middle-school/JV-competing-meet-3.jpg',
	'images/middle-school/JV-meet-3-pit-pic.jpg',
	'images/middle-school/meet-3-Samotech-and-JV-in-match.jpg',
	'images/middle-school/arm-fell-off-meet-3.jpg',
	'images/middle-school/JV-driving-in-Meet-2.JPG',
]} />

<style lang="scss">
  :global(.layout.middleSchool) {
    background: linear-gradient(180deg, $primary-darker 0%, lighten($primary-dark, 8) 25%, darken($primary, 10) 36%, $primary-dark 60%, $primary-darker 100%);
  }
</style>
