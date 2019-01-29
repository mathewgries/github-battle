const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Popular = require('./Popular');
const Home = require('../components/Home');
const Battle = require('../components/Battle');
const Nav = require('../components/Nav');
const Results = require('../components/Results');


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

module.exports = App;