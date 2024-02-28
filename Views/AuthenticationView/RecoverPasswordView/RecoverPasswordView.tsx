'use client';
import { EnterOtp, RecoverPassword } from '@/components/authenticationPages';
import { AuthLayout } from '@/layout';
import React, { useState } from 'react';

const RecoverPasswordView = () => {
	const [isEnterOtp, setIsEnterOtp] = useState<boolean>(false);
	return <AuthLayout backgroundType='with-icons'>{isEnterOtp ? <EnterOtp /> : <RecoverPassword setIsEnterOtp={setIsEnterOtp} />}</AuthLayout>;
};

export default RecoverPasswordView;
