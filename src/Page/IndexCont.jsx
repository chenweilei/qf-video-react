import React, { Component } from 'react';
import IndexContLeft from './IndexContLeft'
import IndexContRight from './IndexContRight'

class IndexCont extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		// fetch('/indexdata.json')
		// .then(function(res){
		// 	return res.json()
		// })
		// .then(function(data){
		// 	console.log(data)
		// })
	}
	render(){
		return (
			<div className="wrap">
				<div className="base11">
					<IndexContLeft></IndexContLeft>
					<IndexContRight ></IndexContRight>
				</div>
			</div>
		)
	}
}

export default IndexCont