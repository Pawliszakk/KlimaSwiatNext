import About from './About/About';
import Contact from './Contact/Contact';
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
			<Contact />
		</>
	);
};

export default Home;
