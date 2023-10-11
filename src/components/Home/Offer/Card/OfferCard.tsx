import SpecialButton from '@/components/UI/Buttons/SpecialButton';
import classes from './OfferCard.module.css';
import SlideFromTop from '@/components/UI/Animations/SlideFromTop';

interface OfferCardProps {
	index: number;
	icon: JSX.Element;
	title: string;
	description: string;
	garage?: boolean;
}

const OfferCard: React.FC<OfferCardProps> = ({
	index,
	icon,
	title,
	description,
	garage,
}) => {
	return (
		<SlideFromTop className={classes.card} index={index}>
			{icon}
			<h2 className={` ${garage ? classes.garage : null}`}>{title}</h2>
			<hr />
			<p>{description}</p>
			<SpecialButton href="/#contact">Skontaktuj się</SpecialButton>
		</SlideFromTop>
	);
};

export default OfferCard;
