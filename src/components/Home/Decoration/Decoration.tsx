import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';

import classes from './Decoration.module.css';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import Divider from '@/components/UI/Section/Divider';

const Decoration = () => {
	const { isBlue } = useContext(ThemeContext);

	const imageSrc = isBlue ? 'technican.JPG' : 'technican-gray.JPG';

	return (
		<section className={classes.decoration}>
			<SlideAnimation className={classes.content}>
				<SectionTitle blue>Dlaczego my?</SectionTitle>
				<p>
					Działamy na rynku od lat, dostarczając klientom niezmiennie najwyższą
					jakość i budując trwałe relacje, oparte na pełnym zaufaniu, co jest
					dla nas priorytetem
				</p>
			</SlideAnimation>
			<SlideAnimation left className={classes.image}>
				<img
					src={`/assets/ilustrations/${imageSrc}`}
					alt="Biało Niebieska Ilustracja technika klimatyzacji z kluczem na tle domu"
					loading="lazy"
				/>
			</SlideAnimation>

			<Divider blue />
		</section>
	);
};

export default Decoration;
