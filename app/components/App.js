var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Popular = require('./Popular');
var Home = require('../components/Home');
var Battle = require('../components/Battle');
var Nav = require('../components/Nav');
var Results = require('../components/Results');


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
						<Route render={function(){
							return <p>Page not found 404</p>
						}} />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;