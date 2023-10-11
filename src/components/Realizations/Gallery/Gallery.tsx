import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Gallery.module.css';
import Divider from '@/components/UI/Section/Divider';
import Photo from './Photo';
import { useState } from 'react';
import Backdrop from '@/components/UI/Backdrop/Backdrop';

const Gallery = () => {
	const [isGallery, setIsGallery] = useState(false);
	const [currentPhoto, setCurrentPhoto] = useState<number | null>(null);

	const photosAmount = 41;
	const links = [];

	for (let i = 0; i <= photosAmount; i++) {
		links.push(`/assets/montages/montage${i}.jpg`);
	}

	const showGalleryHandler = (index: number) => {
		setIsGallery(true);
		setCurrentPhoto(index);
	};
	const closeGalleryHandler = () => setIsGallery(false);

	return (
		<section className={classes.gallery}>
			<SectionTitle>Sprawdź naszą pracę!</SectionTitle>

			<div className={classes.box}>
				{links.map((link, i) => (
					<Photo onClick={showGalleryHandler} src={link} key={i} index={i} />
				))}
			</div>
			{isGallery && (
				<Backdrop onClose={closeGalleryHandler} isVisible={isGallery}>
					<img
						src={`/assets/montages/montage${currentPhoto}.jpg`}
						alt="Montaż Wykonany przez firmę klima świat"
					/>
				</Backdrop>
			)}
			<Divider darkBlue />
		</section>
	);
};

export default Gallery;
