import React from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import { Carousel, RelatedProducts } from '@/shared';
import { ProductDetailComponent } from '.';
import styles from './ProductDetail.module.scss';
const ProductDetail = () => {
	const { drinkType } = useGlobalContext();
	return (
		<>
			<ProductDetailComponent />
			<Carousel title='similar products' isBorder={true} type='small' icon1='/svgs/StarOrange.svg' icon2='/svgs/StarOrange.svg' />
			<RelatedProducts type='soft' />
			<section id='target_container' className={styles.target_container}></section>
			{/* 	 <ActionButtons /> */}
		</>
	);
};

export default ProductDetail;
