'use client';
import React, { useEffect, useRef, useState } from 'react'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import { Button, Dropdown, InputField } from '@/shared'
import { useForm } from 'react-hook-form'
import { AddressDataProps, AddressesFieldProps } from '@/interface/components';
import { DeleteAddressModal, EditAddressModal } from '@/shared/modals';
import Image from 'next/image'
import styles from './AddressField.module.scss'

const AddressField = ({ index, addressData, addressesList, items, setItems}: AddressesFieldProps) => {
    const { theme }: ContextProps = useGlobalContext()
    const [isAddress, setIsAddress] = useState<any>({
        editAddress: false, 
        isOpen: false, 
        openModal: false, 
        modalOpen: false
    })
    const [inputValues, setInputValues] = useState<any>({getEmail: '', getNumber: '',
        getName: '',
        getStreet: '',
        getCity: '',
        getState: '',
    })
	const dropdownRef = useRef<HTMLDivElement>(null);
	const refNode = dropdownRef.current;

    const { register, watch } = useForm()
    const address = watch('address')
    const state = watch('state')
    const city = watch('city')
    const email = watch('email')
    const number = watch('number')
    const name = watch('name')
    const street = watch('street')
    const addressIndex = items.findIndex((item: AddressDataProps) => item.id === addressData.id);
    
	const toggleDropdown = () => {
        isAddress.isOpen ? setIsAddress({...isAddress, isOpen: false}) : setIsAddress({...isAddress, isOpen: true})
    };
    const handleSaveChanges = () => {
        // setEditAddress(false)
        setIsAddress({...isAddress, editAddress: false})
    }
    const handleDelete = () => {
		if (addressIndex !== -1) {
			const updatedList = addressesList.filter(
				(address: AddressDataProps) => address.id !== addressesList[addressIndex].id
			);
			setItems(updatedList);
            console.log(updatedList, addressIndex);
		}
	};
    const makeDefaultAddress = (id: number) => {
        const index = items.findIndex((address: AddressDataProps) => address.id === id);
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
    useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (refNode && !refNode.contains(event.target as Node)) {
				setIsAddress({...isAddress, isOpen: false});
			}
		};
		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [refNode, isAddress]);
    

  return (
    <>
        <div className={styles.address_header}>
            <h1>
                Address 
                <span> {index === 1 ? <span className={styles.default}> Default </span> : `${(index)}`}</span>
            </h1>
            <div ref={dropdownRef}>
                <div onClick={toggleDropdown} className={styles.actions_btns}>
                    <div className={styles.small_circle}></div>
                    <div className={styles.small_circle}></div>
                    <div className={styles.small_circle}></div>
                </div>
            </div>
            {isAddress.isOpen && (
                <div className={styles.dropdownMenu}>
                    <Dropdown type='small' icon1={`/svgs/edit-${theme}.svg`} 
                        icon2={`/svgs/favourite-${theme}.svg`} 
                        icon3={`/svgs/trash-red.svg`}
                        text1='Edit Address'
                        text2='Make default'
                        text3='Delete Address'
                        onClick={() => setIsAddress({...isAddress, modalOpen: true})} 
                        primaryAction={() => setIsAddress({...isAddress, openModal: true})} 
                        secondaryAction={() => makeDefaultAddress(index)}
                        index={index} 
                    />
                </div>
            )}
        </div>
        <div className={styles.address_input}>
            <h4>{name ? name : `${addressData.name}`}</h4>
            <h4>{number ? number : `${addressData.number}`}</h4>
            <h4>{street ? `${street}, ${city}, ${state}` : `${addressData.street}, ${addressData.city}, ${addressData.state}`}</h4>
        </div>
        <DeleteAddressModal handleDelete={handleDelete} isOpen={isAddress.modalOpen} 
            onClose={() => setIsAddress({...isAddress, modalOpen: false})} 
        />
        <EditAddressModal onClose={() => setIsAddress({...isAddress, openModal: false})}
            isOpen={isAddress.openModal}
            street={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} placeholder='Type street name and number' register={register('street')} />}
            name={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} placeholder='Full name' register={register('name')} />}
            number={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} customPrefix='+234| ' placeholder='Enter phone number' register={register('number')} />}
            email={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} placeholder='Enter Email Address' register={register('email')} />}
            state={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} placeholder='Select state' register={register('state')} />}
            city={<InputField inputClass={styles.edit_field_input} className={styles.input_fields} placeholder='Add city' register={register('city')} />}
        />
        {/* {isAddress.editAddress &&
            <Button onClick={handleSaveChanges} buttonType='primary' className={styles.save_changes_btn}>
                <h4>Save changes</h4>
            </Button>
        } */}
    </>
  )
}

export default AddressField