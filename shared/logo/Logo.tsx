import styles from './Logo.module.scss';
import React from 'react';
import Image from 'next/image';

interface Props {
	type?: 'light' | 'dark';
}

const Logo = ({ type }: Props) => {
	return (
		<div className={styles.logo}>
			<Image
				src={type === 'light' ? '/svgs/logo-white.svg' : '/svgs/logo-black.svg'}
				// loading="eager"
				priority={true}
				alt='Sippy Life'
				sizes='100vw'
				fill
				quality={100}
			/>
		</div>
	);
};

export default Logo;
