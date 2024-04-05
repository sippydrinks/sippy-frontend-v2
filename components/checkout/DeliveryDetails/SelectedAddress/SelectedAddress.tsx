import React from 'react';
import styles from './SelectedAddress.module.scss';

const SelectedAddress = ({ selectedAddress, setSelectedAddress, handleChangeButton }: any) => {
	return (
		<div>
			<div className={styles.single_address}>
				<div className={styles.address_details}>
					<h3>{selectedAddress?.name}</h3>
					<div className={styles.email_phone_container}>
						<span>{selectedAddress?.email}</span>
						<span className={styles.dots} />
						<span>{selectedAddress?.phone_number}</span>
					</div>
					<p>{selectedAddress?.address}</p>
				</div>
				<div className={styles.add_new_address}>
					<p onClick={handleChangeButton}>Change</p>
				</div>
			</div>
		</div>
	);
};

export default SelectedAddress;
