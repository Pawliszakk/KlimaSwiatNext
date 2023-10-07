import { useEffect, useState } from 'react';
import classes from './Hero.module.css';
import { FaSnowflake } from 'react-icons/fa';
import Content from './Content';
import SliderButtons from './SliderButtons';
import SpecialButton from '@/components/UI/Buttons/SpecialButton';
const Hero = () => {
	const [image, setImage] = useState(0);

	const backgrounds = [
		'url(assets/hero/hero1.jpg)',
		'url(assets/hero/hero2.jpg)',
		'url(assets/hero/hero3.jpg)',
		'url(assets/hero/hero4.jpg)',
	];

	const slideChangeHandler = (slide: number) => {
		if (slide === image) {
			return;
		}
		setImage(slide);
	};

	// useEffect(() => {
	// 	let slide = image;
	// 	if (slide === 3) {
	// 		slide = 0;
	// 	}
	// 	if (slide !== 0) {
	// 		slide++;
	// 	}
	// 	const sliderTimer = setTimeout(() => {
	// 		slideChangeHandler(slide);
	// 	}, 5000);

	// 	return () => clearTimeout(sliderTimer);
	// }, [slideChangeHandler]);

	return (
		<header
			className={classes.header}
			style={{ backgroundImage: backgrounds[image] }}
		>
			<div className={classes.box}>
				<p>
					<FaSnowflake />
					Klima<span>Świat</span>
				</p>
				<Content index={image} />
				<div className={classes.buttons}>
					<SpecialButton className={classes.btn} href="#contact">
						Skontaktuj się
					</SpecialButton>
					<SpecialButton className={classes.btn} empty href="#contact">
						Dowiedz się więcej
					</SpecialButton>
				</div>
			</div>
			<SliderButtons onSlideChange={slideChangeHandler} index={image} />
		</header>
	);
};

export default Hero;
