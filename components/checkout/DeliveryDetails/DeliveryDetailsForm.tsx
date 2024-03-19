import { Button, InputField, Radio } from '@/shared';
import React, { useEffect, useState } from 'react';
import styles from './DeliveryDetailsForm.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { set } from 'nprogress';
import TextAreaField from '@/shared/TextArea/TextArea';

interface DeliveryDetailsFormProps {
	isGift: boolean;
	savedAddresses: any[];
}
const DeliveryDetailsForm = ({ isGift, savedAddresses }: DeliveryDetailsFormProps) => {
	const schema = yup.object({
		email: yup.string().email('Invalid email').required('Email is required'),
		phone_number: yup.string().required('Phone number is required'),
		name: yup.string().required('Name is required'),
		address: yup.string().required('Address is required'),
		delivery_note: yup.string(),
		senders_email: isGift ? yup.string().email('Invalid email').required('Email is required') : yup.string(),
		senders_phone_number: isGift ? yup.string().required('Phone number is required') : yup.string(),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>(true);
	const watchAllFields = watch();
	const [selectedAddress, setSelectedAddress] = useState<any>({});
	const [showContactForm, setShowContactForm] = useState<boolean>(false);
	const [newAddresses, setNewAddresses] = useState<any[]>([]);

	// useEffect to set newAddresses to savedAddresses
	useEffect(() => {
		setNewAddresses(savedAddresses);
	}, [savedAddresses]);

	// handle contact form, add new address as the first item in the newAddresses array and close the form
	const handleContactAddressForm = (data: any) => {
		console.log(data);
		setNewAddresses([{ ...data, id: newAddresses.length }, ...newAddresses]);
		setShowContactForm(false);
		reset();
	};

	// useEffect to watch all fields in other to activate the submit button
	useEffect(() => {
		if (watchAllFields.address && watchAllFields.name && watchAllFields.phone_number && watchAllFields.email) {
			if (isGift) {
				if (watchAllFields.senders_email && watchAllFields.senders_phone_number) {
					setIsBtnDisabled(false);
				} else {
					setIsBtnDisabled(true);
				}
			} else {
				setIsBtnDisabled(false);
			}
		} else {
			setIsBtnDisabled(true);
		}
	}, [watchAllFields, isGift]);

	return (
		<form onSubmit={handleSubmit(handleContactAddressForm)} className={styles.delivery_form}>
			{!showContactForm && savedAddresses.length > 0 ? (
				<div className={styles.saved_addresses}>
					{selectedAddress?.id ? (
						<>
							<div className={styles.single_address}>
								<div className={styles.address_details}>
									<h3>{selectedAddress.name}</h3>
									<div className={styles.email_phone_container}>
										<span>{selectedAddress.email}</span>
										<span className={styles.dots} />
										<span>{selectedAddress.phone_number}</span>
									</div>
									<p>{selectedAddress.address}</p>
								</div>
								<div className={styles.add_new_address}>
									<p onClick={() => setSelectedAddress({})}>Change</p>
								</div>
							</div>
						</>
					) : (
						<>
							{newAddresses.map((address, index) => (
								<div key={index} className={styles.address}>
									<Radio checked={selectedAddress?.id === address.id} onChange={() => setSelectedAddress(address)} />
									<div className={styles.address_details}>
										<h3>{address.name}</h3>
										<span className={styles.dots} />
										<p>{address.address}</p>
										<span className={styles.dots} />
										<p>{address.phone_number}</p>
									</div>
								</div>
							))}
						</>
					)}
					<div data-visible={!selectedAddress?.id} className={styles.add_new_address}>
						<p onClick={() => setShowContactForm(true)}>Add a new address</p>
					</div>
				</div>
			) : (
				<>
					<div className={styles.nameAndNumber}>
						<InputField className={styles.input} placeholder='My email' register={register('email')} />
						<InputField
							className={styles.input}
							customPrefix={
								<p className={styles.prefix_container}>
									+234 <span className={styles.prefix_divider}></span>
								</p>
							}
							type='number'
							placeholder={`Receiver's phone number`}
							register={register('phone_number')}
						/>
					</div>
					<InputField className={styles.input} placeholder='My full name' register={register('name')} />
					<InputField className={styles.input} placeholder='My address' register={register('address')} />
				</>
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
			<Button type='submit' disabled={isBtnDisabled} buttonType='transparent' className={`${styles.applyDiscount_btn} ${!isBtnDisabled && styles.applyDiscount_btnActive}`}>
				<h4>Save Details</h4>
			</Button>
		</form>
	);
};

export default DeliveryDetailsForm;
