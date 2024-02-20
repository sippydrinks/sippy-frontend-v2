'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

const useValidateLogin = () => {
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<number>(1);

	const loginSchema = yup.object({
		email: activeTab === 1 ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		password: yup.string().required('Password is required'),
		phone_number: activeTab === 2 ? yup.string().required('Phone number is required') : yup.string(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const handleLogin = (data: any) => {
		console.log(data);
		router.push('/');
	};

	const toggleTab = (tabIndex: number) => {
		setActiveTab(tabIndex);
		reset();
	};

	return {
		register,
		handleSubmit,
		errors,
		handleLogin,
		setActiveTab,
		activeTab,
		reset,
		toggleTab,
	};
};

export default useValidateLogin;
