import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductCardFetch } from '../fetching/ProductCardFetch'
import { useGetData } from '../hooks/useGetData'

export const ProductCardWithQuery = ({ id }) => {
  var getProduct = useGetData('products', id);
  var render;
  var product;
  if (!getProduct.loading) {
    render = <ProductCardFetch />
    return render;
  }
  if (getProduct.error) {
    render = <p>Hay un error al cargar el producto</p>
    return render;
  }
  if (getProduct.loading) {
    if (typeof getProduct.product == "object") {
      product = getProduct.product
      render = <ProductCard key={product.id} {...product} picture={`${product.picture}`} showDetail={true} />
      return render;
    }
  }
  return null;
}