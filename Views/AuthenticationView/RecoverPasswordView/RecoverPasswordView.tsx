import { RecoverPassword } from '@/components/authenticationPages';
import { AuthLayout } from '@/layout';
import React from 'react';

const RecoverPasswordView = () => {
	return (
		<AuthLayout backgroundType='with-icons'>
			<RecoverPassword />
		</AuthLayout>
	);
};

export default RecoverPasswordView;
