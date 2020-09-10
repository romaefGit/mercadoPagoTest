import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, Description } from './styles'

export const SeoBehaviour = ({ children, siteName, title, description, url, img }) => {
  return (
    <Fragment>
      <Helmet>
        {title && <title>Mercado Test | {title}</title>}
        {description && <meta name='description' content={description} />}
        {title && <meta property="og:title" content={`Mercado Test | ${title}`} />}
        {description && <meta property="og:description" content={description} />}

        {url && <meta property="og:url" content={url} />}

        {img && <meta property="og:image" itemprop="image" content={img} />}
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="358" />
        <meta property="og:image:height" content="378" />
        <meta property="og:site_name" content="Mercado Test" />
      </Helmet>

      <Div>
        {children}
      </Div>
    </Fragment>
  )
}
