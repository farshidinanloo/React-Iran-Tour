import React from 'react';


const ToursSectionItem = props => {
	const {
		location,
		duration,
		quantity,
		guides,
		hotel,
		food,
		price,
		classPicture,
		cardHeading,
		cardSideBack
	} = props.tour;
	return (
		<div className='col-1-of-3'>
			<div className='card'>
				<div className='card__side card__side--front'>
					<div className={`card__picture ${classPicture}`}>
						&nbsp;
					</div>
					<h4 className='card__heading'>
						<span className={`card__heading-span ${cardHeading}`}>
							{location}
						</span>
					</h4>
					<div className='card__details'>
						<ul>
							<li>{duration}</li>
							<li>{quantity}</li>
							<li>{guides}</li>
							<li>{hotel}</li>
							<li>{food}</li>
						</ul>
					</div>
				</div>
				<div className={`card__side card__side--back ${cardSideBack} `}>
					<div className='card__cta'>
						<div className='card__price-box'>
							<p className='card__price-only'>فقط</p>
							<p className='card__price-value'>{price}</p>
						</div>
						<a href='#!' className='btn btn--white'>
							ثبت نام می کنم
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ToursSectionItem;
