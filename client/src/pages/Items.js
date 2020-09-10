import React, { Fragment, useState } from "react"
import { SearchBox } from '../components/SearchBox'
import { ProductCardWithQuery } from '../container/ProductCardWithQuery'
import { ListOfProductCards } from '../container/ListOfProductCards'

export const Items = ({ itemId }) => {
  var [automaticSubmit, setAutomaticSubmit] = useState(0);
  var [isSubmit, setIsSubmit] = useState(0)
  var [name, setName] = useState("");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const searchExpr = urlParams.get('search')
  if ((searchExpr != "" && searchExpr != null) && automaticSubmit == 0) {
    setIsSubmit(1)
    setName(searchExpr)
    setAutomaticSubmit(1);
  }

  const onChange = ({ search }) => {
    if (search == "" && name != search) {
      window.location.href = '/';
    }
  }
  const onSubmit = ({ search }) => {
    if (search != "" && search != null) {
      setIsSubmit(1)
      setName(search)
      window.location.href = '/items?search=' + search;
    }
    if (search == "" || search == null) {
      setIsSubmit(0)
      window.location.href = '/';
    }
  }

  return (
    <Fragment>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
      {isSubmit == 0 && <ProductCardWithQuery id={itemId} withDesc={true} />}
      {(isSubmit == 1) && <ListOfProductCards name={name} />}
    </Fragment>
  )
}