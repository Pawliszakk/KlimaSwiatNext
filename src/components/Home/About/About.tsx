import classes from './About.module.css';
import AboutText from './Content/AboutText';
import Logo from './Logo/Logo';

const About = () => {
	return (
		<section id="about" className={classes.about}>
			<Logo />
			<AboutText />
		</section>
	);
};

export default About;
