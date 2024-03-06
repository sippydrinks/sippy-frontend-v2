'use client';
import React, { useState } from "react";
import { AccordionProps } from "@/interface";
import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
import Image from "next/image";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, type, image, iconType, children }: AccordionProps) => {
	const { theme }: ContextProps = useGlobalContext();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const OpenAccordion = () => {
		setIsOpen(isOpen => !isOpen);
	};

	return (
		<div
			data-type={type}
			data-theme={theme}
			data-active={isOpen}
			data-icontype={iconType}
			className={styles.accordionContainer}
		>
			<div className={styles.accordionHeaderContainer}>
				<div className={styles.accordionHeader}>
					{image && (
						<div className={styles.image_header}>
							<Image alt="" src={image} fill />
						</div>
					)}
					<h3 data-header={type} className={styles.accordionTitle}>
						{title}
					</h3>
				</div>
				<div
					onClick={OpenAccordion}
					data-type={iconType}
					data-active={isOpen}
					className={`${styles.accordionPlusIcon} ${styles.accordionChevronIcon}`}
				>
					<Image alt="" fill src={`/svgs/${iconType}-${theme}.svg`} />
				</div>
			</div>
			<div className={styles.reviewBody}>{children}</div>
		</div>
	);
};

export default Accordion;
