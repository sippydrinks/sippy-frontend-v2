import React from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import { CheckboxProps } from '@/interface';
import styles from './radio.module.scss';

const Radio = ({ label, onChange, className, checked, value, disabled = false }: CheckboxProps) => {
	const { theme } = useGlobalContext();
	return (
		<div className={`${styles.radio} ${className}`}>
			<label className={styles.container} data-type={disabled}>
				{label}
				<input type='radio' value={value} onChange={onChange} checked={checked} />
				<span data-theme={theme} className={styles.checkmark}></span>
			</label>
		</div>
	);
};

export default Radio;
