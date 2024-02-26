'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { TypeProp } from '@/interface/authentication';

const useRecoverPassword = () => {
	const router = useRouter();
	const [type, setType] = useState<TypeProp>('email');

	const loginSchema = yup.object({
		email: type === 'email' ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		password: yup.string().required('Password is required'),
		phone_number: type === 'phone_number' ? yup.string().required('Phone number is required') : yup.string(),
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

	const toggleTab = (selectType: TypeProp) => {
		resetField(type);
		setType(selectType);
	};

	return {
		register,
		handleSubmit,
		errors,
		handleLogin,

		reset,
		toggleTab,
		type,
	};
};

export default useRecoverPassword;
