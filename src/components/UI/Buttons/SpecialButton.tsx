import Link from 'next/link';
import { ReactNode } from 'react';
import classes from './SpecialButton.module.css';
interface SpecialButtonProps {
	children: ReactNode;
	href: string;
	empty?: boolean;
	className?: string;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({
	children,
	href,
	empty,
	className,
}) => {
	return (
		<Link
			className={`${classes.button} ${
				empty ? classes.empty : null
			} ${className}`}
			href={href}
		>
			{children}
		</Link>
	);
};

export default SpecialButton;
