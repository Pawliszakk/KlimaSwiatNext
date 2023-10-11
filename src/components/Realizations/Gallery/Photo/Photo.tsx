import SlideFromTop from '@/components/UI/Animations/SlideFromTop';
import classes from './Photo.module.css';

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
				<p>Siema</p>
			</div>
		</div>
	);
};

export default Photo;
