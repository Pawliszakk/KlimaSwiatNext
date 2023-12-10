import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';

import classes from './Header.module.css';
import Divider from '@/components/UI/Section/Divider';

const Header = () => {
	const { isBlue } = useContext(ThemeContext);

	const imageSrc = isBlue ? 'technican.JPG' : 'technican-gray.JPG';

	return (
		<header className={classes.header}>
			<div className={classes.box}>
				<div className={classes.content}>
					<h1>Realizacje</h1>
					<p>
						Przedstawiamy naszą galerię montaży klimatyzacji. Jako Klima Świat,
						dbamy o estetyczne i profesjonalne instalacje, które idealnie
						współgrają z aranżacją wnętrza. Przejdź niżej aby przyjrzeć się
						naszym projektom bliżej.
					</p>
				</div>
				<div className={classes.image}>
					<img
						src={`/assets/ilustrations/${imageSrc}`}
						alt="Biało Niebieska Ilustracja technika klimatyzacji z kluczem na tle domu"
					/>
				</div>
			</div>

			<Divider blue />
		</header>
	);
};

export default Header;
