import { useContext } from 'react';
import SpecialButton from '../UI/Buttons/SpecialButton';
import Divider from '../UI/Section/Divider';
import classes from './Error.module.css';
import ThemeContext from '@/context/theme-context';

const Error = () => {
	const { isBlue } = useContext(ThemeContext);

	const imageSrc = isBlue ? '404.JPG' : '404-gray.JPG';

	return (
		<section className={classes.error}>
			<div className={classes.image}>
				<img
					src={`/assets/ilustrations/${imageSrc}`}
					alt="Ilustracja Zakłopotanej kobiety na tle zepsutych sprzętów elektronicznych"
				/>
			</div>
			<div className={classes.text}>
				<p>O nie!</p>
				<h2>Strona na której się znalazłeś nie istnieje...</h2>
				<SpecialButton className={classes.btn} href="/">
					Przejdź do strony głównej
				</SpecialButton>
			</div>
			<Divider darkBlue />
		</section>
	);
};

export default Error;
