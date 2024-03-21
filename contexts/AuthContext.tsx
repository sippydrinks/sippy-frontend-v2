// contexts/authContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the shape of the context
interface AuthContextProps {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
	addresses: any[];
	lastAddress: any;
}

// Create the context
const AuthContext = createContext<AuthContextProps>({
	isAuthenticated: true,
	login: () => {},
	logout: () => {},
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

	useEffect(() => {
		// You can implement logic to check if the user is authenticated here
		// For example, check if there's a token in localStorage
		const token = localStorage.getItem('token');
		// setIsAuthenticated(!!token);
	}, []);

	const login = () => {
		// You can implement your login logic here
		// For example, set a token in localStorage
		localStorage.setItem('token', 'your-token');
		setIsAuthenticated(true);
	};

	const logout = () => {
		// You can implement your logout logic here
		// For example, remove the token from localStorage
		localStorage.removeItem('token');
		setIsAuthenticated(false);
	};

	return <AuthContext.Provider value={{ isAuthenticated: false, login, logout, addresses: [], lastAddress: null }}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);
