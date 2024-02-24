import React, { ReactNode } from 'react';

export interface SignupForm {
	fullName: string;
	email: string;
	phone_number: string;
	password: string;
	get_to_know: string;
}

export interface AuthLayoutProps {
	children: ReactNode;
	backgroundType: string;
}
