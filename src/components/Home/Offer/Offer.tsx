import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './Offer.module.css';
import { GiGears } from 'react-icons/gi';
import { TbAirConditioning } from 'react-icons/tb';
import { PiHandshakeFill } from 'react-icons/pi';
import { FaTemperatureArrowUp, FaWarehouse } from 'react-icons/fa6';
import { LuThermometerSnowflake } from 'react-icons/lu';
import { FaPlugCircleBolt } from 'react-icons/fa6';
import { GiSolarPower } from 'react-icons/gi';
import OfferCard from './Card/OfferCard';
import Divider from '@/components/UI/Section/Divider';
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
			icon: <FaPlugCircleBolt />,
			title: 'Instalacje elektryczne',
			description:
				'Zajmujemy się również kompleksowo instalacjami elektrycznymi. Nasza oferta obejmuje pełen zakres usług, począwszy od projektu, aż po finalne wykonanie instalacji.',
		},

		{
			icon: <GiSolarPower />,
			title: 'Fotowoltaika',
			description:
				'Nasza ekipa zajmuje się również kompleksowymi instalacjami fotowoltaicznymi, oferując pełen zakres usług od projektu do finalnego wykonania. ',
		},
		{
			icon: <PiHandshakeFill />,
			title: 'doradztwo',
			description:
				'Indywidualnie dobierzemy urządzenie które, będzie najlepsze do twoich potrzeb. Oferujemy darmową wycenę naszych usług oraz profesjonalne doradztwo, byś mógł podjąć najlepszą decyzję dla siebie..',
		},
		{
			icon: <FaWarehouse />,
			title: 'garaże z płyty warstwowej',
			description:
				'Nasza firma zajmuję się również w kompleksowym projektowaniem, dostosowywaniem, montażem oraz testowaniem nowoczesnych garaży z płyt warstwowych. ',
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
			<Divider />
		</section>
	);
};

export default Offer;
