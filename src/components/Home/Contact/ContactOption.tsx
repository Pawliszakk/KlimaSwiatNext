import classes from './ContactOption.module.css';

interface ContactOptionProps {
	icon: JSX.Element;
	title: string;
	text: string;
	href?: string;
}

const ContactOption: React.FC<ContactOptionProps> = ({
	icon,
	text,
	title,
	href,
}) => {
	return (
		<div className={classes.box}>
			<div className={classes.icon}>{icon}</div>
			<div className={classes.text}>
				<p>{title}</p>
				<h3>
					{href ? (
						<a href={href!} rel="noopener" target="_blank">
							{text}
						</a>
					) : (
						text
					)}
				</h3>
			</div>
		</div>
	);
};

export default ContactOption;
