'use client';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {
	setIsNewPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const useNewPassword = ({ setIsNewPassword }: Props) => {
	const schema = yup.object({
		password: yup.string().required('Password is required'),
		confirm_password: yup
			.string()
			.required('Confirm your password')
			.oneOf([yup.ref('password')], 'Passwords must match'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const submitForm = (data: any) => {
		setIsNewPassword(true);
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
