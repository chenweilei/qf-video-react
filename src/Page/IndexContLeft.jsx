import React, {Component} from 'react';
import './IndexContLeft.css'

class IndexContLeft extends Component{
	render(){
		return (

			<div className="fl main_left">
				<h2>学习资源分类</h2>
				<ul>
					<li>
						<h5>视频教程下载</h5>
						<p>
							<a href="http://video.mobiletrain.org/html5/" title="HTML5视频教程" target="_blank">HTML5</a>
							<a href="http://video.mobiletrain.org/php/" title="PHP视频教程"  target="_blank">PHP</a>
							<a href="http://video.mobiletrain.org/java/" title="Java视频教程" target="_blank">JavaEE</a>
							<a href="javascript:;"  style={{cursor: 'not-allowed'}}  target="_blank">大数据开发</a>
							<a href="javascript:;"  style={{cursor: 'not-allowed'}}  target="_blank">VR/AR</a>
							<a href="http://video.mobiletrain.org/linux/" title="Linux云计算视频教程" target="_blank">Linux云计算运维</a>
							<a href="http://video.mobiletrain.org/python/" title="Python视频教程" target="_blank">Python</a>
							<a href="http://video.mobiletrain.org/rjcs/" title="软件测试视频教程" target="_blank">软件测试</a>
							<a href="http://video.mobiletrain.org/ui/" title="UI视频教程" target="_blank">UI</a>
						</p>
					</li>
					<li>
						<h5>学习工具下载</h5>
						<p>
							<a href="http://video.mobiletrain.org/html5/" title="HTML5学习工具" target="_blank">HTML5</a>
							<a href="http://video.mobiletrain.org/php/" title="PHP学习工具" target="_blank">PHP</a>
							<a href="http://video.mobiletrain.org/java/" title="Java学习工具" target="_blank">JavaEE</a>
							<a href="http://video.mobiletrain.org/linux/" title="Linux学习工具" target="_blank">Linux云计算运维</a><br/>
							<a href="http://video.mobiletrain.org/ui/" title="UI学习工具" target="_blank">UI</a>
							<a href="http://video.mobiletrain.org/rjcs/" title="软件测试学习工具" target="_blank">软件测试</a>
						</p>
					</li>
					<li>
						<h5>学习路线图</h5>
						<p>
							<a href="http://video.mobiletrain.org/html5/"  title="HTML5学习路线图" target="_blank">HTML5</a>
							<a href="http://video.mobiletrain.org/php/" title="php学习路线图"  target="_blank">PHP</a>
							<a href="http://video.mobiletrain.org/java/" title="Java学习路线图" target="_blank">JavaEE</a>
							<a href="javascript:;"  style={{cursor: 'not-allowed'}}>大数据开发</a>
							<a href="javascript:;"  style={{cursor: 'not-allowed'}}>VR/AR</a>
							<a href="http://video.mobiletrain.org/linux/" title="Linux学习路线图" target="_blank">Linux云计算运维</a>
							<a href="http://video.mobiletrain.org/python/" title="Python学习路线图" target="_blank">Python</a>
							<a href="http://video.mobiletrain.org/rjcs/" title="软件测试学习路线图" target="_blank">软件测试</a>
							<a href="http://video.mobiletrain.org/ui/" title="UI学习路线图" target="_blank">UI</a>
						</p>
					</li>
					<li>
						<dl>
							<dt>html5技术分享</dt>
							<dd><a href="/html5/283.html" target="_blank">静态网页制作，合理应用HTML和CSS</a></dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>Linux技术分享</dt>
							<dd><a href="/linux/208.html" target="_blank">Python模块学习之日志记录logging</a></dd>
						</dl>
					</li> 
					<li>
						<dl>
							<dt>Java技术分享</dt>
							<dd><a href="/java/1520241436309.html" target="_blank">Java开发之单例模式介绍</a></dd>
						</dl>
					</li> 
					<li>
						<dl>
							<dt>软件测试技术分享</dt>
							<dd><a href="/rjcs/264.html" target="_blank">Postman入门学习之Postman新建功能详解</a></dd>
						</dl>
					</li> 
					<li>
						<dl>
							<dt>Python技术分享</dt>
							<dd><a href="/python/238.html" target="_blank">CrazyWing：Python自动化运维开发实战 六、流程控制</a></dd>
						</dl>
					</li> 
					<li>
						<dl>
							<dt>UI技术分享</dt>
							<dd><a href="/ui/1515399026252.html" target="_blank">UI设计之用PS工具设计视觉封面</a></dd>
						</dl>
					</li> 
					<li>
						<dl>
							<dt>PHP技术分享</dt>
							<dd><a href="/php/258.html" target="_blank">PHP的openssl扩展使用openssl加密扩展包</a></dd>
						</dl>
					</li> 	  
				</ul>
			</div>

		)
	}
}

export default IndexContLeft;