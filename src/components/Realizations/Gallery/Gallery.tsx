import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Gallery.module.css';
import Divider from '@/components/UI/Section/Divider';
import Photo from './Photo/Photo';
import { useState, useEffect } from 'react';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import BackdropPhoto from './Gallery/BackdropPhoto';

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

	const previousImageHandler = () => {
		console.log('test222');
	};
	const nextImageHandler = () => {
		console.log('test2');
	};

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
					<BackdropPhoto
						onNext={nextImageHandler}
						onPrevious={previousImageHandler}
						src={`/assets/montages/montage${currentPhoto}.jpg`}
					/>
				</Backdrop>
			)}
			<Divider darkBlue />
		</section>
	);
};

export default Gallery;
