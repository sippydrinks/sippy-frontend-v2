'use client';
import React, { useState } from 'react'
import { ContextProps, useGlobalContext } from '@/contexts/AppContext';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Tabs.module.scss'

interface Props {
    tabNumber: number
}
const Tabs = ({tabNumber}: Props) => {
	const { theme }: ContextProps = useGlobalContext();
    const router = useRouter();
	const [activeTab, setActiveTab] = useState<number>(tabNumber);
  return (
    <div data-theme={theme} className={styles.tabs}>
        <div className={styles.profile_data}>
            <p>My Profile</p>
            <div className={styles.tab_item}
                onClick={() => {
                    router.push("/account");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/basicInfo-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 1 ? styles.active_tab : ""}>
                    Basic information
                </h3>
                {activeTab === 1 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
            <div
                className={styles.tab_item}
                onClick={() => {
                    router.push("/account/address");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/location-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 2 ? styles.active_tab : ""}>
                    My Addresses
                </h3>
                {activeTab === 2 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
            <div
                className={styles.tab_item}
                onClick={() => {
                    router.push("/account/favourites");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/favourite-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 3 ? styles.active_tab : ""}>
                    My favorites
                </h3>
                {activeTab === 3 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
        </div>

        <div className={styles.orders_data}>
            <p>My Orders</p>
            <div
                className={styles.tab_item}
                onClick={() => {
                    router.push("/account/ongoingOrders");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/clipboardIcon-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 4 ? styles.active_tab : ""}>
                    Ongoing Orders
                </h3>
                {activeTab === 4 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
            <div
                className={styles.tab_item}
                onClick={() => {
                    router.push("/account/completedOrders");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/clipboardTick-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 5 ? styles.active_tab : ""}>
                    Completed Orders
                </h3>
                {activeTab === 5 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
            <div
                className={styles.tab_item}
                onClick={() => {
                    router.push("/account/cancelledOrders");
                }}
            >
                <div className={styles.tab_icon}>
                    <Image
                        alt="icon"
                        fill
                        src={`/svgs/clipboardClose-${theme}.svg`}
                    />
                </div>
                <h3 className={activeTab === 6 ? styles.active_tab : ""}>
                    Cancelled Orders
                </h3>
                {activeTab === 6 && (
                    <div className={styles.icon}>
                        <Image alt="" fill src="/svgs/indicator.svg" />
                    </div>
                )}
            </div>
        </div>

        <div className={styles.tab_item}>
            <div className={styles.tab_icon}>
                <Image alt="icon" fill src="/svgs/logout.svg" />
            </div>
            <h4>Log out</h4>
        </div>
	</div>
  )
}

export default Tabs