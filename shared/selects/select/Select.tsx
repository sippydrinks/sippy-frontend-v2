'use client';
import React, { useState, useEffect } from 'react';
import styles from './Select.module.scss';
import Image from 'next/image';
import SmallLoader from '@/shared/loaders/smallLoader/SmallLoader';
import { shortenTitle } from '@/utils';
import SelectUpIcon from '@/shared/svgs/jsx/SelectUpIcon';
import SelectDownIcon from '@/shared/svgs/jsx/SelectDownIcon';

// import { SelectOption } from "@/types";

export interface OptionProps {
	label: string;
	icon: string;
}

export interface SelectProps {
	// options?: SelectOption[];
	options?: any[];
	onOptionChange?: (option?: any) => void;
	defaultOptionIndex?: number;
	className?: string;
	iconClass?: string;
	icon?: string;
	title?: string;
	isTransparent?: boolean;
	defaultOption?: string;
	register?: any;
	label?: string;
	errorClass?: string;
}

const Select = ({ options, onOptionChange, defaultOptionIndex = -1, className, iconClass, icon, title, isTransparent = false, defaultOption = 'Select an Option', register, label, errorClass }: SelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(defaultOptionIndex);

	// a function to toggle the dropdown
	const toggling = (event: React.MouseEvent<HTMLDivElement>) => {
		setIsOpen((prev) => !prev);
		event.stopPropagation();
	};

	const onOptionClicked = (selectedIndex: number) => () => {
		setSelectedOptionIndex(selectedIndex);
		setIsOpen(false);

		if (onOptionChange) {
			onOptionChange(options![selectedIndex].value);
		}
	};

	// a useEffect to close the dropdown when the user clicks outside the dropdown
	useEffect(() => {
		const handleClickOutside = () => {
			if (isOpen) {
				setIsOpen((prev) => !prev);
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div>
			<label className={styles.select_label}>{label}</label>
			<div className={`${styles.select} ${className} ${errorClass}`} data-type={isTransparent}>
				{!options ? (
					<SmallLoader />
				) : (
					<div className={styles.select_header} onClick={toggling}>
						<div className={styles.select_smallRow}>
							<div className={styles.flex}>
								{icon && (
									<div className={`${styles.icon} ${iconClass}`}>
										<Image src={icon} fill alt='' />
									</div>
								)}
								<p>
									{title ? title + ':' : ''} <span {...register}>{selectedOptionIndex === -1 ? defaultOption : shortenTitle(options[selectedOptionIndex].label, 42)}</span>
								</p>
							</div>
							<div className={`${styles.select_dropDownImage}`}>{isOpen ? <SelectUpIcon /> : <SelectDownIcon />}</div>
						</div>
					</div>
				)}

				{isOpen && (
					<div className={styles.select_body}>
						<ul className={styles.select_listContainer}>
							{options!.map((option: any, index) =>
								index !== selectedOptionIndex ? (
									<li onClick={onOptionClicked(index)} key={index} className={styles.select_listItem}>
										<div className={styles.select_row}>
											<p>{option.label}</p>
										</div>
									</li>
								) : null
							)}
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Select;
