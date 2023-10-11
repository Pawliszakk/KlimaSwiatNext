import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import classes from './BackdropPhoto.module.css';

interface BackdropPhotoProps {
	src: string;
	onNext: () => void;
	onPrevious: () => void;
}

const BackdropPhoto: React.FC<BackdropPhotoProps> = ({
	src,
	onNext,
	onPrevious,
}) => {
	return (
		<div className={classes.box}>
			<div className={classes.image}>
				<img src={src} alt="Wykonany montaż przez firmę klima świat" />
			</div>
			<div className={classes.buttons}>
				<button onClick={onPrevious}>
					<BsFillArrowLeftSquareFill />
				</button>
				<button onClick={onNext}>
					<BsFillArrowRightSquareFill />
				</button>
			</div>
		</div>
	);
};

export default BackdropPhoto;
