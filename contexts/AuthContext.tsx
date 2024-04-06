// contexts/authContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the context
interface AuthContextProps {
	isAuthenticated: boolean;
	addresses: any[];
	lastAddress: any;
}

// Create the context
const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: true,
	addresses: [],
	lastAddress: {},
});

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

	const addresses = [
		{
			id: 1,
			address: 'No 1, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test@gmail.com',
			name: 'John Doe',
		},
		{
			id: 2,
			address: 'No 2, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test2@gmail.com',
			name: 'Jane Doe',
		},
		{
			id: 3,
			address: 'No 3, Oladipo Diya Street, Gudu, Abuja',
			phone_number: '+2348012345678',
			email: 'test3@gmail.com',
			name: 'Sarah Doe',
		},
	];

	const lastAddress = addresses[0];

	return <AuthContext.Provider value={{ isAuthenticated: true, addresses, lastAddress: null }}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
