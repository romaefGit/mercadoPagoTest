import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductCardFetch } from '../fetching/ProductCardFetch'
import { useGetData } from '../hooks/useGetData'

export const ProductCardWithQuery = ({ id, withDesc = false }) => {
  var getProduct = useGetData('items', id);
  var description = useGetData('items', id, true);

  var render;
  var product;

  if (withDesc) { // when is with description
    if (!getProduct.loading && !description.loading) {
      render = <ProductCardFetch />
      return render;
    }
    if (getProduct.error && description.error) {
      render = <p>Hay un error al cargar el producto</p>
      return render;
    }
    if (getProduct.loading && description.loading) {
      if (typeof getProduct.product === "object" && typeof description.data === "object") {
        product = getProduct.product
        render = <ProductCard key={getProduct.product.id} {...product} description={description.data.plain_text} showDetail={true} />
        return render;
      } else {
        return null;
      }
    }
  } else { //when is onlly the information without description
    if (!getProduct.loading) {
      render = <ProductCardFetch />
      return render;
    }
    if (getProduct.error) {
      render = <p>Hay un error al cargar el producto</p>
      return render;
    }
    if (getProduct.loading) {
      if (typeof getProduct.product === "object" && typeof description.data === "object") {
        product = getProduct.product
        render = <ProductCard key={getProduct.product.id} {...product} showDetail={true} />
        return render;
      } else {
        return null;
      }
    }
  }


  return null;
}