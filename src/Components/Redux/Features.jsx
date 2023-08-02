import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  user: [],
}

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers:{
    UserData : (state,{payload}) => {
      state.user = payload;
      console.log("user is here", payload)
    },
  },
});

export const {UserData} = ProductSlice.actions
export default ProductSlice.reducer