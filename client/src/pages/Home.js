import React, { Fragment, setState, useState } from "react"
import { SearchBox } from '../components/SearchBox'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { SeoBehaviour } from '../components/SeoBehaviour'

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

  var infoSeo = {
    title: "Los mejores productos aquí",
    description: "Tu lugar para comprar por internet, encontrarás gran variedad de productos y a muy buenos precios!",
    url: window.location,
    img: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.9.1/mercadolibre/logo__large_plus@2x.png"
  }

  return (
    <SeoBehaviour {...infoSeo}>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
    </SeoBehaviour>
  )
}