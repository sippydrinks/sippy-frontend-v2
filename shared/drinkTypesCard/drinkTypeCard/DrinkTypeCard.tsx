import React from 'react';
import Image from 'next/image';
import { DrinkTypeCardProps } from '@/interface';
import { Button } from '@/shared';
import { usePathname } from 'next/navigation';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './DrinkTypeCard.module.scss';

const DrinkTypeCard = ({ id, bg, icon, buttonText }: DrinkTypeCardProps) => {
	const { themeColor } = useGlobalContext();
	const route = usePathname();
	return (
		<div key={id} className={styles.card} style={{ background: `${bg}` }}>
			<div className={styles.btn_container}>
				<h3>{buttonText}</h3>
				<Button buttonType='transparent' className={styles.btn}>
					<p data-theme={themeColor}>View all</p>
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
