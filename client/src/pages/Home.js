import React, { Fragment, setState, useState } from "react"
import { SearchBox } from '../components/SearchBox'
import { BreadCrumb } from '../components/BreadCrumb'
import { ListOfProductCards } from '../container/ListOfProductCards'
import { useLocalStorage } from '../hooks/useLocalStorage'

var categories = [
  "Electrónica, Audio y Video",
  "Apple"
]

var storageSet = false;

export const Home = () => {
  var [stoSearch, setStoSearch] = useLocalStorage("search")
  var [toggle, setToggle] = useState(0);
  var [type, setType] = useState("loadAll");
  var [name, setName] = useState(stoSearch);

  const onChange = ({ search }) => {
    if (search == "" && name != search) {
      setToggle(0)
      setType("loadAll")
      setStoSearch(null)
    }
  }
  const onSubmit = ({ search }) => {
    if (search != "" && search != null) {
      setToggle(1)
      setType("searching")
      setName(search)
      setStoSearch(null)
    }
    if (search == "" || search == null) {
      setToggle(0)
      setType("loadAll")
      setStoSearch(null)
    }
  }

  // this manage the storage value to make a submit if the search value comes from another path
  if (name != "" && !storageSet) {
    storageSet = true
    onSubmit({ search: name })
  }

  return (
    <Fragment>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
      <BreadCrumb {...categories} />
      {toggle == 1 && <ListOfProductCards type={type} name={name} />}
      {toggle == 0 && <ListOfProductCards type={type} />}
    </Fragment>
  )
}