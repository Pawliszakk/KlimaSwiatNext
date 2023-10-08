import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './AboutText.module.css';
import Counter from './Counter/Counter';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';

const AboutText = () => {
	return (
		<div className={classes.box}>
			<SlideAnimation left className={classes.container}>
				<SectionTitle>O nas</SectionTitle>
				<p className={classes.text}>
					Firma Klima Świat została założona aby projektować, dobierać oraz
					serwisować państwa urządzenia klimatyzacyjne. Dzięki wieloletniemu
					doświadczeniu, szkoleniom, służymy profesjonalną obsługą dla Państwa
					od projektu do wykonania powierzonego nam zadania.
				</p>

				<Counter />
			</SlideAnimation>
		</div>
	);
};

export default AboutText;
