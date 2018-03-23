import React, { Component } from 'react';
import './CommonTop.css'

export default class CommonTop extends Component{
	render(){
		return (
			<div className="sy_top">
				<div className="sy_top_c base">
					<p className="">千锋教育-做有情怀、有良心、有品质的IT职业教育机构</p>
					<i className="call">400-811-9990</i>
					<ul className="">
						<li><a rel="nofollow" href="http://www.goodprogrammer.org/" target="_blank" style={{color:'#f00'}} >好程序员特训营</a></li>
						<li><a rel="nofollow" href="http://www.codingke.com/" target="_blank" style={{color:'#f00'}}>扣丁学堂</a></li>
						<li><a href="http://www.mobiletrain.org/about/contact.html" target="_blank">联系我们</a></li>
						<li id="tebie"><a href="http://www.mobiletrain.org/" onClick={() => false}>加入收藏</a></li>
					</ul>
				</div>
			</div>
		)
	}
}