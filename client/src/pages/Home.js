import React, { Fragment } from "react"
import { SearchBox } from '../components/SearchBox'
import { BreadCrumb } from '../components/BreadCrumb'
import { ListOfProductCards } from '../container/listOfProductCards'

export const Home = (path) => {
  return (
    <Fragment>
      <SearchBox />
      <BreadCrumb />
      <ListOfProductCards />
    </Fragment>
  )
}