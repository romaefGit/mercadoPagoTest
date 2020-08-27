import React from 'react'
import { ListOfProductCardsComponent } from '../components/ListOfProductCards'
import { ProductCardFetch } from '../fetching/ProductCardFetch'
import { useGetData } from '../hooks/useGetData'
import { useSearchProducts } from '../hooks/useSearchProducts'

const loadAllProducts = () => {
  var getProducts;
  var render;
  var products;
  getProducts = useGetData('products');
  if (!getProducts.loading) {
    render = <ProductCardFetch />
    return render;
  }
  if (getProducts.error) {
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

const loadProductsByName = (name) => {
  var getProducts;
  var render;
  var products;
  getProducts = useSearchProducts(name);
  // console.log("getProducts > ", getProducts)
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
      // console.log("products search > ", products)
      render = ListOfProductCardsComponent(products)
      return render;
    }
  }
  return null;
}

export const ListOfProductCards = ({ type = null, name = null }) => {
  var getProducts;
  var render;
  var products;
  if (type == "loadAll") {
    return loadAllProducts();
  }
  if (type == "searching") {
    return loadProductsByName(name)
  }
}