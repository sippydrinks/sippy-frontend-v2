import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ProductListingCardProps } from '@/interface/productDetails';
import { useGlobalContext } from '@/contexts/AppContext';
import styles from './ProductListingCard.module.scss';

const ProductListingCard = ({ productQtyIcon, quantity }: ProductListingCardProps) => {
	const [hover, setHover] = useState<boolean>(false);
	const { themeColor } = useGlobalContext();
	const pathname = usePathname();

	const handleSvgPathColor = () => {
		const softColors: any = {
			dark: '#8C549A',
			light: '#540068',
		};
		const alcoholColors: any = {
			dark: '#D56C3D',
			light: '#FFECEB',
		};
		return pathname !== '/alcohol' ? softColors[themeColor] : alcoholColors[themeColor];
	};

	return (
		<div className={styles.productcard}>
			<div className={styles.clippath_img} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} data-active={hover}>
				<svg className={styles.clippath_img} width='471' height='379' viewBox='0 0 471 379' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<use href='svg_ID' stroke={themeColor === 'dark' ? 'white' : 'black'} strokeWidth='6' className={styles.svg_stroke} />
					<path
						d='M67.3741 127.308C73.9516 133.125 94.5244 147.015 107.532 139.983C110.26 138.508 116.498 128.15 113.59 117.569C112.263 112.548 110.751 100.963 115.321 94.7908C118.956 91.3006 121.794 89.5003 140.073 94.7908C147.228 97.3626 164.514 102.506 176.423 102.506C181.904 101.833 192.555 97.0687 191.309 83.4016C190.962 78.9928 187.501 66.3912 176.423 51.2545C173.711 45.4374 169.291 30.7538 173.307 18.5563C175.788 12.3721 185.285 0.00364874 203.425 0.00364874C206.252 -0.0575838 214.572 0.62822 225.235 3.8613C231.755 6.98416 247.876 14.9199 260.2 21.68C264.643 23.9456 276.713 28.4768 289.453 28.4768C294.299 27.8644 305.204 26.052 310.051 23.7006C313.801 21.7412 325.525 17.2712 342.419 15.0667C346.804 14.638 356.197 16.426 358.69 27.007C359.613 31.5382 360.905 42.805 358.69 51.6225C357.421 56.0925 356.474 66.7959 362.844 73.8499C365.21 76.5446 373.16 81.934 386.039 81.934C397.001 81.8115 422.769 83.2198 438.14 89.833C447.487 92.7721 467.012 105.117 470.335 130.981C470.912 136.308 470.889 147.992 466.181 152.106C461.911 155.535 451.537 161.695 444.198 158.903C439.351 157.617 428.204 158.536 422.388 172.497C421.465 174.824 419.48 180.139 418.926 182.784C418.522 185.417 418.338 192.998 420.83 202.256C421.869 205.562 423.634 212.763 422.388 215.115C421.754 216.401 419.93 219.083 417.715 219.523C414.311 220.197 405.771 222.463 400.925 229.259C399.251 231.954 396.909 242.228 400.925 261.774C403.521 272.061 407.571 297.411 403.002 316.516C401.271 322.578 396.217 336.943 389.847 345.907C385.404 352.214 373.437 365.563 361.113 368.502C356.67 369.298 346.123 370.413 339.477 368.502C333.245 366.482 317.84 356.892 306.07 334.702C301.511 327.783 289.106 316.663 275.951 327.538C261.008 340.09 225.65 367.363 203.771 376.034C192.982 380.136 166.072 383.161 144.747 362.44C138.688 355.031 130.83 336.171 147.862 320.006C156.863 313.883 174.172 298.734 171.403 287.124C170.48 282.103 161.71 273.016 134.015 276.837C102.281 281.797 33.4822 286.83 12.157 267.285C2.98304 255.834 -9.86049 230.031 12.157 218.421C27.1584 210.951 56.6074 192.189 54.3921 176.906C50.8148 156.455 48.4031 117.903 67.3741 127.308Z'
						fill={handleSvgPathColor()}
						id='svg_ID'
						className={styles.svg_path}
						data-theme={themeColor}
					/>
				</svg>
				<div className={styles.qtyImage}>
					<Image alt='' fill src={productQtyIcon} />
				</div>
			</div>
			{quantity === undefined ? (
				<></>
			) : (
				<div className={styles.quantityTag}>
					<div className={styles.quantityWrapper}>
						<h3>{quantity}</h3>
					</div>
				</div>
			)}
			<div className={styles.tag}>
				<p>1/2</p>
			</div>
		</div>
	);
};

export default ProductListingCard;
