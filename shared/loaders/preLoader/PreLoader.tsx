'use client';
import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './PreLoader.module.scss';

const PreLoader = () => {
	const { theme } = useGlobalContext();
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const load = setTimeout(() => setLoading(false), 2000);
		return () => {
			clearTimeout(load);
		};
	}, []);
	return (
		<>
			{loading ? (
				<div className={styles.preloader}>
					<div className={styles.loader}></div>
					<div className={styles.icon_container}>
						<div className={styles.icon}>
							<Image src={`/svgs/logo-${theme}.svg`} priority={true} alt='Sippy Life' fill quality={100} />
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default PreLoader;
