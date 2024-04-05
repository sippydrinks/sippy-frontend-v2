'use client';
import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './TextArea.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	name?: string;
	label?: string;
	isPassword?: boolean;
	className?: string;
	inputClass?: string;
	inputRef?: any;
	register?: any;
}

const TextAreaField = ({ name, label, className, inputClass, register, inputRef, ...options }: Props) => {
	const { theme } = useGlobalContext();
	return (
		<div data-theme={theme} className={`${styles.textarea} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div data-theme={theme} className={`${styles.textarea_wrapper} ${inputClass} `}>
				<textarea className={styles.input_field} ref={inputRef} {...register} {...options} data-theme={theme} />
			</div>
		</div>
	);
};

export default TextAreaField;
