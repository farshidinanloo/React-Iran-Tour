import React from 'react';
import './styles/Footer.scss';
import logo_footer from './img/logo-white.png';


const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__logo-box'>
				<img src={logo_footer} alt='' className='footer__logo' />
			</div>
			<div className='row' >
				<div className='footer__navigation'>
					<ul className='footer__list'>
						<li className='footer__item'>
							<a href='#' className='footer__link'>
								شرکت
							</a>
						</li>
						<li className='footer__item'>
							<a href='#' className='footer__link'>
								تماس با ما
							</a>
						</li>
						<li className='footer__item'>
							<a href='#' className='footer__link'>
								فرصت های شغلی
							</a>
						</li>
						<li className='footer__item'>
							<a href='#' className='footer__link'>
								قوانین
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
