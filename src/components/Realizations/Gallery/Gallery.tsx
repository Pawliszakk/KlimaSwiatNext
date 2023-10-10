import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Gallery.module.css';
import Divider from '@/components/UI/Section/Divider';

const Gallery = () => {
	return (
		<section className={classes.gallery}>
			<SectionTitle>Sprawdź naszą pracę!</SectionTitle>

			<Divider darkBlue />
		</section>
	);
};

export default Gallery;
