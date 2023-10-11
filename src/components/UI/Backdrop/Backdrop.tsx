import Portal from '@/lib/portal';
import classes from './Backdrop.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface BackdropProps {
	isVisible: boolean;
	onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isVisible, onClose }) => {
	return (
		<AnimatePresence>
			{isVisible && (
				<Portal id="overlay-root">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.backdrop}
						onClick={onClose}
					></motion.div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default Backdrop;
