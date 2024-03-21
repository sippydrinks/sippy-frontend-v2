import React from 'react';
import styles from './AllAddresses.module.scss';
import { Radio } from '@/shared';

const AllAddresses = ({ newAddresses, selectedAddress, setSelectedAddress, setShowContactForm }: any) => {
	return (
		<div className={styles.container}>
			{newAddresses.map((address: any, index: number) => (
				<div key={index} className={styles.address}>
					<Radio checked={selectedAddress?.id === address.id} onChange={() => setSelectedAddress(address)} />
					<div className={styles.address_details}>
						<h3>{address.name}</h3>
						<span className={styles.dots} />
						<p>{address.address}</p>
						<span className={styles.dots} />
						<p>{address.phone_number}</p>
					</div>
				</div>
			))}
			<div className={styles.add_new_address}>
				<p onClick={() => setShowContactForm(true)}>Add a new address</p>
			</div>
		</div>
	);
};

export default AllAddresses;
