import React, { Fragment } from "react"
import { SearchBox } from '../components/SearchBox'
import { ProductCardWithQuery } from '../container/ProductCardWithQuery'

export const ItemDetail = ({ itemId }) => {
  return (
    <Fragment>
      <SearchBox />
      <ProductCardWithQuery id={itemId} />
    </Fragment>
  )
}