import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import dynamic from 'next/dynamic';

const Realizations = dynamic(
	() => import('@/components/Realizations/Realizations'),
	{
		loading: () => <LoadingSpinner />,
	}
);

const realizationsPage = () => {
	return <Realizations />;
};

export default realizationsPage;
