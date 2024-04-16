import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	name?: string;
	email?: string;
	phoneNumber?: string | number;
	DOB?: string | number;
	token?: string;
	id?: string;
	isAuthenticated?: boolean;
}

const initialState: User = {
	name: "",
	email: "",
	phoneNumber: "",
	DOB: "",
	token: "",
	id: "",
	isAuthenticated: false,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<User>) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.phoneNumber = action.payload.phoneNumber;
			state.DOB = action.payload.DOB;
			state.id = action.payload.id;
			state.token = action.payload.token;
			state.isAuthenticated = action.payload.isAuthenticated;
		},
		clearUser: state => {
			state.name = "";
			state.email = "";
			state.phoneNumber = "";
			state.DOB = "";
			state.id = "";
			state.token = "";
			state.isAuthenticated = false;
		},
	},
});

export default userSlice.reducer;
export const { updateUser, clearUser } = userSlice.actions;
