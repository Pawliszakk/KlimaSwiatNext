import Link from 'next/link';
import classes from './NavList.module.css';
import ThemeIcon from '@/components/UI/Icons/ThemeIcon';

interface NavListProps {
	isOpen: boolean;
	isMobile: boolean;
	onToggle: () => void;
}

const NavList: React.FC<NavListProps> = ({ isOpen, onToggle, isMobile }) => {
	const navItems = [
		{ name: 'O nas', href: '/#about' },
		{ name: 'Oferta', href: '/#offer' },
		{ name: 'Realizacje', href: '/realizacje' },
		{ name: 'Kontakt', href: '/#contact' },
	];
	return (
		<div className={`${classes.list} ${isOpen ? classes.open : null}`}>
			<ul>
				{navItems.map((item, i) => (
					<li key={i} onClick={onToggle}>
						<Link href={item.href}>{item.name}</Link>
					</li>
				))}
				{!isMobile && (
					<li>
						<ThemeIcon />
					</li>
				)}
			</ul>
		</div>
	);
};

export default NavList;
