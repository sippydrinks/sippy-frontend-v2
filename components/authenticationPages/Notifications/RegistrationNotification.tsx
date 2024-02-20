'use client';
import React from 'react';
import styles from './RegistrationNotification.module.scss';
import { Button, Logo } from '@/shared';
import Link from 'next/link';

interface Props {
	notificationImage: React.ReactNode;
	title: string;
	subTitle: string;
	description: string;
	buttonText: string;
	icon?: React.JSX.Element;
	notificationType: string;
	url: string;
	setIsRegistrationRequested: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegistrationNotification = ({ title, description, buttonText, subTitle, icon, notificationImage, notificationType, url, setIsRegistrationRequested }: Props) => {
	return (
		<div className={styles.notification_page}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.notification_container}>
				<div className={styles.notification_svg}>{notificationImage}</div>
				<div className={styles.subTitle_icon} datatype={notificationType}>
					<p>{subTitle}</p>
					<span className={styles.icon}>{icon}</span>
				</div>
				<h2>{title}</h2>
				<p className={styles.description}>{description}</p>
				<Button type='button' buttonType='primary' className={styles.notification_btn} onClick={() => (notificationType === 'failed' ? setIsRegistrationRequested(false) : null)}>
					<h3>
						<Link href={url}>{buttonText}</Link>
					</h3>
				</Button>
			</div>
		</div>
	);
};

export default RegistrationNotification;
