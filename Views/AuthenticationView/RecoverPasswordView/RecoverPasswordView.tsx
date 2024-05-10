'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const RecoverPasswordView = () => {
	const RecoverPassword = dynamic(() => import('@/components/authenticationPages/RecoverPassword/RecoverPassword'),
	{
		ssr: false
	})
	return (
		<RecoverPassword />
	);
};

export default RecoverPasswordView;
