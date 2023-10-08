import classes from './SectionTitle.module.css';

interface SectionTitleProps {
	children: string;
	className?: string;
	blue?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	children,
	className,
	blue,
}) => {
	return (
		<h2
			className={`${classes.title} ${className} ${blue ? classes.blue : null}`}
		>
			{children}
		</h2>
	);
};

export default SectionTitle;
