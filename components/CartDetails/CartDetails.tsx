// 'use client';
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// // import { Button, InputField, ItemDetailsCard } from "../../shared";
// import { ContextProps, useGlobalContext } from "@/contexts/AppContext";
// import { ShoppingModal, DeleteDrinkModal } from "../../shared/modals";
// import { ChartLoader } from "@/shared/loaders";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { formatNum } from "@/utils";
// import { cartData, couponCodes } from "@/mock";
// import styles from "./CartDetails.module.scss";

// const CartDetails = () => {
//   const { theme, cart, cartDetails }: ContextProps = useGlobalContext();
// 	const router = useRouter();
// 	const [inputValue, setInputValue] = useState<string>("");
// 	const [isOpen, setIsOpen] = useState<boolean>(false);
// 	const [loading, setLoading] = useState<boolean>(true)

//   setTimeout(() => {
// 		setLoading(false)
// 	}, 2000)
// 	const handleCheckout = () => {
// 		const validForCheckout = cart.length > 0
// 		if (validForCheckout) {
// 		    router.push('/checkout')
// 		} else {
//         toast('There are no items in cart to be checked out', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           type: 'info'
//         })
// 		}
// 	};
// 	const openModal = () => {
// 		setIsOpen(true);
// 	};
// 	const closeModal = () => {
// 		setIsOpen(false);
// 	};
  

//   return (
//     <div>Cart</div>
//   )
// }

// export default CartDetails