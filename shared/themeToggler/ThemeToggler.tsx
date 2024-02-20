import React, { useState } from "react";
import { ThemeProps } from "@/interface";
import { useGlobalContext } from "@/contexts/AppContext";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./ThemeToggler.module.scss";

const ThemeToggler = ({ type }: ThemeProps) => {
	const [imageSrc, setImageSrc] = useState<string>("/svgs/lightModeToggle.svg");
	const { themeColor, setThemeColor }: any = useGlobalContext();
	const router = useRouter()
	const route = router.asPath
	const urlCheck = route.includes('/alcohol')
	

	const handleToggle = () => {
		setThemeColor(themeColor === "light" ? "dark" : "light");
		setImageSrc(
			themeColor === "light"
				? "/svgs/DarkModeToggle.svg"
				: "/svgs/lightModeToggle.svg"
		);
	};

	return (
		<>
			<div onClick={handleToggle} data-theme={themeColor} data-url={urlCheck}
				className={styles.imgContainer_lightbg}
			>
				{/* <div className={imageSrc === '/svgs/lightModeToggle.svg' ? `${styles.imgContainer_lightbg}` : `${styles.imgContainer_darkbg}`}> */}
				<div className={styles.imgContainer}>
					<Image alt="toggle" fill src={`/svgs/${themeColor}ModeToggle.svg`} />
				</div>
			</div>
		</>
	);
};

export default ThemeToggler;
