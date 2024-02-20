'use client';
import React, { InputHTMLAttributes, useState } from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import styles from "./InputField.module.scss";
import Image from "next/image";
import EyeOpenIcon from "@/components/svgs/jsx/EyeOpen";
import EyeCloseIcon from "@/components/svgs/jsx/EyeClose";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	name?: string;
	label?: string;
	password?: boolean;
	className?: string;
	iconClass?: string;
	inputClass?: string;
	errorClass?: string;
	prefixClass?: string;
	prefix?: string;
	suffix?: string;
	suffixIcon?: string;
	register?: any;
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
	iconClass,
	inputClass,
	errorClass,
	prefix,
	prefixClass,
	password,
	disabled,
	required,
	min,
	max,
	suffix,
	suffixIcon,
	register,
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
	const { themeColor } = useGlobalContext();
	return (
		<div data-theme={themeColor} className={`${styles.input} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div
				data-theme={themeColor}
				className={`${styles.input_wrapper} ${inputClass} ${errorClass}`}
			>
				{!!icon && (
					<figure className={`${styles.input_icon} ${iconClass}`}>
						<Image src={icon} fill alt="" />
					</figure>
				)}

				{prefix && (
					<div
						data-theme={themeColor}
						className={`${styles.text} ${prefixClass}`}
					>
						<p>{prefix}</p>
					</div>
				)}

				{prefix === "+234" && (
					<div
						data-theme={themeColor}
						className={`${styles.prefix_divider} `}
					></div>
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
					{...register}
					{...options}
					data-theme={themeColor}
				/>
				{password && (
					<div className={styles.icon} onClick={handleShowPassword}>
						{inputType !== "password" ? <EyeCloseIcon /> : <EyeOpenIcon />}
					</div>
				)}
				{(suffix || suffixIcon) && (
					<div className={styles.suffix_container}>
						<div>
							{suffix && (
								<div data-theme={themeColor} className={styles.text}>
									<p>{suffix}</p>
								</div>
							)}
						</div>

						<div>
							{suffixIcon && (
								<div className={styles.suffix_icon}>
									<Image alt="" fill src={suffixIcon} />
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
