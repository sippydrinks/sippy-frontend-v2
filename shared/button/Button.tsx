import React from 'react';
import styles from './Button.module.scss';
import Image from 'next/image';
import { useGlobalContext } from '@/contexts/AppContext';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	buttonType?: 'primary' | 'transparent' | 'secondary';
	children: React.ReactNode;
	iconPrefix?: string;
	iconSuffix?: string;
	className?: string;
	disabled?: boolean;
	onClick?: (event?: any) => void;
	type?: 'button' | 'submit' | 'reset';
}

const Button = ({ buttonType = 'primary', children, onClick, type = 'button', className, iconPrefix, iconSuffix, disabled = false }: Props) => {
	const { themeColor } = useGlobalContext();
	return (
		<button type={type} onClick={onClick} className={`${styles[buttonType]} ${className} ${styles.button}`} data-type={buttonType} data-theme={themeColor} disabled={disabled}>
			{!!iconPrefix && (
				<figure className={styles.button_icon}>
					<Image src={iconPrefix} fill alt='' />
				</figure>
			)}
			{children}
			{!!iconSuffix && (
				<figure className={styles.button_icon}>
					<Image src={iconSuffix} fill alt='' />
				</figure>
			)}
		</button>
	);
};

export default Button;
