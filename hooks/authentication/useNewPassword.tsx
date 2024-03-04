'use client';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

const useNewPassword = () => {
	const router = useRouter();

	const loginSchema = yup.object({
		password: yup.string().email('Invalid email address').required('Email is required'),
		confirm_password: yup.string().required('Phone number is required'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginSchema),
	});

	const submitForm = (data: any) => {
		console.log(data);
		// router.push('/');
	};

	return {
		register,
		handleSubmit,
		errors,
		submitForm,
	};
};

export default useNewPassword;
