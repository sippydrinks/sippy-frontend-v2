'use client';
import React, { useState, useEffect } from "react";
import { ActionPanel } from "../../shared";
import { AccountProps } from "@/interface/account";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/contexts/AppContext";
import Image from "next/image";
import styles from "./Account.module.scss";

const Account = ({ children, tabActive }: AccountProps) => {
	const { theme, categoryHeight } = useGlobalContext();
	const router = useRouter();
	const [activeTab, setActiveTab] = useState<number>(tabActive);
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [openFilter, setOpenFilter] = useState<boolean>(false);
	useEffect(() => {
		const handleScroll = () => {
			const componentHeight = window.innerHeight;
			const scrollY = window.scrollY;
			const fullScrollHeight = componentHeight + scrollY;
			const heightOfPage = document.documentElement.scrollHeight;
			const heightWithoutFooter = heightOfPage - categoryHeight;
			if (fullScrollHeight <= heightWithoutFooter) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [categoryHeight]);
	useEffect(() => {
        document.body.style.overflow = openFilter ? 'hidden' : 'auto'
        return () => {
            document.body.style.overflow = 'auto';
          };
    }, [openFilter])
	return (
		<div data-theme={theme} className={styles.account_body}>
			<div className={styles.accountInfo_body}>
				<div className={styles.tabs}>
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
				<div className={styles.tab_body}>{children}</div>
                <div data-active={isVisible} className={styles.action_panel_container}>
                    <ActionPanel className={styles.action_panel}>
                        <div className={styles.action_panel_header}>
                            <div
                                className={styles.filter_container}
                                onClick={() => setOpenFilter(!openFilter)}
                            >
                                <h3>Menu</h3>
                                <div className={styles.filter_icon}>
                                    <Image alt="" fill src={`/svgs/filterIcon-${theme}.svg`} />
                                </div>
                            </div>
                        </div>
                        <div data-active={openFilter} className={styles.filter_body}>
                            <div className={styles.filter_content}>
                                <div className={styles.filter_header}>
                                    <div
                                        onClick={() => setOpenFilter(!openFilter)}
                                        className={styles.back_arrow}
                                    >
                                        <Image alt="" fill src={`/svgs/arrow-left-${theme}.svg`} />
                                    </div>
                                    <div
                                        className={styles.filter_icon}
                                        onClick={() => setOpenFilter(!openFilter)}
                                    >
                                        <Image alt="" fill src={`/svgs/plus-${theme}.svg`} />
                                    </div>
                                </div>
                                <div className={styles.tab}>
                                    <div className={styles.profile_data}>
                                        <p>My profile</p>
                                        <div
                                            className={styles.tab_item}
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
                                            <h3
                                                className={
                                                    activeTab === 1
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                Basic information
                                            </h3>
                                            {activeTab === 1 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
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
                                            <h3
                                                className={
                                                    activeTab === 2
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                My Addresses
                                            </h3>
                                            {activeTab === 2 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
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
                                            <h3
                                                className={
                                                    activeTab === 3
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                My favorites
                                            </h3>
                                            {activeTab === 3 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
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
                                            <h3
                                                className={
                                                    activeTab === 4
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                Ongoing Orders
                                            </h3>
                                            {activeTab === 4 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
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
                                            <h3
                                                className={
                                                    activeTab === 5
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                Completed Orders
                                            </h3>
                                            {activeTab === 5 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
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
                                            <h3
                                                className={
                                                    activeTab === 6
                                                        ? styles.active_tab
                                                        : ""
                                                }
                                            >
                                                Cancelled Orders
                                            </h3>
                                            {activeTab === 6 && (
                                                <div className={styles.icon}>
                                                    <Image
                                                        alt=""
                                                        fill
                                                        src="/svgs/indicator.svg"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className={styles.tab_item}>
                                        <div className={styles.tab_icon}>
                                            <Image
                                                alt="icon"
                                                fill
                                                src="/svgs/logout.svg"
                                            />
                                        </div>
                                        <h4>Log out</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ActionPanel>
                </div>
			</div>
		</div>
	);
};

export default Account;
