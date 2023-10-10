import classes from './Header.module.css';
import Divider from '@/components/UI/Section/Divider';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.box}>
				<div className={classes.content}>
					<h1>Realizacje</h1>
					<p>
						Przedstawiamy naszą galerię montaży klimatyzacji. Jako Klima Śwait,
						dbamy o estetyczne i profesjonalne instalacje, które idealnie
						współgrają z aranżacją wnętrza. Przejdź niżej aby przyjrzeć się
						naszym projektom bliżej.
					</p>
				</div>
				<div className={classes.image}>
					<img
						src="/assets/ilustrations/technican.JPG"
						alt="Biało Niebieska Ilustracja technika klimatyzacji z kluczem na tle domu"
					/>
				</div>
			</div>

			<Divider blue />
		</header>
	);
};

export default Header;
