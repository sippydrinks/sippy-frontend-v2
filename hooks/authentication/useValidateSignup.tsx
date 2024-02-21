'use client';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const hearAboutOptions = [
	{ value: 'social media', label: 'Social Media' },
	{ value: 'friend', label: 'Friend' },
	{ value: 'fliers', label: 'Fliers' },
	{ value: 'instagram', label: 'Instagram' },
	{ value: 'twitter', label: 'Twitter' },
	{ value: 'google search', label: 'Google Search' },
	{ value: 'facebook/instagram ads', label: 'Facebook/Instagram Ads' },
	{ value: 'at an event', label: 'At an Event' },
	{ value: 'referral', label: 'Referral' },
	{ value: 'word of mouth', label: 'Word of mouth' },
];

const useValidateSignup = () => {
	const [activeTab, setActiveTab] = useState<number>(1);
	// create a schema for the signup form using yup based on the active tab
	const signupSchema = yup.object().shape({
		fullName: yup.string().required('Full name is required'),
		email: activeTab === 1 ? yup.string().email('Invalid email address').required('Email is required') : yup.string(),
		phone_number:
			activeTab === 2
				? yup
						.string()
						.required('Phone number is required')
						.matches(
							/^[0-9]{10}$/, // Assuming a 10-digit phone number, adjust as needed
							'Invalid phone number. Please enter a valid 10-digit phone number.'
						)
				: yup.string(),
		password: yup
			.string()
			.required('Password is required.')
			.min(8, 'Password is too short - should be 8 chars minimum.')
			.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/, 'Password must contain a small letter, a capital letter, a number, and a special character.'),
		get_to_know: yup.string().required('This field is required'),
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

	// handle the signup form submission
	const handleSignup = (data: any) => {
		console.log({ ...data, get_to_know: getToKnow });
	};

	// a function to switch the tab and reset clear either the email or the phone field depending on the users choice
	const toggleTab = (tabIndex: number) => {
		setActiveTab(tabIndex);
		if (tabIndex === 1) {
			resetField('phone_number');
		} else if (tabIndex === 2) {
			resetField('email');
		}
	};

	return {
		register,
		handleSubmit,
		errors,
		handleSignup,
		reset,
		activeTab,
		setActiveTab,
		hearAboutOptions,
		toggleTab,
		onOptionChange,
	};
};

export default useValidateSignup;
