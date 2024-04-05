'use client';
import React from "react";
import { ItemDetailsCard } from "@/shared";
import { accountData } from "@/mock";
import { useGlobalContext } from "@/contexts/AppContext";
import styles from "./Favourites.module.scss";

const Favourites = () => {
	const { cart, savedItems }: any = useGlobalContext();

	return (
		<div className={styles.cardDetails_container}>
			{accountData.length > 0 ?
				accountData.map((item: any, index: number) => (
					<ItemDetailsCard key={index} {...item} cardType='account' />
				)) 
			: 
				<div className={styles.emptyCart}>
					<h1>There are currently no saved items in Favourites!</h1>
				</div>
			}
		</div>
	);
};

export default Favourites;
