import React, { Fragment, setState, useState } from "react"
import { SearchBox } from '../components/SearchBox'
import { BreadCrumb } from '../components/BreadCrumb'
import { ListOfProductCards } from '../container/ListOfProductCards'
import { useLocalStorage } from '../hooks/useLocalStorage'

var categories = [
  "Electrónica, Audio y Video",
  "Apple"
]

export const Home = (path) => {
  var [stoSearch, setStoSearch] = useLocalStorage("search", "")
  var [toggle, setToggle] = useState(0);
  var [type, setType] = useState("loadAll");
  var [name, setName] = useState("");


  const onChange = ({ search }) => {
    if (search == "" && name != search) {
      setToggle(0)
      setType("loadAll")
      setStoSearch("")
    }
  }
  const onSubmit = ({ search }) => {
    if (search != "" && search != null) {
      setToggle(1)
      setType("searching")
      setName(search)
      setStoSearch(search)
    }
    if (search == "" || search == null) {
      setToggle(0)
      setType("loadAll")
    }
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