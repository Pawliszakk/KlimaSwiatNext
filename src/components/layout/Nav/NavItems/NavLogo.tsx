import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ThemeContext from '@/context/theme-context';

import classes from './NavLogo.module.css';

const NavLogo = () => {
	const router = useRouter();
	const isHomePage = router.pathname === '/';

	const { isBlue } = useContext(ThemeContext);

	const imageSrc = isBlue ? 'logo-nav.JPG' : 'logo-nav-gray.JPG';

	const image = (
		<img src={`/assets/logos/${imageSrc}`} alt="Logo Firmy Klima Świat" />
	);
	return (
		<div className={classes.logo}>
			{isHomePage ? <a href="#home">{image}</a> : <Link href="/">{image}</Link>}
		</div>
	);
};

export default NavLogo;
