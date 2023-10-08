import About from './About/About';
import Decoration from './Decoration/Decoration';
import Hero from './Hero/Hero';
import Offer from './Offer/Offer';
import Realizations from './Realizations/Realizations';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Decoration />
			<Offer />
			<Realizations />{' '}
		</>
	);
};

export default Home;
