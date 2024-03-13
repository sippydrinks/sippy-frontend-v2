import React from 'react';
import { DrinkTypeCardProps } from '@/interface';
import { Button } from '@/shared';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/contexts/AppContext';
import Image from 'next/image';
import styles from './DrinkTypeCard.module.scss';

const DrinkTypeCard = ({ id, bg, icon, buttonText }: DrinkTypeCardProps) => {
	const { theme } = useGlobalContext();
	const route = usePathname();
	const checkRoute = route.includes('/categories');
	return (
		<div key={id} className={styles.card} data-checkroute={checkRoute} style={{ background: `${bg}` }}>
			<div data-checkroute={checkRoute} className={styles.btn_container}>
				<h3>{buttonText}</h3>
				<Button buttonType='transparent' className={styles.btn}>
					<p data-theme={theme}>View all</p>
				</Button>
			</div>

			<div data-route={route} className={styles.image}>
				<div className={styles.imageCont}>
					<Image alt='drink' src={icon} fill />
				</div>
			</div>
		</div>
	);
};

export default DrinkTypeCard;
