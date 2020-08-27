import React, { Fragment } from "react"
import { SearchBox } from '../components/SearchBox'
import { ProductCardWithQuery } from '../container/ProductCardWithQuery'
import { useLocalStorage } from '../hooks/useLocalStorage'

var categories = [
  "Electrónica, Audio y Video",
  "Apple"
]

export const ItemDetail = ({ itemId }) => {
  var [search, setSearch] = useLocalStorage("search", "")

  const onChange = ({ search }) => {
    if (search == "" && name != search) {
      setSearch("")
    }
  }
  const onSubmit = ({ search }) => {
    if (search != "" && search != null) {
      setSearch(search)
      window.location.href = '/';
    }
    if (search == "" || search == null) {
      setSearch("")
    }
  }

  return (
    <Fragment>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
      <ProductCardWithQuery id={itemId} />
    </Fragment>
  )
}