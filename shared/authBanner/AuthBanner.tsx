import React from "react";
import { AuthBannerProps } from "@/interface";
import Image from "next/image";
import styles from "./AuthBanner.module.scss";

const AuthBanner = ({ bgColor, bannerText, className }: AuthBannerProps) => {
	return (
		<div
			style={{ background: `${bgColor}` }}
			className={`${styles.banner} ${className}`}
		>
			<h3>{bannerText}</h3>
			<div className={styles.bannerImg}>
				<Image alt="" fill src="/svgs/emoji.svg" />
			</div>
		</div>
	);
};

export default AuthBanner;
