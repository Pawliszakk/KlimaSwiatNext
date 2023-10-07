import Link from 'next/link';
import { ReactNode } from 'react';
import classes from './SpecialButton.module.css';
interface SpecialButtonProps {
	children: ReactNode;
	href: string;
	empty?: boolean;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({
	children,
	href,
	empty,
}) => {
	return (
		<Link
			className={`${classes.button} ${empty ? classes.empty : null}`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default SpecialButton;
