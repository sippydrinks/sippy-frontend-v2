'use client';
import React, { useState } from 'react';
import { ModalElement, InputField, Button, Accordion } from '@/shared';
import { ModalProps } from '@/interface';
import { Emailcard } from '..';
import styles from './ShoppingModal.module.scss';
import Image from 'next/image';

const ShoppingModal = ({ isOpen, onClose }: ModalProps) => {
	const [activeTab, setActiveTab] = useState<number>(1);
	const [initial, setInitial] = useState<number>(12);
	const ToggleTab = (tabIndex: number) => {
		setActiveTab(tabIndex);
	};
	const handleSeeMore = () => {
		setInitial((initial) => initial + 8);
	};

	return (
		<ModalElement bodyClass={styles.modalBodyClass} isOpen={isOpen} onClose={onClose} modalImage='/svgs/modal-Image2.svg'>
			<div className={styles.modal_body}>
				<h3>Shop with friends</h3>
				<p>Take your friends to the shop with you. Have them add drinks to your cart and have fun telling them no if you do not like the drinks they added to your cart.</p>
				<div className={styles.tabHeader_container}>
					<div className={activeTab === 1 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(1)}>
						<h3>New group</h3>
					</div>
					<div className={activeTab === 2 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(2)}>
						<h3>Shopping History</h3>
					</div>
				</div>

				<div className={styles.tabcontent_container}>
					{activeTab === 1 && (
						<div className={styles.newGroup_tab}>
							<div className={styles.email_inputField}>
								<InputField label='Enter friends emails' type='email' placeholder='Enter email, separate with comma' />
							</div>

							<div className={styles.description_inputField}>
								<h4>0 / 100</h4>
								<InputField label='Description' placeholder='Enter description' />
								<p>This is a hint text to help user</p>
							</div>

							<div className={styles.accounts_list_container}>
								<div className={styles.accounts_list}>
									<div className={styles.userImage_container}>
										<div className={styles.userImage}>
											<Image alt='' fill src='/svgs/userProfileImage.svg' />
										</div>
										<p>You</p>
									</div>
									<h3>Cart Owner</h3>
								</div>

								<div className={styles.accounts_list}>
									<div className={styles.userImage_container}>
										<div className={styles.userImage}>
											<Image alt='' fill src='/svgs/userProfileImage.svg' />
										</div>
										<p>Jane Doe</p>
									</div>
									<h4>Remove</h4>
								</div>
							</div>

							<div className={styles.inviteLink_container}>
								<div className={styles.copyLink_container}>
									<div className={styles.copylink_icon}>
										<Image alt='copy-link-btn' fill src='/svgs/copylinkBtn.svg' />
									</div>
									<h3>Copy Invite Link</h3>
								</div>

								<Button buttonType='primary' className={styles.inviteBtn}>
									<h3>Send invite</h3>
								</Button>
							</div>
						</div>
					)}
					{activeTab === 2 && (
						<div className={styles.shopping_tab}>
							<Accordion image='/svgs/janedoe.svg' type='small' title='created 2 months ago' iconType='chevron'>
								<div className={styles.accordion_body}>
									<div className={styles.card_container}>
										{['jameshope@gmail.com', 'janedoe@gmail.com', 'harleyQuinn@gmail.com', 'johndoe@gmail.com'].map((item, index) => (
											<Emailcard key={index} image='/svgs/janedoe.svg' name='James Hope' email={item} />
										))}
									</div>
									<Button buttonType='primary' className={styles.accordion_btn}>
										<h3>Shop again</h3>
									</Button>
								</div>
							</Accordion>
							<Accordion image='/svgs/janedoe.svg' type='small' title='created 2 months ago' iconType='chevron'>
								<div className={styles.accordion_body}>
									<div className={styles.card_container}>
										{[1, 2, 3, 4].map((item) => (
											<Emailcard key={item} image='/svgs/janedoe.svg' name='James Hope' email='jameshope@gmail.com' />
										))}
									</div>
									<Button buttonType='primary' className={styles.accordion_btn}>
										<h3>Shop again</h3>
									</Button>
								</div>
							</Accordion>
							<Accordion image='/svgs/janedoe.svg' type='small' title='created 2 months ago' iconType='chevron'>
								<div className={styles.accordion_body}>
									<div className={styles.card_container}>
										{[1, 2, 3, 4].map((item) => (
											<Emailcard key={item} image='/svgs/janedoe.svg' name='James Hope' email='jameshope@gmail.com' />
										))}
									</div>
									<Button buttonType='primary' className={styles.accordion_btn}>
										<h3>Shop again</h3>
									</Button>
								</div>
							</Accordion>
						</div>
					)}
				</div>
			</div>
		</ModalElement>
	);
};

export default ShoppingModal;
