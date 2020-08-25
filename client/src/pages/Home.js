import React, { Fragment } from "react"
import { SearchBox } from '../components/SearchBox'
import { BreadCrumb } from '../components/BreadCrumb'
import { ListOfProductCards } from '../container/ListOfProductCards'
var categories = [
  "Electrónica, Audio y Video",
  "iPod",
  "Reproductores",
  "iPod touch",
  "32GB"
]
export const Home = (path) => {
  return (
    <Fragment>
      <SearchBox />
      <BreadCrumb {...categories} />
      <ListOfProductCards />
    </Fragment>
  )
}