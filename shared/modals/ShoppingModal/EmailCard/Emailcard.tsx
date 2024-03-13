import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Image from 'next/image';
import styles from './Emailcard.module.scss';

interface EmailCardProps {
	image: string;
	name?: string;
	email?: string;
}
const Emailcard = ({ image, name, email }: EmailCardProps) => {
	const [copy, setCopy] = useState<string>('');
	const handleCopy = async (email: any) => {
		try {
			await navigator.clipboard.writeText(email);
			toast.success('Copied!');
		} catch (err) {
			setCopy('Failed to copy text');
		}
	};
	return (
		<div className={styles.card}>
			<div className={styles.cardImage}>
				<Image alt='image' fill src={image} />
			</div>
			<div className={styles.cardBody}>
				<div className={styles.cardBodyText}>
					<h3>{email}</h3>
					<p>{name}</p>
				</div>

				<div onClick={() => handleCopy(email)} className={styles.copy}>
					<h3>Copy email</h3>
				</div>
			</div>
		</div>
	);
};

export default Emailcard;
