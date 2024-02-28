import classes from './Contact.module.css';

import SectionTitle from '@/components/UI/Section/SectionTitle';
import Divider from '@/components/UI/Section/Divider';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa6';
import { IoMailOutline } from 'react-icons/io5';
import ContactOption from './ContactOption';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';

type ContactSingleOption = {
	icon: JSX.Element;
	title: string;
	text: string;
	href?: string;
};

const Contact = () => {
	const contactData: ContactSingleOption[] = [
		{
			icon: <BsTelephone />,
			title: 'Zadzwoń do nas!',
			text: '515 463 226',
			href: 'tel:515 463 226',
		},
		{
			icon: <FaFacebookF />,
			title: 'Sprawdź Facebooka!',
			text: 'Klima Świat Facebook',
			href: 'https://www.facebook.com/profile.php?id=61554684317544',
		},
		{
			icon: <IoMailOutline />,
			title: 'Wyslij do nas wiadomość!',
			text: 'biuro@klimaswiat.pl',
			href: 'mailto:biuro@klimaswiat.pl',
		},
	];

	return (
		<section id="contact" className={classes.contact}>
			<SectionTitle blue>Kontakt</SectionTitle>
			<div className={classes.box}>
				<SlideAnimation className={classes.options}>
					{contactData.map((option, i) => (
						<ContactOption
							key={i}
							icon={option.icon}
							title={option.title}
							text={option.text}
							href={option.href}
						/>
					))}
				</SlideAnimation>
				<SlideAnimation left className={classes.ilustration}>
					<img
						src={`/assets/ilustrations/contact-gray.JPG`}
						alt="Biało Niebieska Ilustracja dwójki ludzi którzy rozmawiają i piją napój z kubka"
						loading="lazy"
					/>
				</SlideAnimation>
			</div>
			<Divider darkBlue />
		</section>
	);
};

export default Contact;
