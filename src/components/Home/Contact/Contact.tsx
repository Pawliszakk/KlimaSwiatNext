import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Contact.module.css';
import Divider from '@/components/UI/Section/Divider';
import { BsTelephone } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa6';
import { GiChainMail } from 'react-icons/gi';
import ContactOption from './ContactOption';

type ContactSingleOption = { icon: JSX.Element; title: string; text: string };

const Contact = () => {
	const contactData: ContactSingleOption[] = [
		{
			icon: <BsTelephone />,
			title: 'Zadzwoń do nas!',
			text: '515 463 226',
		},
		{
			icon: <FaFacebookF />,
			title: 'Sprawdź Facebooka!',
			text: 'Klima Świat Facebook',
		},
		{
			icon: <GiChainMail />,
			title: 'Wyslij do nas wiadomość!',
			text: 'pachlakamil9@gmail.com',
		},
	];

	return (
		<section id="contact" className={classes.contact}>
			<SectionTitle blue>Kontakt</SectionTitle>
			<div className={classes.box}>
				{contactData.map((option, i) => (
					<ContactOption
						key={i}
						icon={option.icon}
						title={option.title}
						text={option.text}
					/>
				))}
			</div>
			<div className={classes.ilustration}>
				<img
					src="/assets/ilustrations/contact.JPG"
					alt="Biało Niebieska Ilustracja dwójki ludzi którzy rozmawiają i piją napój z kubka"
				/>
			</div>
			<Divider darkBlue />
		</section>
	);
};

export default Contact;
