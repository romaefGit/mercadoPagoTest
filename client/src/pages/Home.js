import React, { Fragment, setState, useState } from "react"
import { SearchBox } from '../components/SearchBox'
import { useLocalStorage } from '../hooks/useLocalStorage'

var categories = [
  "Electrónica, Audio y Video",
  "Android"
]

var storageSet = false;

export const Home = () => {
  var [search, setSearch] = useLocalStorage("search", "")

  const onChange = ({ search }) => {
    if (search == "" && name != search) {
      setSearch("")
    }
  }
  const onSubmit = ({ search }) => {
    if (search != "" && search != null) {
      setSearch(search)
      window.location.href = '/items?search=' + search;
    }
    if (search == "" || search == null) {
      setSearch("")
    }
  }

  return (
    <Fragment>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
    </Fragment>
  )
}