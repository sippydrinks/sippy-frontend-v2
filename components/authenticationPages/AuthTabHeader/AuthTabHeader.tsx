import React from 'react';
import styles from './AuthTabHeader.module.scss';
import { AuthType, TypeProp } from '@/interface/authentication';

interface Props {
	toggleTab: React.Dispatch<React.SetStateAction<AuthType>>;
	type?: string;
}

const AuthTabHeader = ({ toggleTab, type }: Props) => {
	return (
		<div className={styles.tabHeader_container}>
			<div data-active={type === AuthType.EMAIL} className={styles.tab} onClick={() => toggleTab(AuthType.EMAIL)}>
				<h3>Email</h3>
			</div>
			<div data-active={type === AuthType.PHONE_NUMBER} className={styles.tab} onClick={() => toggleTab(AuthType.PHONE_NUMBER)}>
				<h3>Phone number</h3>
			</div>
		</div>
	);
};

export default AuthTabHeader;
