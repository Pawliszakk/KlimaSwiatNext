import classes from './Map.module.css';
import SectionTitle from '../../UI/Section/SectionTitle';
import SpecialButton from '../../UI/Buttons/SpecialButton';
import Divider from '@/components/UI/Section/Divider';

const Map = () => {
	return (
		<section className={classes.mapSection}>
			<SectionTitle>Obszar działalności</SectionTitle>

			<div className={classes.box}>
				<p>
					Nasza firma z dumą świadczy usługi na terenie całego województwa
					lubelskiego oraz okolicznych regionów. Jesteśmy gotowi sprostać
					wszelkim wyzwaniom zapewniając najwyższą jakość i profesjonalizm na
					tym terenie.
				</p>
				<div className={classes.map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1278077.4494457392!2d22.8807178!3d51.26980879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4723ad1204d54b2b%3A0x1017cadc5e4c040!2sLubelskie!5e0!3m2!1spl!2spl!4v1696961787657!5m2!1spl!2spl"
						width="600"
						height="450"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
				<SpecialButton className={classes.btn} href="/#contact">
					Umów się na wycenę
				</SpecialButton>
			</div>
			<Divider />
		</section>
	);
};

export default Map;
