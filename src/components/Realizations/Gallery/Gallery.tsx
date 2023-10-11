import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Gallery.module.css';
import Divider from '@/components/UI/Section/Divider';
import Photo from './Photo';
import { useState, useEffect } from 'react';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import BackdropPhoto from './BackdropPhoto';

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
		let photo = currentPhoto;
		if (currentPhoto === 0) {
			setCurrentPhoto(photosAmount);
			return;
		}
		photo!--;
		setCurrentPhoto(photo);
	};
	const nextImageHandler = () => {
		let photo = currentPhoto;
		if (currentPhoto === photosAmount) {
			setCurrentPhoto(0);
			return;
		}
		photo!++;
		setCurrentPhoto(photo);
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
				<>
					<Backdrop
						onClose={closeGalleryHandler}
						isVisible={isGallery}
					></Backdrop>
					<BackdropPhoto
						onNext={nextImageHandler}
						onPrevious={previousImageHandler}
						src={`/assets/montages/montage${currentPhoto}.jpg`}
						current={currentPhoto}
						amount={photosAmount}
					/>
				</>
			)}
			<Divider darkBlue />
		</section>
	);
};

export default Gallery;
