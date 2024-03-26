'use client';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import { useAuth } from '@/contexts/AuthContext';
import { paymentOptions, shippingOptions, timeOptions } from '@/utils/checkout';

export enum ShippingOptionsEnum {
	Immediate = 'Immediate',
	Scheduled = 'Scheduled',
}
export interface ShippingOption {
	label: string;
	type?: ShippingOptionsEnum;
	date?: string;
	time?: string;
}

export interface ScheduledShippingDetails {
	date?: string;
	time?: string;
}

const useCheckout = () => {
	const { theme, cartDetails } = useGlobalContext();
	const { isAuthenticated } = useAuth();
	const [showModal, setShowModal] = useState({ showLoginModal: false, showSignupModal: false });
	const [selectedPaymentOption, setSelectedPaymentOption] = useState<string>('1'); // change to active address
	const [shippingOption, setShippingOption] = useState<ShippingOption | undefined>(undefined);
	const [isGift, setIsGift] = useState<boolean>(false);
	const [activateProceedBtn, setActivateProceedBtn] = useState<boolean>(false);
	const [scheduledShippingDetails, setScheduledShippingDetails] = useState<ScheduledShippingDetails | undefined>(undefined);

	const getShippingOption = (type: string) => {
		console.log(scheduledShippingDetails);
		const option = shippingOptions.find((option) => option.type === type);
		if (type === 'Scheduled') {
			setShippingOption({ date: '', time: '', type: ShippingOptionsEnum.Scheduled, label: 'Select date and time' });
		} else {
			setShippingOption({
				date: option?.date,
				time: option?.time,
				type: ShippingOptionsEnum.Immediate,
				label: 'Immediately',
			});
		}
	};

	// a function to get the shipping time
	const onOptionChange = (option: string) => {
		setScheduledShippingDetails((prev) => ({ ...prev, time: option }));
	};

	// handle proceed btn
	const handleProceed = () => {};

	// Function to toggle the login modal
	const toggleLoginModal = (state: boolean) => {
		setShowModal((prevState) => ({ ...prevState, showLoginModal: state }));
	};

	// Function to toggle the signup modal
	const toggleSignupModal = (state: boolean) => {
		setShowModal((prevState) => ({ ...prevState, showSignupModal: state }));
	};

	// useEffect to set the shipping option after the scheduledShippingDetails has been set
	useEffect(() => {
		if (scheduledShippingDetails?.date && scheduledShippingDetails?.time) {
			setShippingOption({ date: scheduledShippingDetails.date, time: scheduledShippingDetails.time, type: ShippingOptionsEnum.Scheduled, label: 'Select date and time' });
		}
	}, [scheduledShippingDetails]);

	return {
		theme,
		cartDetails,
		isAuthenticated,
		showModal,
		selectedPaymentOption,
		shippingOption,
		isGift,
		activateProceedBtn,
		scheduledShippingDetails,
		getShippingOption,
		onOptionChange,
		handleProceed,
		toggleLoginModal,
		toggleSignupModal,
		setActivateProceedBtn,
		setIsGift,
		setScheduledShippingDetails,
		setSelectedPaymentOption,
		setShippingOption,
	};
};

export default useCheckout;
