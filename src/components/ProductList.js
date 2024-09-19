import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components for layout
const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #28a745;
  font-weight: bold;
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.thumbnail} alt={product.title} />
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <ViewDetailsButton to={`/product/${product.id}`}>
              View Details
            </ViewDetailsButton>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
