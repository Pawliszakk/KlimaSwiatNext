import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Offer.module.css';

type singleOffer = {
	icon: JSX.Element;
	title: string;
	description: string;
};

const Offer = () => {
	// const offerData: singleOffer[] = [{}];

	return (
		<section id="offer" className={classes.offer}>
			<SectionTitle>Oferta</SectionTitle>
			<div className={classes.box}></div>
		</section>
	);
};

export default Offer;
