import classes from './NavLogo.module.css';

const NavLogo = () => {
	return (
		<div className={classes.logo}>
			<a href="#home">
				<img src="/assets/logos/logo-nav.jpg" alt="Logo Firmy Klima Świat" />
			</a>
		</div>
	);
};

export default NavLogo;
