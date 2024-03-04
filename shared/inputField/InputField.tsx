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
	customPrefix?: React.JSX.Element;
	suffix?: React.JSX.Element;
	register?: any;
	inputRef?: any;
}

const InputField = ({ name, type = 'text', label, className, inputClass, customPrefix, isPassword, suffix, register, inputRef, ...options }: Props) => {
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
				{customPrefix && <>{customPrefix}</>}

				<input className={styles.input_field} type={inputType} ref={inputRef} {...register} {...options} data-theme={themeColor} />

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
