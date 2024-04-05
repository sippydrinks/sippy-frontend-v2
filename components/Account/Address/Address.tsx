'use client';
import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/AppContext'
import { Button } from '@/shared';
import AddressField from './AddressField/AddressField';
import { AddressDataProps } from '@/interface/components';
import { addressesData } from '@/mock';
import styles from './Address.module.scss'

const Address = () => {
  const { theme, address, setAddress } = useGlobalContext()
  const [addAddress, setAddAddress] = useState<number>(2);
  const handleAddAddress = () => {
		setAddAddress((prevAddress) => prevAddress + 1);
	};
	const checkAddressArray = addressesData.length > addAddress;

  return (
    <div data-theme={theme} className={styles.address_container}>
      {
        address.slice(0, addAddress).map((addressData: AddressDataProps, index: number) => 
          <AddressField 
            key={index}
            index={addressData.id}
            // addAddress={addAddress}
            addressData={addressData}
            addressesList={addressesData}
            items={address}
            setItems={setAddress}
          />
        )
      }

      {checkAddressArray && <Button onClick={handleAddAddress} buttonType='primary' className={styles.change_btn}>
        <h4>Add new address</h4>
      </Button>}
    </div>
  )
}

export default Address