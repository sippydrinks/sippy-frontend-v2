import { LoginView } from '@/Views';
import { AuthLayout } from '@/layout';

const LoginPage = () => {
	return (
		<AuthLayout backgroundType='without-icons'>
			<LoginView />
		</AuthLayout>
	);
};
export default LoginPage;
