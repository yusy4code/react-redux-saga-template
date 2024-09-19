import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './productReducer';  // Assuming you have a product reducer

const rootReducer = combineReducers({
  products: productReducer,
  // Add more reducers here as needed
});

export default rootReducer;
