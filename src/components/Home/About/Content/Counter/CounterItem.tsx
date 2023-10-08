import classes from './CounterItem.module.css';

interface CounterItemProps {
	icon: JSX.Element;
	countTo: number;
	text: string;
}
const CounterItem: React.FC<CounterItemProps> = ({ icon, countTo, text }) => {
	return (
		<div className={classes.box}>
			{countTo}+<p>{text}</p>
		</div>
	);
};

export default CounterItem;
