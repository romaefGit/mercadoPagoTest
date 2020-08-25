import React, { Fragment } from 'react'
import NumberFormat from 'react-number-format'
import './styles.scss'
import { Img } from './styles'
import { BreadCrumb } from '../BreadCrumb'
import { useNearItemsToShow } from '../../hooks/useNearItemsToShow'
import { useMouseBehaviour } from '../../hooks/useMouseBehaviour'

import { Link as TheLink } from '@reach/router'

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
									<p className="product__info--place">{product.place}</p>
								</div>
							</TheLink>
						</div>
					</div>
				</Fragment>
			}

			{
				(!showNormal) && <Fragment>
					<BreadCrumb {...product.categories} />
					<div className="product-detail">
						<div className="flex-wrapper">
							<div className="flex-grid">
								<div className="d-col-8 t-col-6 m-col-12">
									<div className="product-detail__thumbnail">
										<Img className="img--responsive product-detail__thumbnail--img" src={product.picture} />
									</div>
								</div>

								<div className="d-col-4 t-col-6 m-col-12">
									<div className="product-detail__info">
										<p className="product-detail__info--condition">{product.condition}</p>
										<h1 className="product-detail__info--title">{product.title}</h1>
										<p className="product-detail__info--price">
											<NumberFormat value={product.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
											<span className="product-detail__info--price-decimal">00</span>
										</p>

										<button className="product-detail__info--button">Comprar</button>
									</div>
								</div>
							</div>

							<div className="flex-grid">
								<div className="product-detail__info--desc d-col-8 t-col-8 m-col-12">
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