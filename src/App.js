import React, { Fragment } from 'react';
import Header from './Header';
import About from './About';
import Testimonial from './Testimonial';
import ToursSection from './ToursSection';
import TourGuides from './TourGuides';
import FormSection from './FormSection';
import Footer from './Footer';
import Navigation from './Navigation';

const App = () => {
	return (
		<Fragment>
			<Navigation />
			<Header />
			<main>
				<About />
				<Testimonial />
				<ToursSection />
				<TourGuides />
				<FormSection />
			</main>
			<Footer />
		</Fragment>
	);
};

export default App;
