'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, InputField, ItemDetailsCard } from "@/shared";
import { useGlobalContext } from "@/contexts/AppContext";
import { ShoppingModal } from "@/shared/modals";
import { ChartLoader } from "@/shared/loaders";
import { toast } from "react-hot-toast";
import { CartDetailsCardProps } from "@/interface";
import { formatNum } from "@/utils";
import { cartData, couponCodes } from "@/mock";
import styles from "./CartDetails.module.scss";

const CartDetails = () => {
    const { theme, cart, cartDetails } = useGlobalContext();
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true)

  setTimeout(() => {
		setLoading(false)
	}, 2000)
	const handleCheckout = () => {
		if (cartData.length) {
		    router.push('/checkout')
		} else {
			toast.error('There are no items in cart to be checked out')
		}
	};
	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};
  

  return (
    <div data-theme={theme} className={styles.cartDetails_container}>
			<div className={styles.invite_container}>
				<div className={styles.invite_text}>
					<h3>Shop and share a cart with friends</h3>
				</div>

				<Button onClick={openModal} buttonType="primary" className={styles.btn}>
					<h3>Invite friends</h3>
				</Button>
			</div>
			<ShoppingModal
				modalImage="/svgs/modal-Image2.svg"
				isOpen={isOpen}
				onClose={closeModal}
			/>

			<div className={styles.cart_summary}>
				<div className={styles.cardDetailsContainer}>
					{
						loading ? (
							<ChartLoader />
						) : (
						<>
							{cartData.length > 0 ?
								cartData.slice(0, 4).map((item: CartDetailsCardProps, index: number) => (
									<ItemDetailsCard cardType="cart" key={index} {...item} />
								))
						:
								(<div className={styles.emptyCart}>
									<h1>There are currently no items in cart</h1>
								</div>)
							}
						</>
					)}
					
				</div>

				<div className={styles.divider}></div>

				<div className={styles.cartSummaryContainer}>
					<h1>Summary</h1>
					<div className={styles.input_container}>
						<InputField
							value={inputValue}
							onChange={e => setInputValue(e.target.value)}
							className={styles.text_input}
							placeholder="Enter discount code"
							label="Discount code"
						/>
						{inputValue === "" ? (
							<Button
								disabled
								buttonType="transparent"
								className={styles.applyDiscount_btn}
							>
								<h4>Apply</h4>
							</Button>
						) : (
							<Button
								buttonType="transparent"
								className={styles.applyDiscount_btnActive}
							>
								<h4>Apply</h4>
							</Button>
						)}
					</div>

					<div className={styles.total}>
						<h3>Subtotal</h3>
						<p>{formatNum(cartDetails.cartAmount)}</p>
					</div>

					<Button
						onClick={handleCheckout}
						buttonType="primary"
						className={styles.btn_checkout}
					>
						<h3>Checkout</h3>
					</Button>

					<Button buttonType="primary" className={styles.btn_leaveCart}>
						<h3>Disconnect Cart</h3>
					</Button>
				</div>
			</div>
		</div>
  )
}

export default CartDetails