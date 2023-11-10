import { useEffect, useState } from 'react';
import classes from './Nav.module.css';
import NavList from './NavItems/NavList';
import NavLogo from './NavItems/NavLogo';
import Hamburger from 'hamburger-react';

const Nav = () => {
	const [isOpen, setOpen] = useState(false);

	const navToggleHandler = () => setOpen((prev) => !prev);

	useEffect(() => {
		isOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'auto');
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
