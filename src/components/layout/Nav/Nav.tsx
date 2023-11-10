import { useEffect, useState } from 'react';

import classes from './Nav.module.css';
import NavList from './NavItems/NavList';
import NavLogo from './NavItems/NavLogo';
import Hamburger from 'hamburger-react';

const Nav = () => {
	const [isOpen, setOpen] = useState(false);

	const navToggleHandler = () => setOpen((prev) => !prev);

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
				<div className={classes.burger}>
					<Hamburger toggled={isOpen} toggle={navToggleHandler} />
				</div>
			</nav>
		</header>
	);
};

export default Nav;
