import { useEffect, useRef, useState } from 'react';

import CountUp from 'react-countup';
import classes from './Counter.module.css';
import { BsFillCalendarCheckFill, BsTools } from 'react-icons/bs';
import { PiHandshakeBold } from 'react-icons/pi';
import CounterItem from './CounterItem';

type SingleCounterItem = {
	icon: JSX.Element;
	start: number;
	end: number;
	text: string;
	suffix: string;
};
const counterData: SingleCounterItem[] = [
	{
		icon: <BsFillCalendarCheckFill />,
		start: 0,
		end: 10,
		text: 'Lat Doświadczenia',
		suffix: '+',
	},
	{
		icon: <BsTools />,
		start: 0,
		end: 125,
		text: 'Wykonanych montaży',
		suffix: '+',
	},
	{
		icon: <PiHandshakeBold />,
		start: 0,
		end: 100,
		text: 'Zadowolonych Klientów',
		suffix: '%',
	},
];

const Counter = () => {
	const [isCounterOn, setIsCounterOn] = useState(false);

	const counterRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsCounterOn(entry.isIntersecting);
		});
		if (counterRef.current) {
			observer.observe(counterRef.current);
		}
	}, []);

	return (
		<div className={classes.counter} ref={counterRef}>
			{counterData.map((item, i) => (
				<CounterItem key={i} icon={item.icon} text={item.text}>
					{isCounterOn && (
						<CountUp
							start={item.start}
							end={item.end}
							duration={6}
							delay={0}
							suffix={item.suffix}
						/>
					)}
				</CounterItem>
			))}
		</div>
	);
};

export default Counter;
