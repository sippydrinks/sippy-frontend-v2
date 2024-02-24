'use client';
import { AuthLayoutProps } from '@/interface/authentication';
import styles from './AuthLayout.module.scss';

const AuthLayout = ({ children, backgroundType }: AuthLayoutProps) => {
	return (
		<div data-type={backgroundType} className={styles.auth_layout}>
			{children}
		</div>
	);
};

export default AuthLayout;
