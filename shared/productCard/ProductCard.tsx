'use client';
import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { Button } from '..';
import { useGlobalContext } from '@/contexts/AppContext';
import { usePathname } from 'next/navigation';
import { ProductCardProps } from '@/interface';
import { formatNum, formatURL } from '@/utils';;
import Link from 'next/link';
import Image from 'next/image';
import styles from './ProductCard.module.scss';

const Product = (data: ProductCardProps) => {
	const { theme, drinkType, setCart }: any = useGlobalContext();
	const route = usePathname()
	const urlCheck = route.includes('/alcohol')
	const [isHover, setIsHover] = useState<boolean>(false);
	const onHover = () => {
		setIsHover(true);
	};
	const offHover = () => {
		setIsHover(false);
	};
	const handleSvgColor = () => {
		const softColors: any = {
			dark: '#8C549A',
			light: '#540068',
		};

		const alcoholColors: any = {
			dark: '#D56C3D',
			light: '#FFE4DB',
		};

		return drinkType === 'soft' ? softColors[theme] : alcoholColors[theme];
	};

	const addToCart = () => {
		const productData = { ...data, cartProductQuantity: 1 };

		setCart((prevCart: any[]) => {
			const itemIndex = prevCart.findIndex((item: any) => item.id === data.id);
			if (itemIndex !== -1) {
				// If the item is already in the cart, create a new array with the updated item
				toast.success(
					`One more ${productData.productName} has been added to cart`
				);
				return [
					...prevCart.slice(0, itemIndex),
					{
						...prevCart[itemIndex],
						cartProductQuantity: prevCart[itemIndex].cartProductQuantity + 1,
					},
					...prevCart.slice(itemIndex + 1),
				];
			} else {
				// If the item is not in the cart, create a new array with the added item
				toast.success(`${productData.productName} was added to cart`);
				return [...prevCart, productData];
			}
		});
	};

	return (
		<div className={styles.card} data-theme={theme}>
			<Link href={`/productDetails/${formatURL(data.productName)}`}>
				<div className={styles.clip} data-active={isHover} onMouseEnter={onHover} onMouseLeave={offHover}>
					<svg viewBox='-10 0 350 250' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<use href='#original-svg' stroke={theme === 'dark' ? 'white' : 'black'} strokeWidth='6' className={styles.svg_stroke} />
						<path
							id='original-svg'
							className={styles.svg}
							data-theme={theme}
							data-type={drinkType}
							data-route={route}
							d='M42.6643 80.6172C46.8295 84.3008 59.8571 93.0964 68.094 88.6436C69.8219 87.7095 73.7717 81.1506 71.9302 74.4502C71.0899 71.2707 70.1326 63.9344 73.0263 60.0258C75.3281 57.8157 77.1257 56.6757 88.7006 60.0258C93.2312 61.6544 104.178 64.9115 111.719 64.9115C115.19 64.485 121.935 61.4683 121.145 52.8137C120.926 50.0218 118.734 42.0419 111.719 32.4567C110.002 28.773 107.203 19.4747 109.746 11.7507C111.317 7.83457 117.331 0.00231054 128.818 0.00231054C130.608 -0.0364647 135.877 0.397818 142.629 2.44515C146.758 4.42268 156.966 9.44795 164.77 13.7287C167.584 15.1634 175.227 18.0328 183.295 18.0328C186.364 17.645 193.269 16.4973 196.338 15.0083C198.713 13.7675 206.137 10.9369 216.835 9.5409C219.612 9.26947 225.56 10.4017 227.139 17.1021C227.723 19.9714 228.542 27.1061 227.139 32.6897C226.335 35.5203 225.736 42.2982 229.769 46.7651C231.267 48.4715 236.302 51.8843 244.457 51.8843C251.399 51.8068 267.717 52.6986 277.45 56.8863C283.369 58.7475 295.733 66.5646 297.838 82.9433C298.203 86.3167 298.188 93.715 295.207 96.3207C292.503 98.4921 285.934 102.393 281.286 100.625C278.217 99.8105 271.158 100.392 267.475 109.233C266.891 110.706 265.634 114.072 265.283 115.747C265.027 117.414 264.911 122.215 266.489 128.078C267.147 130.171 268.265 134.731 267.475 136.22C267.073 137.035 265.919 138.733 264.516 139.012C262.36 139.439 256.953 140.873 253.884 145.177C252.824 146.884 251.341 153.39 253.884 165.767C255.528 172.281 258.093 188.334 255.199 200.432C254.103 204.271 250.902 213.368 246.869 219.044C244.055 223.038 236.478 231.491 228.673 233.352C225.86 233.856 219.181 234.562 214.972 233.352C211.026 232.073 201.271 226.001 193.817 211.948C190.931 207.567 183.075 200.525 174.745 207.412C165.282 215.361 142.892 232.631 129.037 238.122C122.205 240.72 105.164 242.635 91.6601 229.514C87.8237 224.822 82.8474 212.879 93.6331 202.642C99.3328 198.765 110.294 189.172 108.54 181.82C107.956 178.64 102.402 172.886 84.8642 175.306C64.769 178.447 21.2024 181.634 7.69835 169.257C1.88899 162.006 -6.24411 145.666 7.69835 138.314C17.1979 133.584 35.8464 121.703 34.4435 112.025C32.1783 99.0742 30.651 74.6613 42.6643 80.6172Z'
							fill={handleSvgColor()}
						/>
					</svg>
					<div className={styles.icon_container}>
						<div className={styles.icon}>
							<Image src={urlCheck === false ? data.productImage : data.productImageAlcohol}
								alt=''
								fill
							/>
						</div>
					</div>
				</div>
			</Link>
			<div className={styles.text}>
				<h3>{data && urlCheck === false ? data.productName : data.productNameAlcohol}</h3>
				<p>NGN{formatNum(data.productPrice)}</p>
			</div>
			<Button className={styles.button} buttonType="primary" onClick={addToCart}>
				<h4 data-theme={theme}>Add to cart</h4>
			</Button>
		</div>
	);
};

export default Product;