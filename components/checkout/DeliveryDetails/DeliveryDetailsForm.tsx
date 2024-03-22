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
	setShowSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
	setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
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

	// watch email field to check if the user has an account with the email provided
	const email = watch('email');

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
		console.log(errors);
		if (watchAllFields.address && watchAllFields.name && watchAllFields.phone_number && watchAllFields.email && !!shippingOption) {
			if (isGift) {
				if (watchAllFields.senders_email && watchAllFields.senders_phone_number) {
					setIsBtnDisabled(false);
					setActivateProceedBtn(true);
				} else {
					setIsBtnDisabled(true);
					setActivateProceedBtn(false);
				}
			} else {
				setIsBtnDisabled(false);
				setActivateProceedBtn(true);
			}
		} else {
			setIsBtnDisabled(true);
		}
	}, [watchAllFields, isGift, shippingOption]);

	// function to check if the user has an account with the email provided
	const checkUser = async (email: string) => {
		setLoading(true);
		try {
			const resp = await fetch(`/api/checkEmail?email=${email}`);
			if (!resp.ok) {
				setShowSignupModal(true);
			}
			if (resp.ok) {
				setShowLoginModal(true);
			}
			const data = await resp.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		} finally {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	};

	// useEffect to check if the user has an account with the email provided
	// useEffect(() => {
	// 	if (email && !isAuthenticated) {
	// 		checkUser(email);
	// 	}
	// }, [email, isAuthenticated]);

	// function to handle the change button
	const handleChangeButton = () => {
		if (addresses.length > 0) {
			setSelectedAddress(null);
		} else {
			setSelectedAddress(null);
		}
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
											<FormFields register={register} loading={loading} />
										)}
									</>
								)}
							</>
						) : (
							<>
								<FormFields register={register} loading={loading} />
							</>
						)}
					</div>
				) : (
					<>{!!selectedAddress ? <SelectedAddress selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} handleChangeButton={handleChangeButton} /> : <FormFields register={register} loading={loading} />}</>
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
				<Button type='submit' disabled={isBtnDisabled} buttonType='transparent' className={`${styles.applyDiscount_btn} ${!isBtnDisabled && styles.applyDiscount_btnActive} ${!isAuthenticated && styles.hide}`}>
					<h4>Save Details</h4>
				</Button>
			</form>
		</div>
	);
};

export default DeliveryDetailsForm;
