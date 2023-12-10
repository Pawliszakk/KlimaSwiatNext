import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';

import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './Logo.module.css';

const Logo = () => {
	const { isBlue } = useContext(ThemeContext);

	const logoSrc = isBlue ? 'logo-about.png' : 'logo-about-gray.png';

	return (
		<div className={classes.box}>
			<SlideAnimation>
				<img
					src={`/assets/logos/${logoSrc}`}
					alt="Logo Firmy Klima Świat"
					loading="lazy"
				/>
			</SlideAnimation>
		</div>
	);
};

export default Logo;
