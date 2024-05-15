import React from 'react';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import { DropdownProps } from '@/interface/shared';
import styles from './Dropdown.module.scss';

const Dropdown = ({text1, text2, text3, icon1, icon2, icon3, onClick, primaryAction, secondaryAction, type = 'big', index}: DropdownProps) => {
	const { theme }: ContextProps = useGlobalContext();
	return (
		<div data-text={text3} data-type={type} data-theme={theme} className={styles.dropdowncontainer}>
			<div onClick={primaryAction} className={styles.dropdownItem}>
				{icon1 && <div className={styles.icon}>
					<Image alt='' fill src={icon1} />
				</div>}
				<h3>{text1}</h3>
			</div>
			{index !== 1 && <div onClick={secondaryAction} className={styles.dropdownItem}>
				{icon2 && <div className={styles.icon}>
					<Image alt='' fill src={icon2} />
				</div>}
				<h3>{text2}</h3>
			</div>}
			<div onClick={onClick} className={styles.dropdownItem}>
				{icon3 && <div className={styles.icon}>
					<Image alt='' fill src={icon3} />
				</div>}
				<h4>{text3}</h4>
			</div>
		</div>
	);
};

export default Dropdown;
