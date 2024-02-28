'use client';
import { AuthWrapper, EnterOtp, RecoverPassword } from '@/components/authenticationPages';
import React, { useState } from 'react';

const RecoverPasswordView = () => {
	const [isEnterOtp, setIsEnterOtp] = useState<boolean>(false);
	return <AuthWrapper backgroundType='with-icons'>{isEnterOtp ? <EnterOtp /> : <RecoverPassword setIsEnterOtp={setIsEnterOtp} />}</AuthWrapper>;
};

export default RecoverPasswordView;
