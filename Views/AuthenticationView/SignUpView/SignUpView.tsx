'use client';
import React, { useState } from 'react';
import SuccessSvg from '@/components/svgs/jsx/SuccessSvg';
import FailedSvg from '@/components/svgs/jsx/FailedSvg';
import { SignUp } from '@/components';
import { RegistrationNotification } from '@/components/authenticationPages';
import AuthLayout from '@/layouts/AuthLayout/AuthLayout';

const SignUpView = () => {
	const [success, setSuccess] = useState<boolean>(true);
	const [isRegistrationRequested, setIsRegistrationRequested] = useState<boolean>(false);

	const notificationDetails = {
		success: {
			title: 'Account successfully created',
			description: 'Enjoy an amazing experience. Welcome to sippy where you don’t have to choose between ease and comfort ',
			buttonText: 'Continue Shopping',
			subTitle: 'Welcome to sippy!',
			notificationType: 'success',
			url: '/',
			setIsRegistrationRequested: setIsRegistrationRequested,
			notificationImage: <SuccessSvg />,
		},
		failed: {
			title: 'Error Creating Account',
			description: 'There was an error creating your sippy account. Please click the button below to restart the process.',
			buttonText: 'Try Again',
			subTitle: 'Sorry!',
			notificationType: 'failed',
			url: '/createAccount',
			setIsRegistrationRequested: setIsRegistrationRequested,
			notificationImage: <FailedSvg />,
		},
	};

	return (
		<>
			{isRegistrationRequested ? (
				<AuthLayout backgroundType='with-icons'>
					<RegistrationNotification details={success ? notificationDetails.success : notificationDetails.failed} />
				</AuthLayout>
			) : (
				<AuthLayout backgroundType='without-icons'>
					<SignUp setIsRegistrationRequested={setIsRegistrationRequested} />
				</AuthLayout>
			)}
		</>
	);
};

export default SignUpView;
