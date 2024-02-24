'use client';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TypeProp } from '@/interface/authentication';
import { hearAboutOptions } from '@/utils';

type Props = {
	setIsRegistrationRequested: React.Dispatch<React.SetStateAction<boolean>>;
};

const useValidateSignup = ({ setIsRegistrationRequested }: Props) => {
	const [type, setType] = useState<TypeProp>('email');
	// create a schema for the signup form using yup based on the active tab
	const signupSchema = yup.object().shape({
		email: type === 'email' ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		password: yup.string().required('Password is required'),
		phone_number: type === 'phone_number' ? yup.string().required('Phone number is required') : yup.string(),
		get_to_know: yup.string().required('This field is required'),
		fullName: yup.string().required('This field is required'),
	});

	// import the useForm hook from react-hook-form
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		resetField,
		setValue,
		clearErrors,
	} = useForm({
		resolver: yupResolver(signupSchema),
	});
	const [getToKnow, setGetToKnow] = useState<string>('');

	// a function to handle the change of the get to know select field
	const onOptionChange = (option: string) => {
		setGetToKnow(option);
		// clear the errors of the get to know field when the user selects an option
		clearErrors('get_to_know');
	};

	// a useeffect to register the get to know field
	useEffect(() => {
		register('get_to_know');
		// set the value of the get to know field to the state
		setValue('get_to_know', getToKnow);
	}, [register, getToKnow, setValue]);

	// a function to switch the tab and reset clear either the email or the phone field depending on the users choice
	const toggleTab = (selectType: TypeProp) => {
		resetField(type);
		setType(selectType);
	};

	// handle the signup form submission
	const handleSignup = async (data: any) => {
		console.log(data);
		setIsRegistrationRequested(true);
	};

	return {
		register,
		handleSubmit,
		errors,
		handleSignup,
		reset,
		hearAboutOptions,
		toggleTab,
		onOptionChange,
		type,
	};
};

export default useValidateSignup;
