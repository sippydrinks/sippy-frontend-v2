'use client';
import { EnterOtp, RecoverPassword } from '@/components/authenticationPages';
import React, { useState } from 'react';

const RecoverPasswordView = () => {
	const [isEnterOtp, setIsEnterOtp] = useState<boolean>(false);
	return <>{isEnterOtp ? <EnterOtp /> : <RecoverPassword setIsEnterOtp={setIsEnterOtp} />}</>;
};

export default RecoverPasswordView;
