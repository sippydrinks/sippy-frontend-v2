import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	name?: string;
	email?: string;
	phoneNumber?: string | number;
	token?: string;
	id?: string;
	storeId?: string;
	storeName?: string;
	storeAddress?: string;
	isAuthenticated?: boolean;
	isSuperAdmin?: boolean;
	role?: string;
}

const initialState: User = {
	name: "",
	email: "",
	phoneNumber: "",
	token: "",
	id: "",
	storeId: "",
	isAuthenticated: false,
	isSuperAdmin: false,
	role: "",
	storeName: "",
	storeAddress: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
			state.id = action.payload.id;
			state.storeId = action.payload.storeId;
			state.token = action.payload.token;
			state.isAuthenticated = action.payload.isAuthenticated;
			state.isSuperAdmin = action.payload.isSuperAdmin;
			state.role = action.payload.role;
			state.storeName = action.payload.storeName;
			state.storeAddress = action.payload.storeAddress;
		},
		clearUser: state => {
			state.name = "";
			state.email = "";
			state.phoneNumber = "";
			state.id = "";
			state.storeId = "";
			state.token = "";
			state.isAuthenticated = false;
			state.isSuperAdmin = false;
			state.role = "";
			state.storeName = "";
			state.storeAddress = "";
		},
	},
});

export default userSlice.reducer;
export const { updateUser, clearUser } = userSlice.actions;
