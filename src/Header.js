import React, { Fragment } from 'react';
import './styles/Header.scss';
import logo from './img/logo-white.png';

const Header = () => {
	return (
		<Fragment>
			<header className='header'>
				<div className='header__logo-box'>
					<img src={logo} alt='Logo' className='header__logo' />
				</div>
				<div className='header__text-box'>
					<h1 className='heading-primary'>
						<span className='heading-primary--main'>
							یوزپلنگ ایرانی
						</span>						
						<span className='heading-primary--sub'>
							کمک به بقای این حیوان نادر
						</span>
					</h1>
					<a href='#' className='btn btn--yellow btn--animated'>
						می خواهم کمک کنم <span>❤</span> 
					</a>					
				</div>
			</header>
		</Fragment>
	);
};

export default Header;
