import React, { Component } from 'react';
import IndexFriendLink from './IndexFriendLink'
import IndexCont from './IndexCont'

class Index extends Component{
	constructor(props){
		super(props)
		console.log(this.props)
	}
	componentWillReceiveProps(props){
		console.log(props)
	}	
	render(){
		return (
			<div>
				<IndexCont></IndexCont>
				<IndexFriendLink></IndexFriendLink>
			</div>
		)
	}
}

export default Index;