'use client';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect, useContext, createContext, useMemo } from 'react';
import { addressesData } from '@/mock';
import useFetchAll from '@/hooks/useFetchAll';

function GlobalHooks() {
	useFetchAll();
	return null;
}

const AppContext = createContext<any>(null);

export interface ContextProps {
	theme: 'light' | 'dark';
	drinkType: 'soft' | 'alcohol';
	categoryHeight: number;
	productListing: [];
	cart: [];
	savedItems: [];
	cartDetails: {};
	setCart: React.Dispatch<React.SetStateAction<[]>>;
	setProductListing: React.Dispatch<React.SetStateAction<[]>>;
	setSavedItems: React.Dispatch<React.SetStateAction<[]>>;
	setCategoryHeight: React.Dispatch<React.SetStateAction<number>>;
	setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const path = usePathname();
	const [categoryHeight, setCategoryHeight] = useState<number>(0);
	const [cart, setCart] = useState<any[]>([]);
	const [address, setAddress] = useState<any>(addressesData);
	const [drinkType, setDrinkType] = useState<'soft' | 'alcohol'>('soft');
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const urlCheck = path.includes('/alcohol');
	const [productListing, setProductListing] = useState<any[]>([]);

	useEffect(() => {
		if (urlCheck) {
			setDrinkType('alcohol');
		} else {
			setDrinkType('soft');
		}
		const bodyNode = document.body.style;
		bodyNode.backgroundColor = urlCheck === false ? '#540068' : '#E77644';
	}, [urlCheck]);

	const cartDetails = useMemo<{ cartAmount: number; cartQuantity: number }>(() => {
		const cartQuantity = cart.reduce((previousValue: any, currentValue: any) => {
			return previousValue + currentValue.cartProductQuantity;
		}, 0);

		const cartAmount = cart.reduce((previousValue: any, currentValue: any) => {
			return previousValue + currentValue.productPrice * currentValue.cartProductQuantity;
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
				cartDetails,
				productListing,
				setProductListing,
				address,
				setAddress,
			}}>
			<GlobalHooks />
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
