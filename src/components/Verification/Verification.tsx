'use client';
import { useSearchParams } from 'next/navigation';
import Unauthorized from '../Unauthorized/Unauthorized';
import { useVerifyToken } from './hook/useVerifyToken';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import AdminConfirm from '../SuperAdminConfirm';

const Verification = () => {
	const search = useSearchParams();
	const token = search.get('token');
	const { data, error, isFetching } = useVerifyToken(token)

	if (isFetching) {
		<Unauthorized label="Loading..." />
	}

	if ((!isFetching && !token) || !data?.success) {
		return <Unauthorized />;
	}

	if (error) {
		return  <Unauthorized label="Ooops... Something went wrong. Refresh to continue" />;
	}

	if (data?.success) { 
		return <AdminConfirm/>
	}	

	
};

const VerificationComponent = () => {
	const queryClient = new QueryClient();
	return (<RecoilRoot>
		<QueryClientProvider client={queryClient}>
			<Verification />
			</QueryClientProvider>
	</RecoilRoot>)
} 

export default VerificationComponent;
