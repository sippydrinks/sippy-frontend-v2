'use client';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect, useContext, createContext } from 'react';

const AppContext = createContext<any>(null);

export interface ContextProps {
	theme: string;
	drinkType: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();
	const path = usePathname();
	const [drinkType, setDrinkType] = useState<'soft' | 'alcohol'>('soft');
	const [themeColor, setThemeColor] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		if (path === '/') {
			setDrinkType('soft');
		}
		if (path === '/alcohol') {
			setDrinkType('alcohol');
		}
	}, [path]);

	return (
		<AppContext.Provider
			value={{
				drinkType,
				themeColor,
				setThemeColor,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
