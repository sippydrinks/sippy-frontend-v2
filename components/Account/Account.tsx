'use client';
import React, { useState, useEffect } from "react";
import { ActionPanel } from "../../shared";
import { AccountProps } from "@/interface/account";
import { useGlobalContext } from "@/contexts/AppContext";
import Tabs from "./Tabs/Tabs";
import Image from "next/image";
import styles from "./Account.module.scss";

const Account = ({ children, tabActive }: AccountProps) => {
	const { theme, categoryHeight } = useGlobalContext();
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
                <div className={styles.tab_web}>
                    <Tabs tabNumber={tabActive} />
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
                                <div className={styles.tab_mobile}>
                                    <Tabs tabNumber={tabActive} />
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
