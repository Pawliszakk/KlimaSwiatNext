import Portal from '@/lib/portal';
import classes from './Backdrop.module.css';
import { AnimatePresence, motion } from 'framer-motion';

interface BackdropProps {
	children: React.ReactNode;
	isVisible: boolean;
	onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({
	children,
	isVisible,
	onClose,
}) => {
	return (
		<Portal id="overlay-root">
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className={classes.backdrop}
						onClick={onClose}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default Backdrop;
