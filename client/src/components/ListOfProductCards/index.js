import React, { Fragment } from 'react';
import { ProductCard } from '../ProductCard'
import { BreadCrumb } from '../../components/BreadCrumb'

var categories = [
  "Electrónica, Audio y Video",
  "Android"
]
// components
import './styles.scss';

export const ListOfProductCardsComponent = (products) => {
  return (
    <Fragment>
      <BreadCrumb {...categories} />
      <div className="products">
        <ul className="products__list">
          {products.map(product => <ProductCard key={product.id} {...product} showDetail={false} />)}
        </ul>
      </div>
    </Fragment>
  )
}