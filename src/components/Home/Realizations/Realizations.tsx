import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Realizations.module.css';
import SpecialButton from '@/components/UI/Buttons/SpecialButton';
import Link from 'next/link';
import SlideFromTop from '@/components/UI/Animations/SlideFromTop';
import Divider from '@/components/UI/Section/Divider';
const Realizations = () => {
	const images = [
		'/assets/montages/montaz1.jpg',
		'/assets/montages/montaz2.jpg',
		'/assets/montages/montaz3.jpg',
	];

	return (
		<section className={classes.realizations}>
			<SectionTitle blue>Realizacje</SectionTitle>
			<div className={classes.container}>
				{images.map((image, i) => (
					<SlideFromTop index={i} key={i}>
						<div>
							<Link href="/realizacje" className={classes.box}>
								<img
									src={image}
									alt="Zdjęcie wykonanego montażu systemu klimatyzacji"
								/>
								<div className={classes.reversal}>
									<SpecialButton href="/realizacje">
										Sprawdź więcej
									</SpecialButton>
								</div>
							</Link>
						</div>
					</SlideFromTop>
				))}
			</div>
			<SpecialButton className={classes.btn} href="/realizacje">
				Sprawdź Galerię Realizacji
			</SpecialButton>

			<Divider blue />
		</section>
	);
};

export default Realizations;
