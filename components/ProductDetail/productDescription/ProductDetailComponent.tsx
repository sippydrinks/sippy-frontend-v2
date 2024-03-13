import React, { useEffect, useRef, useState } from 'react';
import { ProductListing, ProductQtySummary, ProductSpecification } from './index';
import { useGlobalContext } from '@/contexts/AppContext';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import styles from './styles.module.scss';

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
				productListing.find((product: any) => {
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

	return (
		<div className={styles.details_container}>
			<div className={styles.productBio}>
				<div data-type={theme} className={styles.productBio_subtext}>
					<p>Soda</p>
					<div className={styles.chevron_icon}>
						<Image alt='' src={`/svgs/chevron-${theme}.svg`} fill />
					</div>
					<p className={styles.span_text}>Drink</p>
				</div>
				<div className={styles.productNameBg}>
					{/* <h1 data-type={themeColor}>Coca-cola</h1> */}
					<h1 data-type={theme}>{product?.productName}</h1>
				</div>
			</div>

			<div data-issticky={isSticky} className={styles.productDesc_container} ref={sectionRef}>
				<ProductSpecification type={drinkType} currentItem={product} name={product?.productName} isSticky={isSticky} />
				<ProductListing />
				<ProductQtySummary price={product?.productPrice} size={product?.productSize} isSticky={isSticky} />
			</div>
		</div>
	);
};
export default ProductDetailComponent;
