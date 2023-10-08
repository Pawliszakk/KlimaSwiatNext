import SpecialButton from '@/components/UI/Buttons/SpecialButton';
import classes from './OfferCard.module.css';
import SlideFromTop from '@/components/UI/Animations/SlideFromTop';

interface OfferCardProps {
	index: number;
	icon: JSX.Element;
	title: string;
	description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
	index,
	icon,
	title,
	description,
}) => {
	return (
		<SlideFromTop className={classes.card} index={index}>
			{icon}
			<h2 className={classes.title}>{title}</h2>
			<hr />
			<p className={classes.text}>{description}</p>
			<SpecialButton href="/#offer">Skontaktuj się</SpecialButton>
		</SlideFromTop>
	);
};

export default OfferCard;
