import { useContext, useEffect, useState } from 'react';

import classes from './Nav.module.css';
import NavList from './NavItems/NavList';
import NavLogo from './NavItems/NavLogo';
import Hamburger from 'hamburger-react';
import ThemeIcon from '@/components/UI/Icons/ThemeIcon';

const Nav = () => {
	const [isOpen, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(true);

	const navToggleHandler = () => setOpen((prev) => !prev);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				document.body.style.overflow = isOpen ? 'hidden' : 'auto';
				setIsMobile(true);
			} else {
				document.body.style.overflow = 'auto';
				setIsMobile(false);
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
				<NavList
					onToggle={navToggleHandler}
					isOpen={isOpen}
					isMobile={isMobile}
				/>
				<div className={classes.icons}>
					<div className={classes.burger}>
						<Hamburger toggled={isOpen} toggle={navToggleHandler} />
					</div>
					{isMobile && <ThemeIcon />}
				</div>
			</nav>
		</header>
	);
};

export default Nav;
