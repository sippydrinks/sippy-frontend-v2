import React, { InputHTMLAttributes, useState } from "react";
import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
import styles from "./InputField.module.scss";

import Image from "next/image";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
	icon?: string;
	name?: string;
	label?: string;
	password?: boolean;
	className?: string;
	iconClass?: string
	inputClass?: string
	prefixClass?: string
	prefix?: string
	suffix?: string;
	suffixIcon?: string
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
	prefix,
	prefixClass,
	password,
	disabled,
	required,
	min,
	max,
	suffix,
	suffixIcon,
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
	const { theme }: ContextProps = useGlobalContext()
	return (
		<div data-theme={theme} className={`${styles.input} ${className}`}>
			{!!label && (
				<label className={styles.input_label} htmlFor={name}>
					{label}
				</label>
			)}

			<div data-theme={theme} className={`${styles.input_wrapper} ${inputClass}`}>
				{!!icon && (
					<figure className={`${styles.input_icon} ${iconClass}`}>
						<Image src={icon} fill alt="" />
					</figure>
				)}
				{prefix && (
					<div data-theme={theme} className={`${styles.text} ${prefixClass}`}>
						<p>{prefix}</p>
					</div>
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
					data-theme={theme}
				/>
				{password && (
					<div className={styles.icon} onClick={handleShowPassword}>
						<Image
							src={
								inputType !== "password"
									? "/svgs/eye-close.svg"
									: "/svgs/eye.svg"
							}
							fill
							alt=""
						/>
					</div>
				)}
				<div className={styles.suffix_container}>
					<div>
						{suffix && (
							<div data-theme={theme} className={styles.text}>
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
			</div>
		</div>
	);
};

export default InputField;
