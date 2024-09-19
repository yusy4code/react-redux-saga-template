import React, { useEffect, useState } from 'react';
import axiosInstance from '../config';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components for layout
const ProductDetailsWrapper = styled.div`
  display: flex;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  max-width: 500px;
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductInfo = styled.div`
  flex: 1;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  color: #28a745;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const AddToCartButton = styled.button`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  return (
    <ProductDetailsWrapper>
      {product && (
        <>
          <ProductImage src={product.thumbnail} alt={product.title} />
          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <AddToCartButton>Add to Cart</AddToCartButton>
          </ProductInfo>
        </>
      )}
    </ProductDetailsWrapper>
  );
};

export default Product;
