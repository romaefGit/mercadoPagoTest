import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductCardFetch } from '../fetching/ProductCardFetch'
import Data from '../assets/dataExample/data.json'
import { useGetData } from '../hooks/useGetData'


var findItem = (prop, id) => {
  var theProduct = {};
  if (prop == 'products') {
    for (let i = 0; i < Data.products.length; i++) {
      const product = Data.products[i];
      if (product.id == id) {
        theProduct = product
      }
    }
  }
  return theProduct;
}

export const ProductCardWithQuery = ({ id }) => {
  console.log(useGetData('products'));
  let product = findItem('products', id);
  return <ProductCard key={product.id} {...product} picture={`${product.picture}`} showDetail={true} />;
}