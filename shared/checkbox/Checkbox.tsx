import React from "react";
import { useGlobalContext } from "@/contexts/AppContext";
import { CheckboxProps } from "@/interface";
import styles from "./Checkbox.module.scss";
 
const CheckBox = ({ label, onChange, className, checked, value, disabled = false }: CheckboxProps) => {
	const { themeColor } = useGlobalContext()
	return (
		<div className={`${styles.checkBox} ${className}`}>
			<label className={styles.container} data-type={disabled}>
				{label}
				<input type="checkbox" value={value} onChange={onChange} checked={checked} />
				<span data-theme={themeColor} className={styles.checkmark}></span>
			</label>
		</div>
	);
};
 
export default CheckBox;