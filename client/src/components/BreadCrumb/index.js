import React, { Fragment } from 'react';
import './styles.scss';

export const BreadCrumb = (categories) => {

  const listCategories = Object.keys(categories).map(key =>
    <li key={key}><a href="">{categories[key]}</a></li>
  )

  return (
    <Fragment>
      <ul className="breadcrumbs">
        {
          listCategories
        }
      </ul>
    </Fragment>
  )
}