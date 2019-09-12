import React from 'react';
import './styles/About.scss';
import './styles/Grid.scss';
import pic1 from './img/nat-1.jpg';
import pic2 from './img/nat-2.jpg';
import pic3 from './img/nat-3.jpg';

const About = () => {
	return (
		<section className='section-about'>
			<div className='u-center-text u-margin-bottom-big '>
				<h2 className='heading-secondary'>
					بازدید از طبیعت و حیات وحش ایران
				</h2>
			</div>
			<div className='row'>
				<div className='col-1-of-2'>
					<h3 className='heading-tertiary u-margin-bottom-small'>
						شما عاشق طبیعت ایران خواهید شد
					</h3>
					<p className='paragraph'>
						ایران کشوری گسترده و چهار فصل است و مناطق طبیعی و تاریخی
						متنوعی دارد. خیلی از جاذبه های ایران در داخل و خارج از
						کشور شناخته شده هستند و خیلی دیگر از جاذبه ها نا شناخته
						باقی مانده اند. در میان جاذبه های گردشگری ایران، مناطقی
						بسیار زیبا با طبیعت بکر وجود دارند که موجب شگفتی و حیرت
						هر بازدیدکننده ای می شوند.
					</p>

					<h3 className='heading-tertiary u-margin-bottom-small'>
						طبیعتی که در هیچ جای جهان وجود ندارد
					</h3>
					<p className='paragraph'>
						برخی از مناطق طبیعی ایران به قدری زیبا و منحصر به فرد
						هستند که مثال آن ها را در دنیا نیز نمی توان یافت. در
						ادامه ی این مطلب قصد داریم زیباترین مناطق طبیعی ایران را
						معرف حضورتان نماییم.
					</p>
					<a href='#!' className='btn-text'>
						مطالعه بیشتر &larr;
					</a>
				</div>
				<div className='col-1-of-2'>
					<div className='composition'>
						<img
							src={pic1}
							alt=''
							className='composition__photo composition__photo--p1'
						/>
						<img
							src={pic2}
							alt=''
							className='composition__photo composition__photo--p2'
						/>
						<img
							src={pic3}
							alt=''
							className='composition__photo composition__photo--p3'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
