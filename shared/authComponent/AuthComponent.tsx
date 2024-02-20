import React from "react";
import { AuthComponentProps } from "@/interface";
import { useGlobalContext } from "@/contexts/AppContext";
import { AuthBanner, Button, Logo } from "@/shared";
import styles from "./AuthComponent.module.scss";

const AuthComponent = (props: AuthComponentProps) => {
	 const { themeColor } = useGlobalContext();
	return (
		<div className={`${styles.auth_container} ${props.className}`}>
			<div className={styles.logo}>
				<Logo type={themeColor} />
			</div>
			<div className={styles.banner}>
				<AuthBanner bgColor={props.bgColor} bannerText={props.bannerText} />
			</div>
			<div>
				<h1>{props.header}</h1>
			</div>
			<div className={styles.children}>{props.children}</div>
			<Button type="submit" buttonType="primary" className={styles.auth_btn}>
				<h3>{props.btnText}</h3>
			</Button>
		</div>
	);
};

export default AuthComponent;
