import React from "react";
import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo = () => {
	const { theme }: ContextProps = useGlobalContext()
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image
					src={`/svgs/logo-${theme}.svg`}
					priority={true}
					alt="Sippy Life"
					fill
					quality={100}
				/>
			</div>
		</div>
	);
};

export default Logo;
