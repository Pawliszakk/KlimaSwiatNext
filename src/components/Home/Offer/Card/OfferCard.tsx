import SpecialButton from '@/components/UI/Buttons/SpecialButton';
import classes from './OfferCard.module.css';

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
		<div className={classes.card}>
			{icon}
			<h2 className={classes.title}>{title}</h2>
			<hr />
			<p className={classes.text}>{description}</p>
			<SpecialButton href="/#offer">Skontaktuj się</SpecialButton>
		</div>
	);
};

export default OfferCard;
