<script>
	import ImageGallery from '$lib/components/sections/ImageGallery.svelte';
	import JoinSection from '$lib/components/sections/JoinSection.svelte';
	import Card from '$lib/components/sections/SplitSection.svelte';
</script>


<Card
	img="images/middle-school/Middle-school-robot-in-pits-Jan2025.jpg"
	title="Middle School Program"
	textSide="right"
	dark
>
	<p>
		For Samotech's 2024/25 season we added a second team for middle school students called the Samotech
		Cyberquakes (team 27299). Cyberquakes compete in FTC League W right alongside the Samotech high school team, and
		they have done great! 
	</p>
	
	<!--	<p>-->
	<!--		If you have a child who will be in middle or high school next year who might be interested, <b>call or text Chris at 323-309-6687</b>. We may also have an off-season program as well (April thru August), or summer camps, so there's no time like the present to reach out and let us know what you'd like to be a part of!-->
	<!--	</p>-->
</Card>
<Card
	img="images/middle-school/Cyberquakes_levetating_Long_Beach_Premiere_Event.jpg"
	title="Cyberquakes Sophomore Success - What a year!"
	textSide="left"
	dark
>
	<p>In Cyberquakes second season, we exceeded our goals. First we rocked the ILT tournament to qualify for the highest FTC tournament in SoCal, the SoCal Regional Championship, which we had failed to do our rookie year. </p>
		<p>At Regionals, we did okay but importantly won the presitigious Innovate Award for our unique levetating-robot design (see photo above/right) which uses our robot's unique spindexer platter to raise the robot up into the air at the end of the match.</p>
	<p>Capping a great season, our Regionals performance qualified us for the prestigious Western Edge Premiere Event in Long Beach, a tournament with amazing robots from all over the USA and even the world. Amazingly, Cyberquakes went 7-3 and was almost an alliance captain, and we got the first place Innovate Award for our levitating spindexer design.</p>
</Card>

<JoinSection />


<a href="/docs/CyberQukes-Portfolio-ILT2025.pdf" style="text-decoration: none;">
	<Card
		img="/docs/Cyberquakes-Portfolio-ILT2025-THUMB.png"
		title="Engineering Portfolio 2025"
		textSide="right"
		dark
	></Card>
</a>
<!-- 
<TeamProfiles yearsEnabled={false}>
	<Profile name="Jackson">
		I am 12 years old, and this is my second year of FTC. I enjoy programming and 3d modeling.
	</Profile>
	<Profile name="Beckett">I am 14, and this is my first year in FTC. I enjoy swimming.</Profile>
	<Profile name="Cyrus">
		I am 11 years old and this is my first year in FTC. I enjoy 3D Printing, modeling and building
		computers.
	</Profile>
	<Profile name="David">
		I am twelve years old, this is my first year in FTC. I enjoy Fencing.
	</Profile>
</TeamProfiles> -->

<ImageGallery
	images={[
		'images/middle-school/JV-bot-meet-3.jpg',
		'images/middle-school/JV-and-Samotech-action-shot-during-meet-3.jpg',
		'images/middle-school/Jackson-meet-3.jpg',
		'images/middle-school/JV-chatting-during-driver-meeting-meet-3.jpg',
		'images/middle-school/JV-competing-meet-3.jpg',
		'images/middle-school/JV-meet-3-pit-pic.jpg',
		'images/middle-school/meet-3-Samotech-and-JV-in-match.jpg',
		'images/middle-school/arm-fell-off-meet-3.jpg',
		'images/middle-school/JV-driving-in-Meet-2.JPG'
	]}
/>

<style lang="scss">
	:global(.layout.middleSchool) {
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
