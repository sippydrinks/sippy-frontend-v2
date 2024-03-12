import React from 'react'
import { ActionPanelProps } from '@/interface'
import { useGlobalContext } from '@/contexts/AppContext'
import styles from './ActionPanel.module.scss'

const ActionPanel = ({children, type, className, isOpen, isClose}: ActionPanelProps) => {
  const { themeColor } = useGlobalContext()
  return (
    <div data-theme={themeColor} data-type={type} data-active={isOpen}
      className={`${styles.panel_container} ${className}`}
    >
      {children}
    </div>
  )
}

export default ActionPanel