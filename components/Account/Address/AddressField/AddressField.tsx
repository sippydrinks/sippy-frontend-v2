'use client';
import React, { useState } from 'react'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { Button, InputField } from '@/shared'
import { useForm } from 'react-hook-form'
import { AddressesFieldProps } from '@/interface/components';
import Image from 'next/image'
import styles from './AddressField.module.scss'

const AddressField = ({ index, addressData, addressesList, items, setItems}: AddressesFieldProps) => {
    const { theme }: ContextProps = useGlobalContext()
    const [editAddress, setEditAddress] = useState<boolean>(false);
    const { register, watch } = useForm()
    const address = watch('address')
    const state = watch('state')
    const city = watch('city')
    const addressIndex = items.findIndex((item: any) => item.id === addressData.id);

    const handleSaveChanges = () => {
        setEditAddress(false)
    }
    const handleDelete = () => {
		if (addressIndex !== -1) {
			const updatedList = addressesList.filter(
				(address: any) => address.id !== addressesList[addressIndex].id
			);
			setItems(updatedList);
            console.log(updatedList, addressIndex);
		}
	};
    const makeDefaultAddress = (id: number) => {
        const index = items.findIndex((address: any) => address.id === id);

        if (index !== -1 && index !== 0) {
          // Swap addresses
          const temp = items[0];
          items[0] = items[index];
          items[index] = temp;
          // Update the IDs
          items[0].id = 1;
          items[index].id = id;
          setItems([...items]);
        }
      };

  return (
    <>
        <div className={styles.address_header}>
            <h1>
                Shipping Address 
                <span> {index === 1 ? ` (Default) ` : `${(index)}`}</span>
                {index !== 1 && 
                    <span onClick={() => makeDefaultAddress(index)} className={styles.default_btn}>
                        Make default address
                    </span>
                }
            </h1>
            <div className={styles.actions_btns}>
                <div onClick={() => setEditAddress(true)} className={styles.edit_btn}>
                    <h3>Edit</h3>
                    <div className={styles.edit_icon}>
                        <Image alt='' fill src={`/svgs/edit-${theme}.svg`} />
                    </div>
                </div>
                <div onClick={handleDelete} className={styles.edit_btn}>
                    <h3>Delete</h3>
                    <div className={styles.edit_icon}>
                        <Image alt='' fill src={`/svgs/trash-${theme}.svg`} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.address_input}>
            <div className={styles.address_body}>
            <h3>Street</h3>
                {editAddress ?
                    <InputField className={styles.edit_address_input} 
                        inputClass={styles.edit_address} 
                        register={register('address')} 
                        placeholder='Enter Address' 
                    />
                : 
                    <h4>
                        {address ? address : `${addressData.street}`}
                    </h4>
                }
            </div>

            <div className={styles.address_body}>
                <h3>State</h3>
                {editAddress ?
                    <InputField inputClass={styles.edit_address} 
                        className={styles.edit_address_input} 
                        register={register('state')} 
                        placeholder='Enter State' 
                    />
                : 
                    <h4>{state ? state : `${addressData.state}`}</h4>
                }
            </div>

            <div className={styles.address_body_secondary}>
                <h3>City</h3>
                {editAddress ?
                    <InputField inputClass={styles.edit_address} placeholder='City'
                        className={styles.edit_address_input}
                        register={register('city')}
                    />
                : 
                    <h4>{city ? city : `${addressData.city}`}</h4>
                }
            </div>
        </div>
        {editAddress &&
            <Button onClick={handleSaveChanges} buttonType='primary' className={styles.save_changes_btn}>
                <h4>Save changes</h4>
            </Button>
        }
    </>
  )
}

export default AddressField