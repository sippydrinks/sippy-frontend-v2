'use client';
import React, { InputHTMLAttributes, useState, ReactNode } from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './InputField.module.scss';
import Image from 'next/image';
import EyeOpenIcon from '@/components/svgs/jsx/EyeOpen';
import EyeCloseIcon from '@/components/svgs/jsx/EyeClose';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	name?: string;
	label?: string;
	isPassword?: boolean;
	className?: string;
	inputClass?: string;
	customPrefix?: React.JSX.Element;
	suffix?: React.JSX.Element;
	register?: any;
	// onChange?: (e: any) => void;
	// onBlur?: (e: any) => void;
	// onFocus?: (e: any) => void;
	// min?: number;
	// max?: number;
}

const InputField = ({ name, type = 'text', icon, label, className, inputClass, customPrefix, isPassword, suffix, register, ...options }: Props) => {
	const [inputType, setInputType] = useState<string>(type);
	const handleShowPassword = () => {
		if (inputType === 'password') {
			setInputType('text');
		}
		if (inputType === 'text') {
			setInputType('password');
		}
	};
	const { themeColor } = useGlobalContext();
	return (
		<div data-theme={themeColor} className={`${styles.input} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div data-theme={themeColor} className={`${styles.input_wrapper} ${inputClass} `}>
				{customPrefix && (
					<div data-theme={themeColor} className={`${styles.text}`}>
						{customPrefix}
					</div>
				)}

				<input className={styles.input_field} data-icon={!!icon} {...register} {...options} data-theme={themeColor} />

				{isPassword && (
					<div className={styles.icon} onClick={handleShowPassword}>
						{inputType !== 'password' ? <EyeCloseIcon /> : <EyeOpenIcon />}
					</div>
				)}

				{suffix && (
					<div className={styles.suffix_container}>
						{suffix && (
							<div data-theme={themeColor}>
								<p>{suffix}</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
