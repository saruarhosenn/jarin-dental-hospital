import React from 'react';
import AboutSmallDesc from '../About/AboutSmallDesc/AboutSmallDesc';
import CounterUp from './CounterUp/CounterUp';
import Hero from './Hero/Hero';
import HomeServices from './HomeServices/HomeServices';

const Home = () => {
	return (
		<main>
			<Hero />
			<AboutSmallDesc />
			<HomeServices />
			<CounterUp />
		</main>
	);
};

export default Home;