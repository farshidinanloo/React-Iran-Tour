import React, { useState } from 'react';
import TourGuidesItem from './TourGuidesItem';
import './styles/TourGuides.scss';
import guideOne from './img/guideOne.jpeg';
import guideTwo from './img/guideTwo.jpg';
import video1 from './img/video.mp4';


const TourGuides = () => {
	const [tourLeader] = useState([
		{
			id: 1,
			image: guideOne,
			name: 'علیرضا فروتن'
		},
		{
			id: 2,
			image: guideTwo,
			name: 'سمانه عسکری'
		}
	]);

	return (
		<section className='section-tourGuides'>
			<div className='bg-video'>
				<video className='bg-video__content' autoPlay muted loop >
					<source src={video1} type='video/mp4' />				
				</video>
			</div>
			<div className='u-center-text u-margin-bottom-big '>
				<h2 className='heading-secondary'>معرفی تور لیدر های ما</h2>
			</div>

			{tourLeader.map(guide => (
				<TourGuidesItem key={guide.id} guide={guide} />
			))}

			<div className='u-center-text u-margin-top-huge'>
				<a href='#!' className='btn-text'>
					آشنایی با همه تور لیدر ها &larr;
				</a>
			</div>
		</section>
	);
};

export default TourGuides;
