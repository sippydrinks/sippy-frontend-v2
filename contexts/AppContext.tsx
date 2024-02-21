"use client";
import { useRouter, usePathname } from "next/navigation";
import React, { useState, useEffect, useContext, createContext } from "react";

const AppContext = createContext<any>(null);

export interface ContextProps {
	theme: string;
	drinkType: string;
	setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const router = useRouter();
	const path = usePathname();
	const [drinkType, setDrinkType] = useState<"soft" | "alcohol">("soft");
	const [theme, setTheme] = useState<"light" | "dark">("light");

	useEffect(() => {
		if (path.includes('/alcohol')) {
			setDrinkType("alcohol");
		} else {
			setDrinkType("soft");
		}
	}, [path]);

	return (
		<AppContext.Provider
			value={{
				drinkType,
				theme,
				setTheme,
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
