import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Decoration.module.css';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import Divider from '@/components/UI/Section/Divider';

const Decoration = () => {
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
					src="/assets/ilustrations/technican.JPG"
					alt="Biało Niebieska Ilustracja technika klimatyzacji z kluczem na tle domu"
				/>
			</SlideAnimation>

			<Divider blue />
		</section>
	);
};

export default Decoration;
