import { useState } from 'react';
import classes from './Hero.module.css';

const Hero = () => {
	const [image, setImage] = useState(0);

	const backgrounds = [
		'url(assets/hero/hero1.jpg)',
		'url(assets/hero/hero2.jpg)',
		'url(assets/hero/hero3.jpg)',
		'url(assets/hero/hero4.jpg)',
	];

	return (
		<header
			className={classes.header}
			style={{ backgroundImage: backgrounds[image] }}
			// style={{ backgroundColor: 'red' }}
		></header>
	);
};

export default Hero;
