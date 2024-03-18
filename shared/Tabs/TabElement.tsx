import React, { useState } from 'react'
import { TabProps } from '@/interface'
import styles from './TabElement.module.scss'

const TabElement = ({ tabHeader, tabHeader2, children, className, activeTabIndex }: TabProps) => {
    const [activeTab, setActiveTab] = useState(1)
    const ToggleTab = (activeTabIndex: number) => {
        setActiveTab(activeTabIndex);
        console.log(activeTab);
    }
  return (
    <div className={styles.tab_container}>
        <div className={styles.tabHeader_container}>
            <div className={activeTab === 1 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(activeTabIndex)}>
                <h3>{tabHeader}</h3>
            </div>
            <div className={activeTab === 2 ? styles.tab_active : styles.tab} onClick={() => ToggleTab(activeTabIndex)}>
                <h3>{tabHeader2}</h3>
            </div>
        </div>

        <div className={styles.tabcontent_container}>
            {/* {activeTab && activeTabIndex === 1 ? 
                <div className={`${styles.TabBody} ${className}`}>{children}</div> : null
            }
            {activeTab && activeTabIndex === 2 ? 
                <div className={`${styles.TabBody} ${className}`}>{children}</div> : null
            } */}
            {activeTabIndex === 1 && <div className={`${styles.TabBody} ${className}`}>{children}</div>}
            {activeTabIndex === 2 && <div className={`${styles.TabBody} ${className}`}>{children}</div>}
        </div>
    </div>
  )
}

export default TabElement