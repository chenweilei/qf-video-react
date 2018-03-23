import React, { Component } from 'react';
import {
	//HashRouter,
	BrowserRouter,
	Route,
	//Link,
	Switch
} from 'react-router-dom';
import asyncComponent from './asyncComponent'
import CommonTop from './Page/common/CommonTop'
import CommonTop2 from './Page/common/CommonTop2'
import CommonBottom from './Page/common/CommonBottom'

const Index = asyncComponent(() => import('./Page/Index'))
const About = asyncComponent(() => import('./Page/About'))

class App extends Component {
	componentWillReceiveProps(props){
		console.log(props)
	}
	render() {
		return (
			<BrowserRouter>
				<div>
					<CommonTop></CommonTop>
					<CommonTop2></CommonTop2>
					<Switch>
						<Route exact path="/" component={Index} children={ ({ match, ...rest }) => (<h1>测试</h1>)}></Route>
						<Route exact path="/about" component={About} />
					</Switch>
					<CommonBottom></CommonBottom>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
