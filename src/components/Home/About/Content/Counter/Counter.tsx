import { useState } from 'react';
import classes from './Counter.module.css';
import CountUp from 'react-countup';
import { BsFillCalendarCheckFill, BsTools } from 'react-icons/bs';
import { PiHandshakeBold } from 'react-icons/pi';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
	const [isCounterOn, setIsCounterOn] = useState(false);
	return (
		<div className={classes.counter}>
		</div>
	);
};

export default Counter;
