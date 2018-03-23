import React, { Component } from 'react';

class About extends Component{
	constructor(props){
		super(props)
		console.log(props.location)
	}
	render(){
		return <h1>关于我们</h1>
	}
}

export default About;