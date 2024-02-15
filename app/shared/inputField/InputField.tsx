"use client";
import React, { InputHTMLAttributes, useState } from "react";
import styles from "./InputField.module.scss";
import Image from "next/image";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	name?: string;
	label?: string;
	password?: boolean;
	className?: string;
	suffix?: string;
	// onChange?: (e: any) => void;
	// onBlur?: (e: any) => void;
	// onFocus?: (e: any) => void;
	// min?: number;
	// max?: number;
}

const InputField = ({
	name,
	type = "text",
	icon,
	label,
	placeholder,
	onChange,
	onBlur,
	onFocus,
	value,
	className,
	password,
	disabled,
	required,
	min,
	max,
	suffix,
	...options
}: Props) => {
	const [inputType, setInputType] = useState<string>(type);
	const handleShowPassword = () => {
		if (inputType === "password") {
			setInputType("text");
		}
		if (inputType === "text") {
			setInputType("password");
		}
	};
	return (
		<div className={`${styles.input} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div className={styles.input_wrapper}>
				{!!icon && (
					<figure className={styles.input_icon}>
						<Image src={icon} fill sizes="100vw" alt="" />
					</figure>
				)}
				<input
					className={styles.input_field}
					type={inputType}
					data-icon={!!icon}
					placeholder={placeholder}
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					onFocus={onFocus}
					value={value}
					required={required}
					min={min}
					max={max}
					{...options}
				/>
				{password && (
					<div className={styles.icon} onClick={handleShowPassword}>
						<Image
							src={
								inputType !== "password"
									? "/svgs/eye-close.svg"
									: "/svgs/eye.svg"
							}
							layout="fill"
							alt=""
						/>
					</div>
				)}
				{suffix && (
					<div className={styles.text}>
						<p>{suffix}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
