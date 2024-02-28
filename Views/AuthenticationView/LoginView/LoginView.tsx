import { Login } from '@/components';
import { AuthWrapper } from '@/components/authenticationPages';
import React from 'react';

const LoginView = () => {
	return (
		<AuthWrapper backgroundType='without-icons'>
			<Login />;
		</AuthWrapper>
	);
};

export default LoginView;
