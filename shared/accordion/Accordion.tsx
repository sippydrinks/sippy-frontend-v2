import React, { useState } from "react";
import { AccordionProps } from "@/interface";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/AppContext";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, type, image, iconType, children }: AccordionProps) => {
	const { themeColor } = useGlobalContext();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const OpenAccordion = () => {
		// isOpen ? setIsOpen(false) : setIsOpen(true)
		setIsOpen(isOpen => !isOpen);
	};

	return (
		<div
			data-type={type}
			data-theme={themeColor}
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
					<Image alt="" fill src={`/svgs/${iconType}-${themeColor}.svg`} />
				</div>
			</div>
			<div className={styles.reviewBody}>{children}</div>
		</div>
	);
};

export default Accordion;
