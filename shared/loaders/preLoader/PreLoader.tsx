import React from "react";
import Image from "next/image";
import styles from "./PreLoader.module.scss";

const PreLoader = () => {
	return (
		<div className={styles.preloader}>
			<div className={styles.loader}></div>
			<div className={styles.icon_container}>
				<div className={styles.icon}>
					<Image
						src={"/svgs/logo-light.svg"}
						priority={true}
						alt="Sippy Life"
						fill
						quality={100}
					/>
				</div>
			</div>
		</div>
	);
};

export default PreLoader;
