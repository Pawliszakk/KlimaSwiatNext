import classes from './CounterItem.module.css';
interface CounterItemProps {
	children: React.ReactNode;
	icon: JSX.Element;
	text: string;
}
const CounterItem: React.FC<CounterItemProps> = ({ icon, text, children }) => {
	return (
		<div className={classes.box}>
			<div>{icon}</div>
			{children}
			<p>{text}</p>
		</div>
	);
};

export default CounterItem;
