'use client';
import React, { useState, useEffect } from 'react';
import styles from './Select.module.scss';
import SmallLoader from '@/shared/loaders/smallLoader/SmallLoader';
import { shortenTitle } from '@/utils';
import SelectUpIcon from '@/shared/svgs/SelectUpIcon';
import SelectDownIcon from '@/shared/svgs/SelectDownIcon';

// import { SelectOption } from "@/types";

export interface OptionProps {
	label: string;
	icon: string;
}

export interface SelectProps {
	options?: any[];
	onOptionChange?: (option?: any) => void;
	defaultOptionIndex?: number;
	className?: string;
	customPrefix?: React.JSX.Element;
	title?: string;
	isTransparent?: boolean;
	defaultOption?: string;
	label?: string;
}

const Select = ({ options, onOptionChange, defaultOptionIndex = -1, className, customPrefix, title, isTransparent = false, defaultOption = 'Select an Option', label }: SelectProps) => {
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
			<div className={`${styles.select} ${className}`} data-type={isTransparent}>
				{!options ? (
					<SmallLoader />
				) : (
					<div className={styles.select_header} onClick={toggling}>
						<div className={styles.select_smallRow}>
							<div className={styles.flex}>
								{customPrefix && <>{customPrefix}</>}
								<p>
									{title ? title + ':' : ''} <span>{selectedOptionIndex === -1 ? defaultOption : shortenTitle(options[selectedOptionIndex].label, 42)}</span>
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
