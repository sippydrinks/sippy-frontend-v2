'use client';
import React from 'react';
import { ModalElement, Button } from '@/shared';
import { ModalProps } from '@/interface';
import styles from './CheckoutLoginModal.module.scss';
import { useRouter } from 'next/navigation';

const CheckoutLoginModal = ({ isOpen, onClose }: ModalProps) => {
	const router = useRouter();
	return (
		<ModalElement isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image1.svg'>
			<div className={styles.modal_body}>
				<h3>Hey Sippite</h3>
				<p>We have missed you. Would you like to log into your sippy profile to view all your saved items and purchases?</p>
				<div className={styles.btns}>
					<Button onClick={() => router.push('/login')} buttonType='primary' className={styles.cancel_btn}>
						<h3>Login</h3>
					</Button>
					<Button buttonType='primary' className={styles.leavecart_btn}>
						<h3>Continue as guest</h3>
					</Button>
				</div>
			</div>
		</ModalElement>
	);
};

export default CheckoutLoginModal;
