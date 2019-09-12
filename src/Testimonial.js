import React, { useState } from 'react';
import TestimonialItem from './TestimonialItem';
import './styles/Grid.scss';
import './styles/Testimonial.scss';
import p1 from './img/p1.png';
import p2 from './img/p2.png';
import p3 from './img/p3.png';
import p4 from './img/p4.jpg';

const Testimonial = () => {
	const [users] = useState([
		{
			id: 1,
			imgSrc: p1,
			name: 'پارسا رحمانی',
			stars: Array(5).fill(1),
			empty: Array(0).fill(1)
		},
		{
			id: 2,
			imgSrc: p2,
			name: 'سارا قربانی',
			stars: Array(5).fill(1),
			empty: Array(0).fill(1)
		},
		{
			id: 3,
			imgSrc: p3,
			name: 'زهرا سلیمانی',
			stars: Array(5).fill(1),
			empty: Array(0).fill(1)
		},
		{
			id: 4,
			imgSrc: p4,
			name: 'محمد سلطانی ',
			stars: Array(4).fill(1),
			empty: Array(1).fill(1)
		}
	]);

	return (
		<section className='section-review'>
			<div className='u-center-text u-margin-bottom-medium section-review__heading'>
				<h2 className='u-margin-bottom-big'>نظرات برخی از مشتریان</h2>
			</div>
			<div className='row'>
				{users.map(user => (
					<TestimonialItem key={user.id} user={user} />
				))}
			</div>
		</section>
	);
};

export default Testimonial;
