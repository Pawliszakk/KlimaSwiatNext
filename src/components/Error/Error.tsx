import SpecialButton from '../UI/Buttons/SpecialButton';
import classes from './Error.module.css';

const Error = () => {
	return (
		<section className={classes.error}>
			<div className={classes.image}>
				<img
					src="/assets/ilustrations/404.JPG"
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
		</section>
	);
};

export default Error;
