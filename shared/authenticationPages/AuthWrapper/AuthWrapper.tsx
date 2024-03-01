'use client';
import { AuthLayoutProps } from '@/interface/authentication';
import styles from './AuthWrapper.module.scss';

const AuthWrapper = ({ children, backgroundType }: AuthLayoutProps) => {
	return (
		<div data-type={backgroundType} className={styles.auth_layout}>
			{children}
		</div>
	);
};

export default AuthWrapper;
