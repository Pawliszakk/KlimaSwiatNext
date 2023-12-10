import { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './Nav.module.css';
import NavList from './NavItems/NavList';
import NavLogo from './NavItems/NavLogo';
import Hamburger from 'hamburger-react';
import ThemeContext from '@/context/theme-context';

const Nav = () => {
	const [isOpen, setOpen] = useState(false);

	const navToggleHandler = () => setOpen((prev) => !prev);

	const themeCtx = useContext(ThemeContext);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				document.body.style.overflow = isOpen ? 'hidden' : 'auto';
			} else {
				document.body.style.overflow = 'auto';
			}
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen, navToggleHandler]);

	return (
		<header className={classes.header}>
			<nav>
				<NavLogo />
				<NavList onToggle={navToggleHandler} isOpen={isOpen} />
				<div className={classes.icons}>
					<div className={classes.burger}>
						<Hamburger toggled={isOpen} toggle={navToggleHandler} />
					</div>
					<motion.div
						whileTap={{ scale: 0.5 }}
						className={classes.themeIcon}
						onClick={themeCtx.changeTheme}
					></motion.div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;
