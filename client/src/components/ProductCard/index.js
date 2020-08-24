import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import './styles.scss'
import { Img } from './styles'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'

import { Link as TheLink } from '@reach/router'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
let IconShop = require('../../assets/img/Ic_shipping.png');
IconShop = IconShop.default;

export const ProductCard = (product) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const [over, setOver] = useMouseBehaviour();

	var showNormal = true;
	if (show && product.showDetail == true) {
		showNormal = false;
	}
	return (
		<article ref={element}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}>

			{
				(showNormal) && <Fragment>
					<div className="product flex-grid">
						<div className="d-col-12 t-col-12 m-col-12">
							<TheLink to={`/detail/${product.id}`}>
								<div className="product__thumbnail">
									<Img className="img--responsive product__thumbnail--img" src={product.picture} />
								</div>
								<div className="product__info">
									<p className="product__info--price">
										<NumberFormat value={product.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
										{
											(product.free_shipping) && <Img className="img--responsive" src={IconShop} />
										}
									</p>
									<h1 className="product__info--title">{product.title}</h1>
									<p className="product__info--desc">{product.description}</p>
									<p className="product__info--place">{product.place}</p>
								</div>
							</TheLink>
						</div>
					</div>
				</Fragment>
			}

			{
				(!showNormal) && <Fragment>
					<div className="product-detail flex-grid">
						<div className="d-col-8 t-col-8 m-col-12">
							<div className="product-detail__thumbnail">
								<Img className="img--responsive product-detail__thumbnail--img" src={product.picture} />
							</div>
						</div>

						<div className="d-col-4 t-col-4 m-col-12">
							<div className="product-detail__info">
								<p className="product-detail__info--place">{product.place}</p>
								<h1 className="product-detail__info--title">{product.title}</h1>
								<p className="product-detail__info--price">
									<NumberFormat value={product.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
								</p>
							</div>
						</div>

						<div className="product-detail__info--desc d-col-12 t-col-12 m-col-12">
							<h2>Descripción del producto</h2>
							<p>{product.description}</p>
						</div>
					</div>
				</Fragment>

			}

		</article>
	)
}