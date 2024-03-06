'use client';
import { RegistrationNotification, SignUp } from '@/components';
import { FailedSvg, SuccessSvg } from '@/shared/svgs/jsx';
import React, { useState } from 'react';

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
			setFunction: setIsRegistrationRequested,
			notificationImage: <SuccessSvg />,
		},
		failed: {
			title: 'Error Creating Account',
			description: 'There was an error creating your sippy account. Please click the button below to restart the process.',
			buttonText: 'Try Again',
			subTitle: 'Sorry!',
			notificationType: 'failed',
			url: '/createAccount',
			setFunction: setIsRegistrationRequested,
			notificationImage: <FailedSvg />,
		},
	};

	return (
		<>
			{isRegistrationRequested ? (
				<>
					<RegistrationNotification details={success ? notificationDetails.success : notificationDetails.failed} />
				</>
			) : (
				<>
					<SignUp setIsRegistrationRequested={setIsRegistrationRequested} />
				</>
			)}
		</>
	);
};

export default SignUpView;
