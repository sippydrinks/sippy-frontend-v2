'use client';
import { AuthWrapper, NewPassword, RegistrationNotification } from '@/components';
import { NewPasswordFailed, NewPasswordSuccess } from '@/shared/svgs/jsx';
import React, { useState } from 'react';

const NewPasswordView = () => {
	const [success, setSuccess] = useState<boolean>(true);
	const [isNewPassword, setIsNewPassword] = useState<boolean>(false);

	const notificationDetails = {
		success: {
			title: 'Password changed',
			description: 'Your password has successfully been changed. Lets get you back to your cart.',
			buttonText: 'Continue Shopping',
			subTitle: 'Welcome back',
			notificationType: 'success',
			url: '/',
			setFunction: setIsNewPassword,
			notificationImage: <NewPasswordSuccess />,
		},
		failed: {
			title: 'Password recovery failed',
			description: 'Your password recovery has failed. Click the button below to retry.',
			buttonText: 'Try Again',
			subTitle: 'Sorry!',
			notificationType: 'failed',
			url: '/newPassword',
			setFunction: setIsNewPassword,
			notificationImage: <NewPasswordFailed />,
		},
	};
	return (
		<>
			<>
				{isNewPassword ? (
					<AuthWrapper backgroundType='with-icons'>
						<RegistrationNotification details={success ? notificationDetails.success : notificationDetails.failed} />
					</AuthWrapper>
				) : (
					<AuthWrapper backgroundType='without-icons'>
						<NewPassword setIsNewPassword={setIsNewPassword} />
					</AuthWrapper>
				)}
			</>
		</>
	);
};

export default NewPasswordView;
