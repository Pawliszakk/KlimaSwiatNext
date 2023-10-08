import SlideFromBottom from '@/components/UI/Animations/SlideFromBottom';
import classes from './SliderButtons.module.css';

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
				</button>
			))}
		</SlideFromBottom>
	);
};

export default SliderButtons;
