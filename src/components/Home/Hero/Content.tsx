import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './Content.module.css';

interface ContentProps {
	index: number;
}

const Content: React.FC<ContentProps> = ({ index }) => {
	const text = [
		'Klimatyzacja Pompy Ciepła Montaż Chłodnictwo Zamość',
		'Kontroluj temperaturę w swoim pomieszczeniu',
		'Stwórz przyjemne środowisko w domu dla siebie i swojej rodziny',
		'Profesjonalne doradztwo i kompleksowe rozwiązania dla każdego klienta',
	];

	return (
		<SlideAnimation left>
			<h1 className={classes.content}>{text[index]}</h1>
		</SlideAnimation>
	);
};

export default Content;
