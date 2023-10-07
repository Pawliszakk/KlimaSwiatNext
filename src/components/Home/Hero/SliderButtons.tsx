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
		<div className={classes.box}>
			{buttons.map((btn, i) => (
				<button
					key={i}
					onClick={() => onSlideChange(i)}
					className={`${i === index ? classes.active : null}`}
				>
					{btn}
				</button>
			))}
		</div>
	);
};

export default SliderButtons;
