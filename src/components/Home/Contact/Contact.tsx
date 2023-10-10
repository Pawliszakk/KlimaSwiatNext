import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Contact.module.css';
import Divider from '@/components/UI/Section/Divider';

const Contact = () => {
	return (
		<section id="contact" className={classes.contact}>
			<SectionTitle blue>Kontakt</SectionTitle>
			<Divider darkBlue />
		</section>
	);
};

export default Contact;
