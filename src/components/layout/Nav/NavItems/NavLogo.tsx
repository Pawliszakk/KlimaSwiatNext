import Link from 'next/link';
import classes from './NavLogo.module.css';
import { useRouter } from 'next/router';

const NavLogo = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';
	
	return (
		<div className={classes.logo}>
			{isHomePage ? (
				<a href="#home">
					<img src="/assets/logos/logo-nav.jpg" alt="Logo Firmy Klima Świat" />
				</a>
			) : (
				<Link href="/">
					<img src="/assets/logos/logo-nav.jpg" alt="Logo Firmy Klima Świat" />
				</Link>
			)}
		</div>
	);
};

export default NavLogo;
