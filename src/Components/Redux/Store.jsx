import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features"; // Import the correct path for productReducer

const Store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default Store;