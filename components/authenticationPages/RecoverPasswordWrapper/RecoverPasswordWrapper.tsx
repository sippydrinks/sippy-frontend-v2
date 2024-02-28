import React from 'react';
import styles from './RecoverPasswordWrapper.module.scss';

interface Props {
	title: string;
	subTitle: string;
	description: string;
}
const RecoverPasswordWrapper = ({ title, subTitle, description }: Props) => {
	return (
		<section className={styles.recover_password_wrapper}>
			<div className={styles.subTitle_icon}>
				<p>{subTitle}</p>
			</div>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.description}>{description}</p>
		</section>
	);
};

export default RecoverPasswordWrapper;
