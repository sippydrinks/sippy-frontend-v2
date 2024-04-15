import { createSlice } from "@reduxjs/toolkit";
import { addressesData } from "@/mock";
import { AddressDataProps } from "@/interface/components";


const initialState = {
    addressesData
}
const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        makeDefaultAddress(state, action) {
            const { id } = action.payload;
            const index = state.addressesData.findIndex((address: AddressDataProps) => address.id === id);
            if (index !== -1 && index !== 0) {
              const temp = state.addressesData[0];
              state.addressesData[0] = state.addressesData[index];
              state.addressesData[index] = temp;
              state.addressesData[0].id = 1;
              state.addressesData[index].id = id;
            }
        },
    }
})

export const { makeDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer