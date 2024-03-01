import React from 'react';
import styles from './AuthTabHeader.module.scss';
import { TypeProp } from '@/interface/authentication';

interface Props {
	toggleTab: (str: TypeProp) => void;
	type: string;
}
const AuthTabHeader = ({ toggleTab, type }: Props) => {
	return (
		<div className={styles.tabHeader_container}>
			<div data-active={type === 'email'} className={styles.tab} onClick={() => toggleTab('email')}>
				<h3>Email</h3>
			</div>
			<div data-active={type === 'phone_number'} className={styles.tab} onClick={() => toggleTab('phone_number')}>
				<h3>Phone number</h3>
			</div>
		</div>
	);
};

export default AuthTabHeader;
