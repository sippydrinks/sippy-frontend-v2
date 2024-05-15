'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ProductListing, ProductQtySummary, ProductSpecification } from './index';
import { useGlobalContext } from '@/contexts/AppContext';
import { useParams } from 'next/navigation';
import { ProductData } from '@/mock';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Carousel } from '@/shared';

const ProductDetailComponent = () => {
	const { theme, productListing, drinkType, setDrinkType } = useGlobalContext();
	const [isSticky, setIsSticky] = useState<boolean>(false);
	const sectionRef = useRef<HTMLDivElement>(null);
	const [product, setProduct] = useState<any>({});
	const params = useParams();
	const { slug } = params;

	useEffect(() => {
		const fetchProductDetails = () => {
			if (slug && productListing) {
				ProductData.find((product: any) => {
					if (product.slug === slug) {
						setProduct(product);
					}
				});
			}
		};
		fetchProductDetails();
	}, [productListing, slug]);

	const handleScroll = () => {
		const section = sectionRef.current;
		if (section) {
			const rect = section.getBoundingClientRect();
			// Add the 'sticky' class when the top of the section touches the top of the viewport
			if (rect.top <= 50) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	console.log(product);

	return (
		<div className={styles.details_container}>
			<div className={styles.carousel_container}>
				{product?.isPromo && 
					<Carousel isBorder 
						bgColor={theme === 'light' ? '#EDFADE' : '#24380F'} 
						title='BUY 5 GET 1 FREE'
						icon1='/svgs/promo.svg'
						icon2='/svgs/promo.svg'
						type='x_small'
					/>
				}
			</div>
			<div className={styles.productBio}>
				<div data-type={theme} className={styles.productBio_subtext}>
					<p>Soda</p>
					<div className={styles.chevron_icon}>
						<Image alt='' src={`/svgs/chevron-${theme}.svg`} fill />
					</div>
					<p className={styles.span_text}>Drink</p>
				</div>
				<div className={styles.productNameBg}>
					<h1 data-type={theme}>{product?.productName}</h1>
				</div>
			</div>

			<div className={styles.productDesc_container} ref={sectionRef}>
				<ProductSpecification type={drinkType} currentItem={product} name={product?.productName} isSticky={isSticky} />
				<ProductListing isSticky={isSticky} />
				<ProductQtySummary price={product?.productPrice} size={product?.productSize} isSticky={isSticky} />
			</div>
		</div>
	);
};
export default ProductDetailComponent;
