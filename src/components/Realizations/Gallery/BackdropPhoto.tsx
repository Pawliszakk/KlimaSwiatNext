import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import classes from './BackdropPhoto.module.css';
import { motion } from 'framer-motion';
import Portal from '@/lib/portal';

interface BackdropPhotoProps {
	src: string;
	onNext: () => void;
	onPrevious: () => void;
	current: number | null;
	amount: number;
}

const BackdropPhoto: React.FC<BackdropPhotoProps> = ({
	src,
	onNext,
	onPrevious,
	amount,
	current,
}) => {
	return (
		<Portal id="overlay-root">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className={classes.box}
			>
				<div className={classes.image}>
					<img src={src} alt="Wykonany montaż przez firmę klima świat" />
				</div>
				<div className={classes.buttons}>
					<motion.button
						whileTap={{ scale: 0.7 }}
						whileHover={{
							scale: 1.05,
							color: 'var(--main-color-lighter)',
						}}
						onClick={onPrevious}
					>
						<BsFillArrowLeftSquareFill />
					</motion.button>
					<p>
						{current! + 1}/{amount + 1}
					</p>
					<motion.button
						whileTap={{ scale: 0.7 }}
						whileHover={{
							scale: 1.05,
							color: 'var(--main-color-lighter)',
						}}
						onClick={onNext}
					>
						<BsFillArrowRightSquareFill />
					</motion.button>
				</div>
			</motion.div>
		</Portal>
	);
};

export default BackdropPhoto;
