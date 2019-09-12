import React from 'react';

const TourGuidesItem = props => {
	const { image, name } = props.guide;
	return (
        <div className='row'>
		<div className='story'>
			<figure className='story__shape'>
				<img src={image} alt='' className='story__img' />
				<figcaption className='story__caption'>{name}</figcaption>
			</figure>
			<div className='story__text'>
				<h3 className='heading-tertiary u-margin-bottom-small'>
					{name}
				</h3>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
					با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
					و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
					تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
					کاربردی می باشد.
				</p>
			</div>
		</div>
        </div>
	);
};

export default TourGuidesItem;
