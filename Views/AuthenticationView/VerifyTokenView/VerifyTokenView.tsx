'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const VerifyTokenView = () => {
	const VerifyToken = dynamic(() => import('@/components/authenticationPages/VerifyToken/VerifyToken'),
	{
		ssr: false
	})
	return (
		<VerifyToken />
	);
};

export default VerifyTokenView;
