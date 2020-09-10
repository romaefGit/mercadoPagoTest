import React from 'react'
import { ListOfProductCardsComponent } from '../components/ListOfProductCards'
import { ProductCardFetch } from '../fetching/ProductCardFetch'
import { useSearchProducts } from '../hooks/useSearchProducts'

const loadProductsByName = (name) => {
  var getProducts;
  var render;
  var products;
  getProducts = useSearchProducts(name, 4);
  if (!getProducts.loading) {
    render = <ProductCardFetch />
    return render;
  }
  if (typeof getProducts.error == "object") {
    render = <p>Hay un error al cargar los  productos</p>
    return render;
  }
  if (getProducts.loading) {
    if (typeof getProducts.products == "object") {
      products = getProducts.products
      render = ListOfProductCardsComponent(products)
      return render;
    }
  }
  return null;
}

export const ListOfProductCards = ({ name = null }) => {
  var getProducts;
  var render;
  var products;
  return loadProductsByName(name)
}