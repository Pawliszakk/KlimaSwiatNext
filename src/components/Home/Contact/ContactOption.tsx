import classes from './ContactOption.module.css';

interface ContactOptionProps {
	icon: JSX.Element;
	title: string;
	text: string;
	link?: boolean;
}

const ContactOption: React.FC<ContactOptionProps> = ({
	icon,
	text,
	title,
	link,
}) => {
	return (
		<div className={classes.box}>
			<div className={classes.icon}>{icon}</div>
			<div className={classes.text}>
				<p>{title}</p>
				<h3>
					{link ? (
						<a
							href="https://www.facebook.com/profile.php?id=100082822172597"
							rel="noopener"
							target="_blank"
						>
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
