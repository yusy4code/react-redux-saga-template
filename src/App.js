// App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,  // Wrap all routes with the common layout
    children: [
      {
        path: "/",
        element: <ProductList />  // Main dashboard showing the product list
      },
      {
        path: "product/:id",
        element: <Product />  // Individual product details page
      },
      {
        path: "about",
        element: <div><h1>About Page</h1></div>  // Example About Page
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
