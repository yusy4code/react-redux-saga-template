import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store using Redux Toolkit's configureStore
const store = configureStore({
  reducer: rootReducer, // Add your root reducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,  // Disable thunk since we're using saga
    }).concat(sagaMiddleware),  // Add saga middleware
  devTools: process.env.NODE_ENV !== 'production',  // Enable Redux DevTools
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
