'use client';
import React, { useEffect, useState } from 'react';
import RegistrationNotification from '@/components/authenticationPages/Notifications/RegistrationNotification';
import SuccessSvg from '@/components/svgs/jsx/SuccessSvg';
import FailedSvg from '@/components/svgs/jsx/FailedSvg';
import { SignUp } from '@/components';

const SignUpView = () => {
	const [success, setSuccess] = useState<boolean>(false);
	const [isRegistrationRequested, setIsRegistrationRequested] = useState<boolean>(false);

	return (
		<>
			{isRegistrationRequested ? (
				<div>
					{success ? (
						<RegistrationNotification
							notificationImage={<SuccessSvg />}
							title='Account successfully created'
							description='Enjoy an amazing experience. Welcome to sippy where you don’t have to choose between ease and comfort '
							buttonText='Continue Shopping'
							subTitle='Welcome to sippy!'
							notificationType='success'
							url='/'
							setIsRegistrationRequested={setIsRegistrationRequested}
							// icon={<SuccessEmoji />}
						/>
					) : (
						<RegistrationNotification
							notificationImage={<FailedSvg />}
							title='Error Creating Account'
							description='There was an error creating your sippy account. Please click the button below to restart the process.'
							buttonText='Try Again'
							subTitle='Sorry!'
							notificationType='failed'
							url='/createAccount'
							setIsRegistrationRequested={setIsRegistrationRequested}
							// icon={<FailedEmoji />}
						/>
					)}
				</div>
			) : (
				<SignUp setIsRegistrationRequested={setIsRegistrationRequested} />
			)}
		</>
	);
};

export default SignUpView;
