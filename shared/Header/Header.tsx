'use client';
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGlobalContext } from "@/contexts/AppContext";
import { HeaderProps } from "@/interface";
import { Logo, ThemeToggle, ButtonNav, Dropdown } from "@/shared";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

const Header = ({isNavButton = false}: HeaderProps) => {
	const route = usePathname()
	const { theme, cartDetails, drinkType } = useGlobalContext();
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [collapsed, setCollapsed] = useState<boolean>(true);

	const toggleDropdown = () => setIsOpen(!isOpen);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const refNode = dropdownRef.current;

	useEffect(() => {
		if (!collapsed) {
			document.body.classList.add("no-scroll");
		} else {
			document.body.classList.remove("no-scroll");
		}

		return () => {
			// Cleanup to remove the class when the component unmounts
			document.body.classList.remove("no-scroll");
		};
	}, [collapsed]);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (refNode && !refNode.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [refNode]);
	
	return (
		<header className={`${styles.header}`} data-type={theme} data-value={drinkType}>
			<div className={styles.small_row}>
				<Hamburger collapsed={collapsed} setCollapsed={setCollapsed} />
				<Link href="/">
					<div
						className={styles.header_logoContainer}
						onClick={() => setCollapsed(true)}
					>
						<Logo />
					</div>
				</Link>
				<div className={styles.desk_view}>
					<ThemeToggle />
				</div>
			</div>
			<div
				className={
					styles[!collapsed ? "header_wrapper" : "header_wrapper__collapsed"]
				}
				data-active={!collapsed}
			>
				<div className={styles.mob_view}>
					<ThemeToggle />
				</div>
				<div data-buttons={isNavButton} className={styles.buttons}>
					<ButtonNav />
				</div>
			</div>
			<div ref={dropdownRef} className={styles.small_row}>
				<div className={styles.button_container}>
					<div className={styles.icon}>
						<Image src={`/svgs/search-${theme}.svg`} alt="icon" fill />
					</div>
				</div>
				<div className={`${styles.button_container} ${styles.desk_view}`}>
					<div className={styles.icon}>
						<Image src={`/svgs/bell-${theme}.svg`} alt="icon" fill />
					</div>
				</div>
				<div onClick={toggleDropdown} className={styles.button_container}>
					<div className={styles.icon}>
						<Image alt="icon" fill src={`/svgs/User-${theme}.svg`} />
					</div>
					{isOpen && (
						<div className={styles.dropdownMenu}>
							<Dropdown />
						</div>
					)}
				</div>
				<div className={styles.mob_view}>
					<Link href="/cart">
						<div data-type={theme} className={styles.button_container}>
							<div className={styles.icon}>
								<Image alt="cart" fill
									src={`/svgs/cart-${theme}.svg`} />
							</div>
							<div data-route={route.includes('/alcohol')} className={styles.item}>
								<p data-type={theme}
									className={styles.cart_container_text}
								>
									{cartDetails?.cartQuantity}
								</p>
							</div>
						</div>
					</Link>
				</div>
				<div className={styles.desk_view}>
					<Link href="/cart">
						<div data-type={theme} className={styles.cart_button}>
							<div className={styles.cart_icon}>
								<Image alt="cart" fill
									src={`/svgs/cart-${theme}.svg`} />
							</div>
							<p data-type={theme}
								className={styles.cart_container_text}
							>
								₦{cartDetails?.cartAmount} ({cartDetails?.cartQuantity})
							</p>
						</div>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;

function Hamburger({ collapsed, setCollapsed }: any) {
	const handleToggleClick = () => {
		setCollapsed(!collapsed);
	};
	return (
		<div className={styles.controls}>
			<button
				aria-hidden="true"
				onClick={handleToggleClick}
				aria-pressed={!collapsed}
			>
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
					<rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="6.25" />
					<rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="11.25" />
					<rect width="18" height="1.5" fill="red" ry="0.75" x="3" y="16.25" />
				</svg>
			</button>
		</div>
	);
}
