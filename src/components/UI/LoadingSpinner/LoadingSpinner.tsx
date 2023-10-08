import Portal from '@/lib/portal';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
	return (
		<Portal id="overlay-root">
			<div className={classes.backdrop}>
				<div className={classes.spinner}></div>
				<p>Ładowanie strony...</p>
			</div>
		</Portal>
	);
};

export default LoadingSpinner;
