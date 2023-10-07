import Link from 'next/link';
import classes from './NavLogo.module.css';
import { useRouter } from 'next/router';

const NavLogo = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	const image = (
		<img src="/assets/logos/logo-nav.JPG" alt="Logo Firmy Klima Świat" />
	);
	return (
		<div className={classes.logo}>
			{isHomePage ? <a href="#home">{image}</a> : <Link href="/">{image}</Link>}
		</div>
	);
};

export default NavLogo;
