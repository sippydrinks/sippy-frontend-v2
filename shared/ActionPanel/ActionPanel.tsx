import React from 'react'
import { ActionPanelProps } from '@/interface'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext'
import styles from './ActionPanel.module.scss'

const ActionPanel = ({children, type = 'small', className, isOpen}: ActionPanelProps) => {
  const { theme }: ContextProps = useGlobalContext()
  return (
    <div data-theme={theme} data-type={type} data-active={isOpen}
      className={`${styles.panel_container} ${className}`}
    >
      {children}
    </div>
  )
}

export default ActionPanel