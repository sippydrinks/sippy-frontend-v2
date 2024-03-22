'use client';
import React, { useEffect } from 'react';
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { ModalProps } from '@/interface';
import Image from 'next/image';
import styles from './ModalElement.module.scss';

const ModalElement = (props: ModalProps) => {
	const handleClose = () => {
		props.onClose();
	};
	const { theme }: ContextProps = useGlobalContext();
	useEffect(() => {
		document.body.style.overflow = props.isOpen ? 'hidden' : 'auto';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [props.isOpen]);
	return (
		<div>
			{props.isOpen && (
				<div className={`${styles.overlay} ${props.className}`} onClick={handleClose}>
					<div data-overflow={!!props.modalImage} data-theme={theme} data-modalimage={!!props.modalImage} className={`${styles.modalbody} ${props.bodyClass}`} onClick={(e) => e.stopPropagation()}>
						{props.children}
						{props.modalImage && (
							<div className={`${styles.modalImage_container} ${props.className}`}>
								<div className={`${styles.modalImage}`}>
									<Image alt='modal-image' fill src={props.modalImage} />
								</div>
							</div>
						)}
					</div>
					{/* <div className={`${styles.modalImage_container_sm}`}>
						{props.modalImage && (
							<div className={`${styles.modalImage}`}>
								<Image alt='modal-image' fill src={props.modalImage} />
							</div>
						)}
					</div> */}
				</div>
			)}
		</div>
	);
};

export default ModalElement;
