import Portal from '@/lib/portal';
import classes from './LoadingSpinner.module.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
const LoadingSpinner = () => {
	const [isSpinner, setIsSpinner] = useState(true);

	useEffect(() => {
		const deleteSpinner = setTimeout(() => setIsSpinner(false), 1500);
		return () => clearTimeout(deleteSpinner);
	}, []);

	return (
		<AnimatePresence>
			{isSpinner && (
				<Portal id="overlay-root">
					<div className={classes.backdrop}>
						<div className={classes.spinner}></div>
						<p>Ładowanie strony...</p>
					</div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default LoadingSpinner;
