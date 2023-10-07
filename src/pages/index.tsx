import LoadingSpinner from '@/components/UI/Loading/LoadingSpinner';
import dynamic from 'next/dynamic';

const Home = dynamic(() => import('@/components/Home/Home'), {
	loading: () => <LoadingSpinner />,
});

export default function HomePage() {
	return <Home />;
}
