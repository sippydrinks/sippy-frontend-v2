'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { TypeProp } from '@/interface/authentication';

const useValidateLogin = (type: AuthType) => {
	const router = useRouter();

	const loginSchema = yup.object({
		email: type === AuthType.EMAIL ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		password: yup.string().required('Password is required'),
		phone_number: type === AuthType.PHONE_NUMBER ? yup.string().required('Phone number is required') : yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = (data: any) => {
		console.log(data);
		router.push('/');
	};

	useEffect(() => {
		resetField(type === AuthType.EMAIL ? AuthType.PHONE_NUMBER : AuthType.EMAIL);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [type]);

	return {
		register,
		handleSubmit,
		errors,
		handleLogin,
		reset,
		type,
		// setType,
	};
};

export default useValidateLogin;
