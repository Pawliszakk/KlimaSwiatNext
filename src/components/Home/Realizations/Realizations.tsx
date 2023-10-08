import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Realizations.module.css';

const Realizations = () => {
	const images = [
		'/assets/montages/montaz1.jpg',
		'/assets/montages/montaz2.jpg',
		'/assets/montages/montaz3.jpg',
	];

	return (
		<section className={classes.realizations}>
			<SectionTitle blue>Realizacje</SectionTitle>
			<div className={classes.box}>
				{images.map((image, i) => (
					<div className={classes.image} key={i}>
						<img
							src={image}
							alt="Zdjęcie wykonanego montażu systemu klimatyzacji"
						/>
						<div className={classes.more}></div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Realizations;
