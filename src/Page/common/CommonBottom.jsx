import React, { Component } from 'react';
import './CommonBottom.css'

export default class CommonBottom extends Component{
	render(){
		return (
			<div>
				<div className="bottom_part2">
					<div className="c_bot">
						<div className="c_base clear">
							<div className="c_bot_lt">
								<div className="c_bot_lt_hd">
									<a href="javascript:void(0);" className="active">北京</a>
								</div>
								<ul>
									<li style={{display: 'list-item'}}>
										<strong>北京天丰利校区（总部）：北京市海淀区宝盛北里西区28号天丰利商城4层</strong><br/>
										北京沙河校区：北京市昌平区沙阳路18号北京科技职业技术学院广场服务楼2、3层<br/>
										咨询电话：<span>400-811-9990    010-82790226-801</span><br/>
										面授课程：全栈HTML5+培训、全链路设计培训、PHP全栈+服务器集群培训、JavaEE+分布式开发培训、大数据+人工智能培训、Unity游戏开发培训、Python培训、云计算+Python运维培训、全栈软件测试培训、Android培训、iOS培训、好程序员
									</li>
								</ul>
							</div>
							<div className="c_bot_rg">
								<ul className="clear">
									<li style={{paddingRight:'15px'}}>
										<img src="http://www.mobiletrain.org/images/c_bot_fxb.png" alt="千锋教育服务号"/>
										<p>了解千锋动态<br/>关注千锋教育服务号</p>
									</li>
									<li style={{paddingRight:'15px'}}>
										<img src="http://www.mobiletrain.org/images/c_bot_mobile.png" width="120" height="120" alt="千锋教育移动站"/>
										<p>扫一扫快速进入<br/>千锋移动端页面 </p>
									</li>								
									<li>
										<img src="http://www.mobiletrain.org/images/c_bot_wx.png" alt="千锋互联服务号"/>
										<p>扫码匿名提建议<br/>直达CEO信箱</p>
									</li>
								</ul>
							</div>	
						</div>
					</div>
				</div>

				<div className="bottom_part3">
					<div className="c_footer base">
						<div className="c_footer_nav">
							<a rel="nofollow" href="http://www.mobiletrain.org/about/" target="_blank">关于千锋</a> | 
							<a rel="nofollow" href="http://www.mobiletrain.org/about/contact.html" target="_blank">联系我们</a> | 
							<a rel="nofollow" href="http://www.mobiletrain.org/cooperation/" target="_blank">企业合作</a> | 
							<a rel="nofollow" href="http://www.mobiletrain.org/about/job.html" target="_blank">招贤纳士</a> | 
							<a rel="nofollow" href="http://tb.53kf.com/code/client/10132404/3" style={{cursor:'pointer'}} target="_blank">报名咨询</a> | 
							<a href="http://video.mobiletrain.org/" target="_blank">教学视频</a> | 
							<a rel="nofollow" href="http://www.mobiletrain.org/lecture/" target="_blank">学习资料</a> | 
							<a rel="nofollow"  href="http://bbs.mobiletrain.org/forum.php" target="_blank">学员论坛</a> | 
							<a href="http://www.mobiletrain.org/sitemap.html" target="_blank">网站地图</a> | 
							<a href="http://list.qq.com/cgi-bin/qf_invite?id=b8dbe50f0720fbac13c01a3164cddf60ec63557f6d474ee9" rel="nofollow" target="_blank">RSS订阅</a>
						</div>
						<p>Copyright 2011-2015 <a  href="http://www.1000phone.com/" rel="nofollow" target="_blank" title="千锋互联">北京千锋互联科技有限公司</a> 京ICP备12003911号-3 京公网安备11010802011455号
						</p>
					</div>
				</div>
			</div>		
		)
	}
}