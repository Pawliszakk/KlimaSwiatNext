import About from './About/About';
import Decoration from './Decoration/Decoration';
import Hero from './Hero/Hero';
import Map from './Map/Map';
import Offer from './Offer/Offer';
import Realizations from './Realizations/Realizations';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Decoration />
			<Offer />
			<Realizations />
			<Map />
		</>
	);
};

export default Home;
