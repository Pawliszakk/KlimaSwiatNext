import classes from './SliderButtons.module.css';
import SlideFromBottom from '@/components/UI/Animations/SlideFromBottom';

interface SliderButtonsProps {
	index: number;
	onSlideChange: (slide: number) => void;
}

const SliderButtons: React.FC<SliderButtonsProps> = ({
	index,
	onSlideChange,
}) => {
	const buttons = ['1', '2', '3', '4'];

	return (
		<SlideFromBottom className={classes.box}>
			{buttons.map((btn, i) => (
				<button
					key={i}
					onClick={() => onSlideChange(i)}
					className={`${i === index ? classes.active : null}`}
				>
					<span>{`Slajd Numer ${btn}`}</span>
				</button>
			))}
		</SlideFromBottom>
	);
};

export default SliderButtons;
