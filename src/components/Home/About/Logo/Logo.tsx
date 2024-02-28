import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './Logo.module.css';

const Logo = () => {
	return (
		<div className={classes.box}>
			<SlideAnimation>
				<img
					src="assets/logos/logo-about-gray.png"
					alt="Logo Firmy Klima Świat"
					loading="lazy"
				/>
			</SlideAnimation>
		</div>
	);
};

export default Logo;
