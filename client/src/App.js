import React from "react"
import { Router } from '@reach/router'
// pages
import { Home } from './pages/Home'
import { ItemDetail } from './pages/ItemDetail'

import './styles/globalStyles.scss'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)

	return (
		<Router>
			<Home path="/" />
			<ItemDetail path="/detail/:itemId" />
		</Router>
	)
}
