import React, { Fragment } from 'react';
import { ProductCard } from '../ProductCard'
// components
import './styles.scss';

export const ListOfProductCardsComponent = (products) => {
  return (
    <Fragment>
      <div className="products">
        <ul className="products__list">
          {products.map(product => <ProductCard key={product.id} {...product} showDetail={false} />)}
        </ul>
      </div>
    </Fragment>
  )
}