"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useContext, createContext, useMemo } from "react";

const AppContext = createContext<any>(null);

export interface ContextProps {
	theme: string;
	drinkType: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();
	const path = usePathname();
	const [categoryHeight, setCategoryHeight] = useState<number>(0)
	const [cart, setCart] = useState<any[]>([]);
	const [drinkType, setDrinkType] = useState<"soft" | "alcohol">("soft");
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		if (path.includes('/alcohol')) {
			setDrinkType("alcohol");
		} else {
			setDrinkType("soft");
		}
	}, [path]);

	const cartDetails = useMemo<{ cartAmount: number; cartQuantity: number }>(() => {
		const cartQuantity = cart.reduce((previousValue: any, currentValue: any) => {
			return previousValue + currentValue.cartProductQuantity;
		}, 0);

		const cartAmount = cart.reduce((previousValue: any, currentValue: any) => {
			return (
				previousValue +
				currentValue.productPrice * currentValue.cartProductQuantity
			);
		}, 0);
		return {
			cartAmount: cartAmount || 0,
			cartQuantity: cartQuantity || 0,
		};
	}, [cart]);

	return (
		<AppContext.Provider
			value={{
				drinkType,
				theme,
				setTheme,
				cart,
				setCart,
				categoryHeight, 
				setCategoryHeight,
				cartDetails
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
