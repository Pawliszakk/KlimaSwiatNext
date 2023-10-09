import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Offer.module.css';
import { GiGears } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { PiHandshakeFill } from 'react-icons/pi';
import { FaTemperatureArrowUp, FaWarehouse } from 'react-icons/fa6';
import { LuThermometerSnowflake } from 'react-icons/lu';
import OfferCard from './Card/OfferCard';
type singleOffer = {
	icon: JSX.Element;
	title: string;
	description: string;
	garage?: boolean;
};

const Offer = () => {
	const offerData: singleOffer[] = [
		{
			icon: <TbAirConditioning />,
			title: 'klimatyzacja',
			description:
				'Zajmujemy się kompleksowym projektowaniem, dobieraniem, montażem oraz testowaniem systemów klimatyzacji. Dodatkowo, oferujemy gwarancję na wszystkie nasze usługi.',
		},
		{
			icon: <GiGears />,
			title: 'serwis',
			description:
				'Aby zachować prawidłową pracę klimatyzacji, konieczne jest regularne serwisowanie. Zajmujemy się świadczeniem usług serwisowych, usuwaniem awarii oraz naprawami systemów klimatyzacji',
		},
		{
			icon: <PiHandshakeFill />,
			title: 'doradztwo',
			description:
				'Indywidualnie dobierzemy urządzenie które, będzie najlepsze do twoich potrzeb. Oferujemy darmową wycenę naszych usług oraz profesjonalne doradztwo, byś mógł podjąć najlepszą decyzję dla siebie..',
		},
		{
			icon: <LuThermometerSnowflake />,
			title: 'chłodnictwo',
			description:
				'Specjalizujemy się w kompleksowym projektowaniu, doborze, montażu i testowaniu systemów chłodzenia. Dodatkowo, zapewniamy gwarancję na wszystkie nasze usługi.',
		},
		{
			icon: <FaTemperatureArrowUp />,
			title: 'pompy ciepła',
			description:
				'Jesteśmy specjalistami w zakresie instalacji pomp ciepła i zapewniamy kompleksową obsługę, od projektu aż po montaż, aby zapewnić Ci efektywność energetyczną i komfort.',
		},
		{
			icon: <FaWarehouse />,
			title: 'garaże z płyty warstwowej',
			description:
				'Nasza firma zajmuję się również w kompleksowym projektowaniu, dostosowywaniu, montażu oraz testowaniu nowoczesnych garaży z płyt warstwowych. ',
			garage: true,
		},
	];

	return (
		<section id="offer" className={classes.offer}>
			<SectionTitle>Oferta</SectionTitle>
			<div className={classes.box}>
				{offerData.map((offer, i) => (
					<OfferCard
						key={i}
						index={i}
						title={offer.title}
						description={offer.description}
						icon={offer.icon}
						garage={offer.garage}
					/>
				))}
			</div>
			<div className={classes.divider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
						className={classes.shapeFill}
					></path>
				</svg>
			</div>
		</section>
	);
};

export default Offer;
