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
				'Zajmujemy się kompleksowym projektowaniem, dobieraniem, montażem oraz testowaniem systemów klimatyzacji. Dodatkowo, oferujemy gwarancję na wszystkie nasze usługi.',
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
					/>
				))}
			</div>
		</section>
	);
};

export default Offer;
