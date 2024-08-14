import type { PostDetails } from '$lib/types/Post';

export const posts: PostDetails[] = [
	{
		title: 'Front Page News',
		date: '2024-05-30',
		text: "SaMoTech made the front page of our local newspaper! This is an amazing opportunity to share our vision of bringing robotics teams and FTC competitions to Santa Monica's public schools. Check out the full article in the Santa Monica Daily Press <a href='https://smdp.com/2024/04/30/samotech-continues-supernova-ascent-to-top-of-robotics-field/'>HERE</a>!",
		images: ['images/Press/SMDP_Headline_240430.jpg']
	},
	{
		title: 'Robot Festival Hosts!',
		date: '2024-04-27',
		text: "SaMoTech was thrilled to represent FIRST at the Santa Monica Arts & Literacy Festival, especially with this year's theme: ROBOTS! We kicked off the event with a mainstage presentation and hosted a booth where we connected with local kids, giving them hands-on experience driving our robots.",
		images: [
			'images/2024-25/ArtsFest 2024/2024_04_ArtsFestival.png',
			'images/2024-25/ArtsFest 2024/ArtsFest_BoothCrowd.jpg'
		]
	},
	{
		title: 'STEAM Expo Presenters',
		date: '2024-04-13',
		text: 'We had an amazing experience representing FIRST at the Grant Elementary STEAM Expo with our friends, The CyberDragons. We loved demonstrating STEAM applications while encouraging students to become more involved in robotics. Kids and parents had fun driving around our robots while learning about FIRST and FTC.',
		images: ['images/Insta/230405_GrantStemFair_02.jpg']
	},
	{
		title: 'Second Season Success!',
		date: '2024-03-09',
		text: "Once again, we went undefeated through the regular season and Interleague meets to earn a spot at the Regional Championships! There, our season ended in a thrilling double semi-final tie-breaker, just shy of the World Championship. No regrets—an amazing year full of growth. We're ready to push even further next season!",
		images: ['images/2024-25/231202_Samo_Meet1_Trophy.jpg']
	}
];
