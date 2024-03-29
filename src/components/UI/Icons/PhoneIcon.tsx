import { useEffect, useState } from 'react';

import classes from './PhoneIcon.module.css';

import { motion, AnimatePresence } from 'framer-motion';
import Portal from '@/lib/portal';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const ScrollContact = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		window.scrollY >= 650 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isScrolled && (
				<Portal id="overlay-root">
					<motion.div
						className={classes.box}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						whileTap={{ scale: 0.5 }}
					>
						{isClient && (
							<a href="tel:515 463 226">
								<FaPhone />
								<span>Kontakt</span>
							</a>
						)}
					</motion.div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default ScrollContact;
