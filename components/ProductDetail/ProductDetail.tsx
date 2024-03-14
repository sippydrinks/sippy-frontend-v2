import React from 'react';
import { useGlobalContext } from '@/contexts/AppContext';
import { Carousel, RelatedProducts } from '@/shared';
import { ProductDetailComponent } from '.';

const ProductDetail = () => {
	const { drinkType } = useGlobalContext();
	return (
		<>
			<ProductDetailComponent />
			<Carousel title='similar products' isBorder={true} type='small' icon1='/svgs/StarOrange.svg' icon2='/svgs/StarOrange.svg' />
			<RelatedProducts type='soft' />
			{/* 	 <ActionButtons /> */}
		</>
	);
};

export default ProductDetail;
