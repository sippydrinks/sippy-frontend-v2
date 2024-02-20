import React, { useState } from "react";
import { Button, Counter } from "@/shared";
import { useGlobalContext } from "@/contexts/AppContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { CartDetailsCardProps } from "@/interface";
import Image from "next/image";
import styles from "./ItemDetailsCard.module.scss";

const CartDetailsCard = ({ data, cardType = 'cart' }: any) => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const { themeColor, setCart, cart, setReRender, drinkType } = useGlobalContext();
	const router = useRouter();
	const route = router.asPath;
	const handleSvgColor = () => {
		const softColors: any = {
			dark: "#8C549A",
			light: "#540068",
		};

		const alcoholColors: any = {
			dark: "#D56C3D",
			light: "#FFE4DB",
		};

		return drinkType === "soft" ? softColors[themeColor] : alcoholColors[themeColor];
	};

	const localCart = cart;
	const itemIndex = localCart.findIndex((item: any) => item.id === data.id);

	const handleDelete = () => {
		if (itemIndex !== -1) {
			const updatedState = localCart.filter(
				(cartItem: any) => cartItem.id !== localCart[itemIndex].id
			);
			setCart(updatedState);
		}
		toast.success(`${data.productName} has been successfully removed from cart`);
	};

	const handleItemIncrement = () => {
		setCart((prevCart: any[]) => {
			if (itemIndex !== -1) {
				// If the item is already in the cart, create a new array with the updated item
				return [
					...prevCart.slice(0, itemIndex),
					{
						...prevCart[itemIndex],
						cartProductQuantity: prevCart[itemIndex].cartProductQuantity + 1,
					},
					...prevCart.slice(itemIndex + 1),
				];
			}
		});
	};
	const handleItemDecrement = () => {
		setCart((prevCart: any[]) => {
			if (itemIndex !== -1 && prevCart[itemIndex].cartProductQuantity > 1) {
				// If the item is already in the cart, create a new array with the updated item
				return [
					...prevCart.slice(0, itemIndex),
					{
						...prevCart[itemIndex],
						cartProductQuantity: prevCart[itemIndex].cartProductQuantity - 1,
					},
					...prevCart.slice(itemIndex + 1),
				];
			}
			toast.error(`Please delete ${prevCart[itemIndex].productName}`);
			return prevCart;
			// if (prevCart[itemIndex].cartProductQuantity < 1) {
			// 	const updatedState = localCart.filter(
			// 		(cartItem: any) => cartItem.id !== localCart[itemIndex].id
			// 	);
			// 	setCart(updatedState);
			// }
		});
	};

	return (
		<section
			data-quantity={data.productQuantity}
			data-theme={themeColor}
			data-type={cardType}
			className={`${styles.card_container} ${data.className}`}
		>
			<div className={styles.product_details}>
				<div
					className={styles.productImage_container}
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
					data-hover={isHover}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="125"
						height="101"
						viewBox="0 0 125 101"
						fill="none"
					>
						<use
							href="svgPath_ID"
							stroke={themeColor === "dark" ? "#FFF" : "#000"}
							strokeWidth={4}
							className={styles.svg_stroke}
						/>
						<path
							d="M17.7927 33.6206C19.5298 35.1568 24.9628 38.8249 28.3979 36.968C29.1186 36.5784 30.7658 33.8431 29.9978 31.0487C29.6473 29.7227 29.2481 26.6632 30.4549 25.0332C31.4149 24.1115 32.1645 23.636 36.9917 25.0332C38.8812 25.7124 43.4463 27.0707 46.5913 27.0707C48.0388 26.8928 50.8516 25.6348 50.5225 22.0254C50.4311 20.8611 49.5168 17.5332 46.5913 13.5357C45.8751 11.9995 44.7079 8.12175 45.7684 4.90052C46.4236 3.26733 48.9317 0.00096359 53.7223 0.00096359C54.469 -0.0152072 56.6662 0.165906 59.482 1.01973C61.2039 1.84444 65.4612 3.94018 68.7159 5.72544C69.8892 6.32376 73.0768 7.5204 76.4412 7.5204C77.7211 7.35869 80.601 6.88003 81.8809 6.25907C82.8714 5.74161 85.9676 4.56113 90.4291 3.97894C91.5871 3.86574 94.0678 4.33793 94.726 7.13225C94.9698 8.32889 95.3111 11.3043 94.726 13.6329C94.3908 14.8134 94.1409 17.6401 95.8231 19.5029C96.4478 20.2146 98.5475 21.6378 101.949 21.6378C104.844 21.6055 111.649 21.9774 115.708 23.7239C118.176 24.5001 123.333 27.7601 124.21 34.5907C124.363 35.9975 124.357 39.0829 123.113 40.1696C121.986 41.0752 119.246 42.702 117.308 41.9646C116.028 41.625 113.084 41.8676 111.548 45.5545C111.304 46.169 110.78 47.5726 110.634 48.2712C110.527 48.9665 110.478 50.9685 111.137 53.4135C111.411 54.2868 111.877 56.1884 111.548 56.8094C111.38 57.149 110.899 57.8573 110.314 57.9737C109.415 58.1516 107.16 58.7499 105.88 60.5449C105.438 61.2564 104.819 63.9698 105.88 69.1316C106.565 71.8483 107.635 78.543 106.428 83.5883C105.971 85.1892 104.636 88.9829 102.954 91.3503C101.781 93.0159 98.6207 96.5411 95.366 97.3173C94.1927 97.5275 91.4073 97.8219 89.652 97.3173C88.0063 96.7837 83.938 94.2513 80.8296 88.391C79.6258 86.5637 76.3498 83.6271 72.8757 86.499C68.9292 89.8141 59.5918 97.0166 53.8138 99.3063C50.9644 100.39 43.8577 101.189 38.226 95.7164C36.626 93.7598 34.5507 88.7791 39.0488 84.51C41.4258 82.893 45.997 78.8923 45.2656 75.8263C45.0218 74.5003 42.7057 72.1005 35.3918 73.1096C27.0113 74.4194 8.84227 75.7487 3.21052 70.587C0.787787 67.563 -2.60404 60.7486 3.21052 57.6826C7.17223 55.7098 14.9494 50.7551 14.3643 46.719C13.4196 41.3179 12.7827 31.1368 17.7927 33.6206Z"
							fill={handleSvgColor()}
							id="svgPath_ID"
							className={styles.svg_path}
							data-theme={themeColor}
						/>
					</svg>
					<div className={styles.productImage}>
						<Image alt="productImage" fill src={data.productImage} />
					</div>
				</div>

				<div className={styles.product_text}>
					<h3>{data.productName}</h3>
					{cardType === "cart" ? (
						<p>
							<span>{data.productSize} .</span>
							<span>₦{data.productPrice}</span>
						</p>
					) : (
						<div>
							<p>{data.productSize}</p>
							<p>₦{data.productPrice}/Pack</p>
						</div>
					)}
				</div>
			</div>

			<div className={`${styles.counter_container} ${data.actionBtnClass}`}>
				{cardType === "cart" ? (
					<Counter
						classname={styles.counterClass}
						counterValue={data.cartProductQuantity && data.cartProductQuantity}
						onDecrement={handleItemDecrement}
						onIncrement={handleItemIncrement}
					/>
				) : (
					<Button buttonType="primary" className={styles.card_btn}>
						<h3>Buy now</h3>
					</Button>
				)}

				<div
					data-theme={themeColor}
					onClick={handleDelete}
					className={styles.delete_icon_container}
				>
					<div className={styles.delete_icon}>
						<Image
							alt="delete"
							src={`/svgs/delete-icon-${themeColor}.svg`}
							fill
						/>
					</div>
				</div>
			</div>

			{!data.productQuantity && (
				<div className={styles.outOfStock_container}>
					<div className={styles.outOfStock}>
						<Image
							alt="out-of-stock"
							fill
							priority
							src="/svgs/OutOfStock.svg"
						/>
					</div>
				</div>
			)}
		</section>
	);
};

export default CartDetailsCard;
