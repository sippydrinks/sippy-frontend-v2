import { LoginView } from '@/Views';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';

const LoginPage = () => {
	return (
		<AuthLayout backgroundType='without-icons'>
			<LoginView />
		</AuthLayout>
	);
};
export default LoginPage;
