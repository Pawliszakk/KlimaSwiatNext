import classes from './Header.module.css';
import Divider from '@/components/UI/Section/Divider';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={classes.box}>
				<div className={classes.content}>
					<h1>Realizacje</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non
						illum minima ratione velit laboriosam ab nesciunt possimus
						perferendis laborum? Laboriosam sunt quos amet, perspiciatis
						voluptate natus accusantium consequatur recusandae.
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
