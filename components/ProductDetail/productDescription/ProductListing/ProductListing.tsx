import React from 'react';
import productListData from '@/mock/productListData';
import { ProductListingCard } from '..';
import Image from 'next/image';
import styles from './ProductListing.module.scss';

const ProductListing = ({ isSticky }: { isSticky: boolean }) => {
	return (
		<div className={styles.productListing_container}>
			{productListData.map((item) => {
				return <ProductListingCard key={item.id} productQtyIcon={item.productQtyIcon} />;
			})}
			<div className={styles.bannerAndTag}>
				<div className={styles.banner_container}>
					<Image alt='' src='/svgs/productBanner.svg' fill />
				</div>
				<div className={styles.banner_tag}>
					<p>2/2</p>
				</div>
			</div>
		</div>
	);
};

export default ProductListing;
