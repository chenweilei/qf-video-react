import React, {Component} from 'react'
import {
	Route,
	Link,
	Switch
} from 'react-router-dom';
import asyncComponent from '../asyncComponent'

import './IndexContRight.css'

let oStyle = {
	banner: {
		height:'286px',
		marginBottom: '20px',
		background: `url(${require('./banner.jpg')}) no-repeat center top`,
		backgroundSize: '100% 100%'
	},
	main_right:{
		width:'904px'
	}
}

let IndexContRightList = asyncComponent(() => import('./IndexContRightList'));

class IndexContRight extends Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div className="fr" style={oStyle.main_right}>
				<div style={oStyle.banner}></div>
				<div className="myRight">
					<ul className="myRight_top">
						<li  className="tab tab_all"><Link to='/?type=全部'>全部</Link></li>
						<li>最热 &or;
							<div>

								<span className="tab"><Link to='/?type=最热'>最热</Link></span>
								<span className="tab"><Link to='/?type=最新'>最新</Link></span>
							</div>
						</li>
						<li>课程类型 &or;
							<div>
								<span className="tab"><Link to='/?type=知识精讲'>知识精讲</Link></span>
								<span className="tab"><Link to='/?type=先导视频'>先导视频</Link></span>
								<span className="tab"><Link to='/?type=项目实战'>项目实战</Link></span>
								<span className="tab"><Link to='/?type=就业指导'>就业指导</Link></span>
							</div>
						</li>
						<li>难度等级 &or;
							<div>
								<span className="tab"><Link to='/?type=初级'>初级</Link></span>
								<span className="tab"><Link to='/?type=中级'>中级</Link></span>
								<span className="tab"><Link to='/?type=高级'>高级</Link></span>
							</div>
						</li>
					</ul>
					<div className="myRight_wrap">
						<Route exact path="/" component={IndexContRightList}></Route>

					</div>
				</div>
			</div>
		)
	}
}

export default IndexContRight;