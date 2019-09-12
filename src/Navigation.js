import React from 'react';
import './styles/Navigation.scss';

const Navigation = () => {
	return (
		<div className='navigation'>
			<input
				type='checkbox'
				className='navigation__checkbox'
				id='navi-toggle'
			/>
			<label htmlFor='navi-toggle' className='navigation__button'>
				<span className='navigation__icon'>&nbsp;</span>
			</label>
			<div className='navigation__background'>&nbsp;</div>
			<nav className='navigation__nav'>
				<ul className='navigation__list'>
					<li className='navigation__item'>
						<a href='#' className='navigation__link'>
					ناحیه کاربری 
						</a>
					</li>
					<li className='navigation__item'>
						<a href='#' className='navigation__link'>
							تورهای محبوب
						</a>
					</li>
					<li className='navigation__item'>
						<a href='#' className='navigation__link'>
							رزرو تور
						</a>
					</li>
					<li className='navigation__item'>
						<a href='#' className='navigation__link'>
							درباره ما
						</a>
					</li>
					<li className='navigation__item'>
						<a href='#' className='navigation__link'>
							تماس با ما
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
