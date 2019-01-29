import React from 'react'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Popular from './Popular'
import Home from '../components/Home'
import Battle from '../components/Battle'
import Nav from '../components/Nav'
import Results from '../components/Results'


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/battle' component={Battle} />
						<Route path='/battle/results' component={Results} />
						<Route path='/popular' component={Popular} />
						<Route render={() => <p>Page not found 404</p>} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App;