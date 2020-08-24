import React from "react"
import { Router } from '@reach/router'
// pages
import { Home } from './pages/Home'

import './styles/globalStyles.scss'

export const App = () => {
	const urlParams = new window.URLSearchParams(window.location.search)

	return (
		<Router>
			<Home path="/" />
		</Router>
	)
}
