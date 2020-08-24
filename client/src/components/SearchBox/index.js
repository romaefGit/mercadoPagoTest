import React, { Fragment } from 'react'
import { IoIosSearch } from 'react-icons/all'
import "./styles.scss";
import { Link as TheLink } from '@reach/router'
const Icon = IoIosSearch;
let Logo = require('../../assets/img/Logo.png');
Logo = Logo.default;

export const SearchBox = ({ logo = '', path = "#", emoji = '?' }) => (
  <div className="header">
    <div className="header__search" >
      <TheLink to={`/`}>
        <div className="header__search--logo">
          <img className="img--responsive" src={Logo} />
        </div>
      </TheLink>
      <input type="text" className="header__search--term" placeholder="Nunca dejes de buscar" />
      <button type="submit" className="header__search--button">
        <Icon />
      </button>
    </div>
  </div>
)