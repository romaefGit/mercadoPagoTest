import React from "react"
import { Router } from '@reach/router'
// pages
import { Home } from './pages/Home'
import { Items } from './pages/Items'

import './styles/globalStyles.scss'

export const App = () => {
	return (
		<Router>
			<Home path="/" />
			<Items path="/items" />
			<Items path="/items/:itemId" />
		</Router>
	)
}
