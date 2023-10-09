import { FaSnowflake } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<div className={classes.box}>
				<p>
					<FaSnowflake />
					Klima<span>Świat</span>
					<span> {currentYear}</span> | Realizacja{' '}
					<a
						href="https://www.pawliszakdev.com/"
						target="_blank"
						rel="noopener"
					>
						pawliszakDev
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
