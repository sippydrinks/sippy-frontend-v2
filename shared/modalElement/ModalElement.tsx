import React, { useEffect } from 'react'
import { useGlobalContext } from '@/contexts/AppContext';
import { ModalProps } from '@/interface';
import Image from 'next/image';
import styles from './ModalElement.module.scss'

const ModalElement = (props: ModalProps) => {
    const handleClose = () => {
        props.onClose();
    };
    const { themeColor } = useGlobalContext()
    useEffect(() => {
        document.body.style.overflow = props.isOpen ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto';
          };
    }, [props.isOpen])
  return (
    <div>
        {props.isOpen && (
            <div className={`${styles.overlay} ${props.className}`} onClick={handleClose}>
                <div data-theme={themeColor} className={`${styles.modalbody} ${props.bodyClass}`} onClick={(e) => e.stopPropagation()}>
                    {props.children}
                    <div className={`${styles.modalImage_container} ${props.className}`}>
                        {props.modalImage && 
                            <div className={`${styles.modalImage}`}>
                                <Image alt='modal-image' fill src={props.modalImage} />
                            </div>
                        }
                        
                    </div>
                </div>
                <div className={`${styles.modalImage_container_sm}`}>
                    {props.modalImage && 
                        <div className={`${styles.modalImage}`}>
                            <Image alt='modal-image' fill src={props.modalImage} />
                        </div>
                    }
                </div>
            </div>
      )}
    </div>
  )
}

export default ModalElement