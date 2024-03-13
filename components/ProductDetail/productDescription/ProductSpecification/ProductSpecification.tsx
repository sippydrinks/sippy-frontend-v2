import React, { useState } from 'react';
import Image from 'next/image';
import { Accordion } from '../../../../shared';
import { useGlobalContext } from '@/contexts/AppContext';
import { ProdcutSpecificationProps } from '@/interface/productDetails';
import styles from './ProductSpecification.module.scss';

const ProductSpecification = ({ type, currentItem, name, isSticky }: ProdcutSpecificationProps) => {
	const { theme, savedItems, setSavedItems } = useGlobalContext();
	const [saved, setSaved] = useState<boolean>(false);
	const handleSave = (product: object) => {
		setSaved((saved) => !saved);
		const isProductSaved = savedItems.includes(product);
		if (isProductSaved) {
			const singleProduct = savedItems.filter((item: object) => item !== product);
			setSavedItems(singleProduct);
		} else {
			setSavedItems([...savedItems, product]);
			// setSavedItems((savedItems: any) => [...savedItems, product])
		}
	};

	return (
		<div className={`${styles.productSpecContainer} ${isSticky && styles.is_sticky}`}>
			<div className={styles.productCategory}>
				<div>
					<div onClick={() => handleSave(currentItem)} data-active={saved} data-type={theme} className={styles.likedIconBg}>
						<div className={styles.likedIcon}>
							<svg width='20' height='20' viewBox='0 0 20 20' fill={saved ? 'red' : 'none'} xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M10.5166 17.3418C10.2333 17.4418 9.76663 17.4418 9.48329 17.3418C7.06663 16.5168 1.66663 13.0752 1.66663 7.24183C1.66663 4.66683 3.74163 2.5835 6.29996 2.5835C7.81663 2.5835 9.15829 3.31683 9.99996 4.45016C10.8416 3.31683 12.1916 2.5835 13.7 2.5835C16.2583 2.5835 18.3333 4.66683 18.3333 7.24183C18.3333 13.0752 12.9333 16.5168 10.5166 17.3418Z'
									stroke={theme === 'light' ? '#0B0A0A' : '#ffffff'}
									strokeWidth={saved ? '0' : '1.5'}
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</div>
					</div>
					<span>Save</span>
				</div>

				<div>
					<span>Share</span>
					<div data-type={theme} className={styles.likedIconBg}>
						<div className={styles.likedIcon}>
							<Image alt='share' src='/svgs/shareIcon.svg' fill />
						</div>
					</div>
				</div>
			</div>

			<div data-type={theme} className={styles.productContentContainer}>
				<ul>
					<li>Enriched with Minerals and Vitamins (A, B1, B2, B3, B5, B6 and C)</li>
					<li>Non Alcoholic Malt Drink</li>
					<li>Refreshment and Energy for the Body</li>
					<li>Made with Natural Ingredients</li>
					<li>33cl Can x 24 Units</li>
				</ul>
			</div>
			<Accordion title='ingredients' iconType='plus'>
				<h3>
					SKU: MA412DR1F6M7DNAFAMZ
					<br />
					Weight (kg): 1<br />
					Shop Type: Sippy / <span>{type}</span> drinks / <span>{name}</span>
				</h3>
			</Accordion>
		</div>
	);
};

export default ProductSpecification;
