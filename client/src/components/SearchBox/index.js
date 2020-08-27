import React, { Fragment, useState } from 'react'
import { IoIosSearch } from 'react-icons/all'
import "./styles.scss";
import { Link as TheLink } from '@reach/router'

const Icon = IoIosSearch;
let Logo = require('../../assets/img/Logo.png');
Logo = Logo.default;

export const SearchBox = ({ onSubmit, onChange }) => {
  var [search, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault() // this is to do the next lines and not the normal behaviour of the submit
    onSubmit({
      search: search
    })
  }

  const handleOnChange = (event) => {
    event.preventDefault() // this is to do the next lines and not the normal behaviour of the onChange
    setSearch(event.target.value)
    onChange({
      search: event.target.value
    })
  }

  return (
    <Fragment>
      <div className="header">
        <form onSubmit={handleSubmit}>
          <div className="header__search" >
            <TheLink to={`/`}>
              <div className="header__search--logo">
                <img className="img--responsive" src={Logo} />
              </div>
            </TheLink>
            <input type="text" className="header__search--term" placeholder="Nunca dejes de buscar" onChange={handleOnChange} />
            <button type="submit" className="header__search--button">
              <Icon />
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  )
}