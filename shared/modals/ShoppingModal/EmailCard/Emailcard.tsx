import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Emailcard.module.scss'
import Image from 'next/image'


interface Props {
    image: string
    name?: string
    email?: string
}
const Emailcard = ({image, name, email}: Props) => {
    const [copy, setCopy] = useState('')
    const handleCopy = async (email: any) => {
        try {
          await navigator.clipboard.writeText(email);
          (toast('Copied!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: 'success'
          }));
        } catch (err) {
          setCopy('Failed to copy text');
        }
      };
  return (
    <div className={styles.card}>
        <div className={styles.cardImage}>
            <Image alt='image' fill src={image} />
        </div>
        <div className={styles.cardBody}>
            <div className={styles.cardBodyText}>
                <h3>{email}</h3>
                <p>{name}</p>
            </div>

            <div onClick={() => handleCopy(email)} className={styles.copy}>
                <h3>Copy email</h3>
            </div>
        </div>
    </div>
  )
}

export default Emailcard