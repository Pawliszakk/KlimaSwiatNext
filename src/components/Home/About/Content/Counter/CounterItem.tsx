import SlideFromTop from '@/components/UI/Animations/SlideFromTop';
import classes from './CounterItem.module.css';
interface CounterItemProps {
	children: React.ReactNode;
	icon: JSX.Element;
	text: string;
	index: number;
}
const CounterItem: React.FC<CounterItemProps> = ({
	icon,
	text,
	index,
	children,
}) => {
	return (
		<SlideFromTop index={index} className={classes.box}>
			<div>{icon}</div>
			{children}
			<p>{text}</p>
		</SlideFromTop>
	);
};

export default CounterItem;
