import React, { Component } from 'react';
import {

	Link,
} from 'react-router-dom';
import './CommonTop2.css'

export default class CommonTop2 extends Component{
	render(){
		return (
			<div className="nav_main">
				<div className="nav_fixed">
					<div className="nav_bg clear">
						<div className="base">
							<div className="nav_left">
								<a href="http://video.mobiletrain.org/" target="_blank" title="千锋教育">
									<img src="http://www.mobiletrain.org/images/index/new_logo.png"/>
								</a>
								<div className="xq">
									<h1 style={{fontSize: '30px', fontWeight: 'bold0', color: '#333'}}>千锋培训视频教程</h1>
								</div>
							</div>
							<img src="http://www.mobiletrain.org/images/index/nav_r_ico.png" className="index_nav_r"/>
						</div>
					</div>
					<div className="nav_right base" style={{textAlign: 'center'}}>
						<Link className="nav_index nav" to='/'>首页</Link>
						<a href="http://video.mobiletrain.org/html5/" target="_blank" className="nav">HTML5视频</a>
						<a href="http://video.mobiletrain.org/php/" target="_blank" className="nav">PHP视频</a>
						<a href="http://video.mobiletrain.org/linux/" target="_blank" className="nav">云计算视频</a>
						<a href="http://video.mobiletrain.org/java/" target="_blank" className="nav">Java视频</a>
						<a href="http://video.mobiletrain.org/rjcs/" target="_blank" className="nav">软件测试视频</a>
						<a href="http://video.mobiletrain.org/ui/" target="_blank" className="nav">UI视频</a>
						<a href="http://video.mobiletrain.org/python/" target="_blank" className="nav">Python视频</a>
						{/*<a href="http://www.mobiletrain.org/about/" target="_blank" className="nav"></a>*/}
						<Link className="nav" to='/about'>关于千锋</Link>
					</div>
				</div>
			</div>
		)
	}
}