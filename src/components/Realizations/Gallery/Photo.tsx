import classes from './Photo.module.css';
import { SlMagnifierAdd } from 'react-icons/sl';

interface PhotoProps {
	src: string;
	index: number;
	onClick: (index: number) => void;
}

const Photo: React.FC<PhotoProps> = ({ src, index, onClick }) => {
	return (
		<div className={classes.box} onClick={() => onClick(index)}>
			<img src={src} loading="lazy" alt="Wykonany montaż firmy Klima Świat" />
			<div className={classes.reversal}>
				<SlMagnifierAdd />
				<p>Kliknij, aby przybliżyć zdjęcie</p>
			</div>
		</div>
	);
};

export default Photo;
