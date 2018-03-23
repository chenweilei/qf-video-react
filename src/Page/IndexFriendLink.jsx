import React, { Component } from 'react';
import './IndexFriendLink.css'

export default class IndexFriendLink extends Component{
	constructor(){
		super();
		this.state = {
			tabBtn: ['网站导航', '友情链接'],
			tab: [1, 0]
		}
	}
	clickBtn(key, e){
		let tabData = new Array(this.state.tabBtn.length).fill(0);
		tabData[key] = 1;
		this.setState({
			tab: tabData
		})
	}
	getTabBtn(){
		return this.state.tabBtn.map( (val, key) => {
			return <span key={key} onClick={ this.clickBtn.bind(this, key) } className={this.state.tab[key]?'hover':''}>{val}</span>
		} )
	}
	render(){
		return (
			<div className="bottom_friend_link">
				<div className="base11">
					<h6 className="qiye">
						{this.getTabBtn()}
					</h6>
					<div className="btn_content">
						<div className={this.state.tab[0]?'active':''}>
							<p>
								<a href="http://video.mobiletrain.org/html5/" target="_blank">HTML5视频教程</a>
								<a href="http://video.mobiletrain.org/php/" target="_blank">PHP视频教程</a>
								<a href="http://video.mobiletrain.org/linux/" target="_blank">Linux视频教程</a>
								<a href="http://video.mobiletrain.org/java/" target="_blank">Java视频教程</a>
								<a href="http://video.mobiletrain.org/rjcs/" target="_blank">软件测试视频教程</a>
								<a href="http://video.mobiletrain.org/ui/" target="_blank">UI视频教程</a>
								<a href="http://video.mobiletrain.org/python/7.html" target="_blank">Python基础入门教程 </a>
								<a href="http://video.mobiletrain.org/python/8.html" target="_blank">Windows知识点</a>
								<a href="http://video.mobiletrain.org/python/9.html" target="_blank">Linux知识点</a>
								<a href="http://video.mobiletrain.org/python/10.html" target="_blank">机器学习深度学习</a>
								<a href="http://video.mobiletrain.org/python/11.html" target="_blank">树莓派设备 </a>	
								<a href="http://video.mobiletrain.org/html5/4.html" target="_blank">CSS基础</a>
								<a href="http://video.mobiletrain.org/html5/3.html" target="_blank">HTML基础</a>
								<a href="http://video.mobiletrain.org/html5/5.html" target="_blank">C33核心属性</a>
								<a href="http://video.mobiletrain.org/html5/16.html" target="_blank">移动端布局</a>
								<a href="http://video.mobiletrain.org/html5/17.html" target="_blank">JS基础</a>
								<a href="http://video.mobiletrain.org/html5/5.html" target="_blank">C33核心属性</a>
								<a href="http://video.mobiletrain.org/html5/16.html" target="_blank">移动端布局</a>
								<a href="http://video.mobiletrain.org/html5/3.html" target="_blank">HTML基础</a>
								<a href="http://video.mobiletrain.org/python/1.html" target="_blank">Python3开发环境搭建</a>
								<a href="http://video.mobiletrain.org/python/2.html" target="_blank">Python基本数据类型</a>
								<a href="http://video.mobiletrain.org/java/1.html" target="_blank">java开发入门</a>
								<a href="http://video.mobiletrain.org/java/2.html" target="_blank">java基础编程</a>
								<a href="http://video.mobiletrain.org/java/19.html" target="_blank">java项目实战</a>
								<a href="http://video.mobiletrain.org/java/14.html" target="_blank">正则表达式</a>
								<a href="http://video.mobiletrain.org/java/10.html" target="_blank">多线程与并发</a>
							</p>
						</div>
						<div className={this.state.tab[1]?'active':''}>
							<p>
								<a href="http://www.fsdev.com.cn/" title="嵌入式实验室建设" target="_blank">嵌入式实验室建设</a>   
								<a href="http://www.shckw.org/" title="上海成人高考网" target="_blank">上海成人高考网</a>   
								<a href="http://www.xuewell.com/" title="学会计" target="_blank">学会计</a>   
								<a href="https://www.phpxy.com/" target="_blank">PHP视频教程</a>
								<a href="http://www.itjiaocheng.com/" target="_blank">it教程网</a>
								<a href="http://www.jczhijia.com/" target="_blank">教程之家</a>
								<a href="http://www.seo156.com/ " target="_blank">SEO教程</a>
								<a href="http://www.fomter.com/" target="_blank">inventor培训</a>
								<a href="http://xiaogan.huatu.com/" target="_blank">孝感人事考试网</a>
								<a href="http://shaoeryingyu.91jm.com/" target="_blank">少儿英语加盟</a>
								<a href="http://guoji.tantuw.com/" target="_blank">国际学校</a>
								<a href="http://www.ruczzedu.com/" target="_blank">在职研究生</a>
								<br/>
								<span>友链申请（qq）：2076999145</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}