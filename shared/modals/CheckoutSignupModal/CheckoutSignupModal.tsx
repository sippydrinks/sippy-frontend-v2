import React from 'react';
import Link from 'next/link';
import { ModalElement, Button } from '@/shared';
import { ModalProps } from '@/interface';
import styles from './CheckoutSignupModal.module.scss';

const CheckoutSignupModal = ({ isOpen, onClose }: ModalProps) => {
	return (
		<ModalElement isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
			<div className={styles.modal_body}>
				<h3>Hey there</h3>
				<p>We noticed this email doesn’t have an account with us. Would you like to create a sippy account. Having a sippy account gives you access to exclusive perks and opportunities</p>
				<div className={styles.btns}>
					<Button buttonType='primary' className={styles.cancel_btn}>
						<Link href='createAccount'>
							<h3>Create account</h3>
						</Link>
					</Button>
					<Button buttonType='primary' className={styles.leavecart_btn} onClick={onClose}>
						<h3>Continue as guest</h3>
					</Button>
				</div>
			</div>
		</ModalElement>
	);
};

export default CheckoutSignupModal;
