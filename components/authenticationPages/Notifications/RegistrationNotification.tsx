'use client';
import React from 'react';
import styles from './RegistrationNotification.module.scss';
import { Button, Logo } from '@/shared';
import Link from 'next/link';

interface Props {
	details: {
		notificationImage: React.ReactNode;
		title: string;
		subTitle: string;
		description: string;
		buttonText: string;
		icon?: React.JSX.Element;
		notificationType: string;
		url: string;
		setIsRegistrationRequested: React.Dispatch<React.SetStateAction<boolean>>;
	};
}

const RegistrationNotification = ({ details }: Props) => {
	return (
		<div className={styles.notification_page}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.notification_container}>
				<div className={styles.notification_svg}>{details.notificationImage}</div>
				<div className={styles.subTitle_icon} datatype={details.notificationType}>
					<p>{details.subTitle}</p>
					<span className={styles.icon}>{details.icon}</span>
				</div>
				<h2>{details.title}</h2>
				<p className={styles.description}>{details.description}</p>
				<Button type='button' buttonType='primary' className={styles.notification_btn} onClick={() => (details.notificationType === 'failed' ? details.setIsRegistrationRequested(false) : null)}>
					<h3>
						<Link href={details.url}>{details.buttonText}</Link>
					</h3>
				</Button>
			</div>
		</div>
	);
};

export default RegistrationNotification;
