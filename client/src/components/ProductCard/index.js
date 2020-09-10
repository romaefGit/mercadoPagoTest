import React, { Fragment } from 'react'
import './styles.scss'
import { Img } from './styles'
import { BreadCrumb } from '../BreadCrumb'
import formatNumber from '../../container/formatNumber'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'

import { Link as TheLink } from '@reach/router'

var IconShop = require('../../assets/img/Ic_shipping.png');
IconShop = IconShop.default;

export const ProductCard = (product) => {
	const [show, element] = useNearItemsToShow() // this get for the element instead
	const [over, setOver] = useMouseBehaviour();

	var priceObj = formatNumber(product.price)
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
							<TheLink to={`/items/${product.id}`}>
								<div className="product__thumbnail">
									<Img className="img--responsive product__thumbnail--img" src={`${product.thumbnail}`} />
								</div>
								<div className="product__info">
									<p className="product__info--price">
										{priceObj.ammount}
										{
											(product.shipping.free_shipping) && <Img className="img--responsive" src={IconShop} />
										}
									</p>
									<h1 className="product__info--title">{product.title}</h1>
									<p className="product__info--place">{product.seller_address.state.name}</p>
								</div>
							</TheLink>
						</div>
					</div>
				</Fragment>
			}

			{
				(!showNormal) && <Fragment>
					<BreadCrumb {...product.deal_ids} />
					<div className="product-detail">
						<div className="flex-wrapper">
							<div className="flex-grid">
								<div className="d-col-8 t-col-6 m-col-12">
									<div className="product-detail__thumbnail">
										<Img className="img--responsive product-detail__thumbnail--img" src={`${product.pictures[0].url}`} />
									</div>
								</div>

								<div className="d-col-4 t-col-6 m-col-12">
									<div className="product-detail__info">
										<p className="product-detail__info--condition">{product.condition} - {product.sold_quantity} vendidos</p>
										<h1 className="product-detail__info--title">{product.title}</h1>
										<p className="product-detail__info--price">
											{priceObj.ammount}
											<span className="product-detail__info--price-decimal">{priceObj.decimals}</span>
										</p>

										<button className="product-detail__info--button">Comprar</button>
									</div>
								</div>
							</div>

							<div className="flex-grid">
								<div className="product-detail__info--desc">
									<h2>Descripción del producto</h2>
									<p>{product.description}</p>
								</div>
							</div>
						</div>
					</div>

				</Fragment>

			}
		</article>
	)
}