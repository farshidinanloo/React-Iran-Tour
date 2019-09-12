import React from 'react';
import uuid from 'uuid/v4';

const TestimonialItem = props => {
	const { imgSrc, name, stars, empty } = props.user;

	return (
		<div className='col-1-of-4'>
			<div className='review-box'>
				<img src={imgSrc} alt='' className='review-box__img ' />
				<h3 className='heading-tertiary'>{name}</h3>
				<div className='stars u-margin-bottom-small'>
					{stars.map(() => (
						<i
							key={uuid()}
							className='fas fa-star'
							style={{ color: '#a98c52' }}
						></i>
					))}
					{empty.map(() => (
						<i key={uuid()} className='far fa-star'></i>
					))}
				</div>
				<p className='review-box__text'>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
					با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
					و مجله در ستون و سطرآنچنان که لازم است
				</p>
			</div>
		</div>
	);
};

export default TestimonialItem;
