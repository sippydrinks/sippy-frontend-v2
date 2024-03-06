'use client';
import React from "react";
import Image from "next/image";
import { DrinkTypeProps } from "@/interface/home";
import { ProductCard } from "../../../shared";
import { ProductData } from "@/mock";
import { useGlobalContext } from "@/contexts/AppContext";
import { Button } from "../../../shared";
import styles from "./Catalog.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { ProductCardProps } from "@/interface";

const Catalog = ({ type }: DrinkTypeProps) => {
	const { theme, drinkType, productListing } = useGlobalContext();
	const router = useRouter();
	const route = usePathname();
	
	return (
		<div className={styles.catalog_container}>
			<div className={styles.catalog_text}>
				<div data-theme={theme} className={styles.inline}>
					<div className={styles.first}>
						<span className={styles.headerTitle}>OUR DRINKS</span>
						<span className={styles.headerText}>
							Take a look at our catalog
							<span className={styles.headerText_mob}>
								of drinks, and satisfy your taste buds
							</span>
						</span>
					</div>
					<p className={styles.headerText}>Of drinks, and satisfy your</p>
					<p className={styles.headerText}>taste buds</p>
				</div>

				<div className={styles.bottle}>
					<Image alt="" fill src={`/svgs/catalogHeaderIcon-${theme}.svg`} />
				</div>
			</div>
			<div className={styles.hero_container}>
				{ProductData.slice(0, 12).map((product: ProductCardProps, index: number) => (
					<ProductCard key={index} {...product} />
				))}
			</div>

			<div data-route={route} className={styles.btn_wrapper}>
				{
					route === '/' ? 
					(
						<Button
							onClick={() => router.push(`/categories`)}
							buttonType="primary"
							className={styles.view_more}
							data-type={type}
						>
							<h3>View more drinks</h3>
						</Button>
					) : (
						<Button
							onClick={() => router.push(`/categories/alcohol`)}
							buttonType="primary"
							className={styles.view_more}
							data-type={type}
						>
							<h3>View more drinks</h3>
						</Button>
					)
				}
			</div>
		</div>
	);
};

export default Catalog;