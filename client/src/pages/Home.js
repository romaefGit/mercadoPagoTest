import React, { Fragment } from "react"
import { SearchBox } from '../components/SearchBox'
import { BreadCrumb } from '../components/BreadCrumb'

export const Home = (path) => {
  return (
    <Fragment>
      <SearchBox />
      <BreadCrumb />
    </Fragment>
  )
}