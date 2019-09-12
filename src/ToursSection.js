import React, { useState } from 'react';
import './styles/ToursSection.scss';
import ToursSectionItem from './ToursSectionItem';


const ToursSection = () => {
	const [tourInfo] = useState([
		{
			id: 1,
			location: 'شیراز',
			duration: 'تور سه روزه',
			quantity: 'حداکثر سی نفر',
			guides: 'دو لیدر مجرب',
			hotel: 'هتل پنج ستاره',
			food: 'صبحانه رایگان',
			price: '397 هزار تومان',
			classPicture: 'card__picture--1',
			cardHeading: 'card__heading-span--1',
			cardSideBack: 'card__side--back-1'
		},
		{
			id: 2,
			location: 'کویر لوت',
			duration: 'تور دو روزه',
			quantity: 'حداکثر پانزده نفر',
			guides: 'سه لیدر مجرب',
			hotel: 'چادر رایگان',
			food: 'غذا رایگان',
			price: '299 هزار تومان',
			classPicture: 'card__picture--2',
			cardHeading: 'card__heading-span--2',
			cardSideBack: 'card__side--back-2'
		},

		{
			id: 3,
			location: 'رامسر',
			duration: 'تور چهار روزه',
			quantity: 'حداکثر بیست نفر',
			guides: 'دو لیدر مجرب',
			hotel: 'هتل پنج ستاره',
			food: 'صبحانه رایگان',
			price: '497 هزار تومان',
			classPicture: 'card__picture--3',
			cardHeading: 'card__heading-span--3',
			cardSideBack: 'card__side--back-3'
		}
	]);
	return (
		<section className='section-tours'>
			<div className='u-center-text u-margin-bottom-big '>
				<h2 className='heading-secondary'>محبوب ترین تور ها</h2>
			</div>

			<div className='row'>
				{tourInfo.map(tour => (
					<ToursSectionItem key={tour.id} tour={tour} />
				))}
			</div>
			<div className='u-center-text u-margin-top-huge '>
				<a href='#!' className='btn btn--yellow large-radius' >
					مشاهده همه تور ها
				</a>
			</div>
		</section>
	);
};

export default ToursSection;
