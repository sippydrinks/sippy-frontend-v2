import { Button, InputField } from '@/shared';
import React, { useEffect, useState } from 'react';
import styles from './DeliveryDetailsForm.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextAreaField from '@/shared/TextArea/TextArea';
import { useAuth } from '@/contexts/AuthContext';
import { CheckoutLoginModal, CheckoutSignupModal } from '@/shared/modals';
import AllAddresses from './AllAddresses/AllAddresses';
import SelectedAddress from './SelectedAddress/SelectedAddress';
import FormFields from './FormFields/FormFields';
import { ShippingOption } from '../Checkout';

interface DeliveryDetailsFormProps {
	isGift: boolean;
	setShowSignupModal: (state: boolean) => void;
	setShowLoginModal: (state: boolean) => void;
	showSignupModal: boolean;
	showLoginModal: boolean;
	setActivateProceedBtn: React.Dispatch<React.SetStateAction<boolean>>;
	shippingOption: ShippingOption | undefined;
}

const DeliveryDetailsForm = ({ isGift, setShowLoginModal, setShowSignupModal, showLoginModal, showSignupModal, setActivateProceedBtn, shippingOption }: DeliveryDetailsFormProps) => {
	const schema = yup.object({
		email: yup.string().email('Invalid email').required('Email is required'),
		phone_number: yup.string().required('Phone number is required'),
		name: yup.string().required('Name is required'),
		address: yup.string().required('Address is required'),
		delivery_note: yup.string(),
		senders_email: isGift ? yup.string().email('Invalid email').required('Email is required') : yup.string(),
		senders_phone_number: isGift ? yup.string().required('Phone number is required') : yup.string(),
	});

	const closeSignupModal = () => {
		setShowSignupModal(false);
	};

	const closeLoginModal = () => {
		setShowLoginModal(false);
	};

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
	const watchAllFields = watch();
	const [selectedAddress, setSelectedAddress] = useState<any>({});
	const [showContactForm, setShowContactForm] = useState<boolean>(false);
	const [newAddresses, setNewAddresses] = useState<any[]>([]);
	const { isAuthenticated, addresses, lastAddress } = useAuth();
	const [loading, setLoading] = useState(false);

	// useEffect to set newAddresses to savedAddresses
	useEffect(() => {
		setSelectedAddress(lastAddress);
		setNewAddresses(addresses);
	}, [addresses, lastAddress]);

	// handle contact form, add new address as the first item in the newAddresses array and close the form
	const handleContactAddressForm = (data: any) => {
		setNewAddresses([{ ...data, id: newAddresses.length }, ...newAddresses]);
		setSelectedAddress({ ...data, id: newAddresses.length });
		setShowContactForm(false);
		reset();
	};

	// useEffect to watch all fields in other to activate the proceed button
	useEffect(() => {
		const isAddressValid = !!watchAllFields.address;
		const isNameValid = !!watchAllFields.name;
		const isPhoneNumberValid = !!watchAllFields.phone_number;
		const isEmailValid = !!watchAllFields.email;
		const isShippingOptionSelected = !!shippingOption ? (shippingOption?.type === 'Scheduled' ? !!shippingOption?.date && !!shippingOption?.time : true) : false;
		const isSendersEmailValid = !!watchAllFields.senders_email;
		const isSendersPhoneNumberValid = !!watchAllFields.senders_phone_number;

		// check if all fields are valid
		const isAllFieldsValid = isAddressValid && isNameValid && isPhoneNumberValid && isEmailValid && isShippingOptionSelected;

		// check if gift fields are valid
		const isGiftFieldsValid = isGift && isSendersEmailValid && isSendersPhoneNumberValid;

		// set the save details button to disabled if all fields are not valid
		setIsBtnDisabled(!isAllFieldsValid || (isGift && !isGiftFieldsValid));

		// set the proceed button to active if all fields are valid
		setActivateProceedBtn(isAllFieldsValid && (!isGift || isGiftFieldsValid));
	}, [watchAllFields, isGift, shippingOption, setActivateProceedBtn]);

	// function to handle the change button
	const handleChangeButton = () => {
		setSelectedAddress(null);
	};

	return (
		<div>
			<CheckoutLoginModal modalImage='' isOpen={showLoginModal} onClose={closeLoginModal} />
			<CheckoutSignupModal modalImage='' isOpen={showSignupModal} onClose={closeSignupModal} />
			<form onSubmit={handleSubmit(handleContactAddressForm)} className={styles.delivery_form}>
				{isAuthenticated ? (
					<div className={styles.saved_addresses}>
						{!showContactForm ? (
							<>
								{selectedAddress?.id ? (
									<>
										<SelectedAddress selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} handleChangeButton={handleChangeButton} />
									</>
								) : (
									<>
										{newAddresses.length > 0 ? (
											<div>
												<AllAddresses newAddresses={newAddresses} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} setShowContactForm={setShowContactForm} />
											</div>
										) : (
											<FormFields register={register} loading={loading} isGift={isGift} />
										)}
									</>
								)}
							</>
						) : (
							<>
								<FormFields register={register} loading={loading} isGift={isGift} />
							</>
						)}
					</div>
				) : (
					<>{!!selectedAddress ? <SelectedAddress selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} handleChangeButton={handleChangeButton} /> : <FormFields register={register} loading={loading} isGift={isGift} />}</>
				)}
				<TextAreaField rows={3} className={styles.input} inputClass={styles.delivery_note} placeholder='Delivery note (optional)' />
				<div className={`${styles.sender_container} ${!isGift && styles.hide_sender}`}>
					<h3>My details</h3>
					<div className={` ${styles.nameAndNumber}`}>
						<InputField type='email' className={styles.input} placeholder='My email' register={register('senders_email')} />

						<InputField
							className={styles.input}
							customPrefix={
								<p className={styles.prefix_container}>
									+234 <span className={styles.prefix_divider}></span>
								</p>
							}
							type='number'
							placeholder={`My phone number`}
							register={register('senders_phone_number')}
						/>
					</div>
				</div>
				<div className={styles.save_default_btn_container}>
					<Button type='submit' disabled={isBtnDisabled} buttonType='transparent' className={`${styles.applyDiscount_btn} ${!isBtnDisabled && styles.applyDiscount_btnActive} ${(!isAuthenticated || !showContactForm) && styles.hide}`}>
						<h4>Save Details</h4>
					</Button>
					{addresses.length > 0 && showContactForm && (
						<Button onClick={() => setShowContactForm(false)} type='submit' buttonType='transparent' className={`${styles.use_default_btn} $ ${!isAuthenticated && styles.hide}`}>
							<h4>use default address</h4>
						</Button>
					)}
				</div>
			</form>
		</div>
	);
};

export default DeliveryDetailsForm;
