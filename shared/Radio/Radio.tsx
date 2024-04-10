import React from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import { CheckboxProps } from "@/interface";
import styles from "./Radio.module.scssadio.module.scss";

const Radio = ({
	label,
	onChange,
	className,
	checked,
	value,
	disabled,
}: CheckboxProps) => {
	const { theme } = useGlobalContext();
	return (
		<label className={styles.radio_container}>
			{label}
			<input
				type="radio"
				value={value}
				onChange={onChange}
				checked={checked}
				disabled={disabled}
			/>
			<span
				data-theme={theme}
				data-disabled={disabled ? "yes" : "no"}
				className={styles.circle}
			></span>
		</label>
	);
};

export default Radio;
