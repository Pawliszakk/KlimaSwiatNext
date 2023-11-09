import { useEffect, useState } from 'react';

import classes from './Hero.module.css';
import { FaSnowflake } from 'react-icons/fa';
import Content from './Content';
import SliderButtons from './SliderButtons';
import SpecialButton from '@/components/UI/Buttons/SpecialButton';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
const Hero = () => {
	const [image, setImage] = useState(0);

	const backgrounds = [
		'url(assets/hero/hero1.jpg)',
		'url(assets/hero/hero2.JPG)',
		'url(assets/hero/hero3.JPG)',
		'url(assets/hero/hero4.JPG)',
	];

	const slideChangeHandler = (slide: number) => {
		if (slide === image) {
			return;
		}
		setImage(slide);
	};

	useEffect(() => {
		const images = [
			'assets/hero/hero1.jpg',
			'assets/hero/hero2.JPG',
			'assets/hero/hero3.JPG',
			'assets/hero/hero4.JPG',
		];
		images.forEach((image) => {
			const img = new Image();
			img.src = image;
		});
	}, []);

	useEffect(() => {
		let slide = image;
		if (slide === 3) {
			slide = -1;
		}
		slide++;
		const sliderTimer = setTimeout(() => {
			slideChangeHandler(slide);
		}, 5000);

		return () => clearTimeout(sliderTimer);
	}, [slideChangeHandler]);

	return (
		<header
			className={classes.header}
			style={{ backgroundImage: backgrounds[image] }}
			id="home"
		>
			<div className={classes.box}>
				<SlideAnimation>
					<p>
						<FaSnowflake />
						Klima<span>Świat</span>
					</p>
				</SlideAnimation>
				<Content index={image} />
				<SlideAnimation className={classes.buttons}>
					{' '}
					<SpecialButton className={classes.btn} href="#contact">
						Skontaktuj się
					</SpecialButton>
					<SpecialButton className={classes.btn} empty href="#about">
						Dowiedz się więcej
					</SpecialButton>
				</SlideAnimation>
			</div>
			<SliderButtons onSlideChange={slideChangeHandler} index={image} />
		</header>
	);
};

export default Hero;
