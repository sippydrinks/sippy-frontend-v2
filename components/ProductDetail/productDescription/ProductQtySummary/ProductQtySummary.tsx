import React, { useState } from "react";
import { Button, Counter } from "../../../../shared";
import { toast } from "react-toastify";
import { ProductFilterButton } from "..";
import { useGlobalContext } from "@/contexts/AppContext";
import styles from "./ProductQtySummary.module.scss";

const ProductQtySummary = ({ data, price, size, isSticky }: any) => {
	const { themeColor, setCart, cart } = useGlobalContext();
	const [counter, setCounter] = useState<number>(0);
	const handleCountIncrease = () => {
		setCounter(counter => counter + 1);
	};
	const handleCountDecrease = () => {
		setCounter(counter => counter - 1);
	};
	const localCart = cart;
	const itemIndex = localCart.findIndex((item: any) => item.id === data.id);
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
		});
	};
	console.log(isSticky);
	return (
		<div
			data-theme={themeColor}
			className={`${styles.productQtySummaryContainer} ${
				isSticky && styles.is_sticky
			}`}
		>
			<div>
				<h2 className={styles.productPrice}>₦{price}</h2>
			</div>

			<div className={styles.quantityBtn}>
				<div>
					<p className={styles.fadedText}>Select size</p>
				</div>
				<div className={styles.productQtyBtnCont}>
					{["50CL x 12", `${size} x 12`, `${size} x 24`].map((item, index) => (
						<ProductFilterButton key={index}>
							<span className={styles.productSizes}>{item}</span>
						</ProductFilterButton>
					))}
				</div>
			</div>

			<div className={styles.counterAndBtns}>
				<div>
					<p className={styles.fadedText}>Quantity</p>
					<Counter
						// counterValue={data?.cartProductQuantity ? data?.cartProductQuantity : 0}
						// onDecrement={handleItemDecrement}
						// onIncrement={handleItemIncrement}
						counterValue={counter}
						onDecrement={handleCountDecrease}
						onIncrement={handleCountIncrease}
					/>
				</div>

				<div className={styles.btns_container}>
					<Button buttonType="primary" className={styles.addToCartBtn}>
						<h3 className={styles.addToCartText}>Add to cart</h3>
					</Button>

					<Button buttonType="primary" className={styles.buyNowBtn}>
						<h4>Buy now</h4>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProductQtySummary;
