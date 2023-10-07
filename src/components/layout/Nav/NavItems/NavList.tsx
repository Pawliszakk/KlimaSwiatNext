import Link from 'next/link';
import classes from './NavList.module.css';

interface NavListProps {
	isOpen: boolean;
	onToggle: () => void;
}

type Item = { name: string; href: string };

const NavList: React.FC<NavListProps> = ({ isOpen, onToggle }) => {
	const navItems: Item[] = [
		{ name: 'O nas', href: '#about-us' },
		{ name: 'Oferta', href: '#offer' },
		{ name: 'Realizacje', href: '/realizacje' },
		{ name: 'Kontakt', href: '#contact' },
	];

	return (
		<div className={`${classes.list} ${isOpen ? classes.open : null}`}>
			<ul>
				{navItems.map((item, i) => (
					<li key={i} onClick={onToggle}>
						<Link href={item.href}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavList;
