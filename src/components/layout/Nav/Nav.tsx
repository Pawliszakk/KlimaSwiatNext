import classes from './Nav.module.css';
import NavList from './NavItems/NavList';
import NavLogo from './NavItems/NavLogo';

const Nav = () => {
	return (
		<header className={classes.header}>
			<nav>
				<NavLogo />
				<NavList />
			</nav>
		</header>
	);
};

export default Nav;
