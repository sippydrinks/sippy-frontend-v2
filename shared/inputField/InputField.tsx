'use client';
import React, { InputHTMLAttributes, useState, ReactNode } from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './InputField.module.scss';
import EyeCloseIcon from '../svgs/jsx/EyeClose';
import EyeOpenIcon from '../svgs/jsx/EyeOpen';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name?: string;
	label?: string;
	isPassword?: boolean;
	className?: string;
	inputClass?: string;
	// customPrefix?: React.JSX.Element;
	customPrefix?: any;
	suffix?: React.JSX.Element;
	inputRef?: any;
	register?: any;
	value?: any
}

const InputField = ({ name, type = 'text', label, className, value, inputClass, customPrefix, isPassword, suffix, register, inputRef, ...options }: Props) => {
	const [inputType, setInputType] = useState<string>(type);
	const handleShowPassword = () => {
		if (inputType === 'password') {
			setInputType('text');
		}
		if (inputType === 'text') {
			setInputType('password');
		}
	};
	const { theme } = useGlobalContext();
	return (
		<div data-theme={theme} className={`${styles.input} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div data-theme={theme} className={`${styles.input_wrapper} ${inputClass}`}>
				{customPrefix && <>{customPrefix}</>}

				<input value={value} className={`${inputClass} ${styles.input_field}`} type={inputType} ref={inputRef} {...register} {...options} data-theme={theme} />

				{isPassword && (
					<div className={styles.icon} onClick={handleShowPassword}>
						{inputType !== 'password' ? <EyeCloseIcon /> : <EyeOpenIcon />}
					</div>
				)}

				{suffix && <div className={styles.suffix_container}>{suffix && <>{suffix}</>}</div>}
			</div>
		</div>
	);
};

export default InputField;
