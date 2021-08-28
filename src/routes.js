import React from 'react'

import {
	BrowserRouter,
	Redirect,
	Route,
	Switch
} from 'react-router-dom'

import Home  from './pages/Home'
import Auth  from './pages/Auth'
import Admin from './pages/Admin'

import { isAuthenticated } from './auth'



const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{ ...rest }
		render={ props => (
			isAuthenticated() ? (
				<Component { ...props } />
			) : (
				<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
			)
	)}/>
)



const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact  path="/" 		component={ Home } />
			<Route exact  path="/auth" 	component={ Auth  } />
			<PrivateRoute path="/admin" component={ Admin } />
		</Switch>
	</BrowserRouter>
)



export default Routes
