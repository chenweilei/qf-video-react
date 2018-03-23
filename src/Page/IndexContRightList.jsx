import React, {Component} from 'react'
import IndexContRightPagination from './IndexContRightPagination';
import loadGif from '../timg.gif';

class IndexContRightList extends Component{
	constructor(props){
		super(props)
		this.state={
			//当前页数据
			curdata: null,
			//当前视频类型
			type: null,
			//当前类型的 总页码
			page: null,
			// 当前类型的当前页码
			curPage: 1
		}
		//设置每页的数据条数
		this.pageDataCount = 9;
		// 存放 总的视频数据
		this.listdata = null;
		//存放 当前页的视频数据
		this.curData = null;

	}
	/* 根据 url query参数 获取 视频type */
	getQueryData(str){
		if(str === ''){
			return null;
		}
		let json = {};
		let arr = (str.substring(1)).split('&');
		for(let i=0; i<arr.length; i++){
			json[arr[i].split('=')[0]] = arr[i].split('=')[1];
			if(arr[i].split('=')[0] === 'type'){
				return arr[i].split('=')[1]
			}
		}
	}
	componentDidMount(){
		//组件第一次加载完成时 获取所有视频的数据
		fetch('/indexdata.json')
		.then(function(res){
			return res.json()
		})
		.then( data => {
			this.listdata = data;
			this.setData(this.props);
		})

	}
	componentWillReceiveProps(props){
		this.setData(props);
	}
	/* 根据 type="xxxx" 来设置当前页的数据 */
	setData(props){
		let type = this.getQueryData(props.location.search);
		this.listdata.map( (val, key) => {
			if(val.type === decodeURI(type)){
				this.curData = val;
				this.setState({
					curdata: val
				}, () => this.getPageNum())
			}
		})
		if(!this.state.curdata){
			this.curData = this.listdata[0];
			this.setState({
				curdata: this.listdata[0]
			}, () => this.getPageNum())
		}
	}
	/* 当切换视频类型时 根据数据每页的数据条数 设置 总的页码；并将当前页重置为1 */
	getPageNum(){
		let num = Math.ceil(this.state.curdata.data.length/this.pageDataCount);
		this.setState({
			page: num,
			curPage: 1,
		}, () => {this.setCurPageData()})		
	}
	/* 循环 视频列表组件 */
	getList(){
		if(this.state.curdata){
			return this.state.curdata.data.map((val, key) => {
				let {titleurl, titlepic, title, ftitle} = val;
				return (
					<li key={key}>
						<a rel="nofollow" href={titleurl} target="_blank">
						<img src={`http://video.mobiletrain.org${titlepic}`} height="177" width="270" />
						<p>{title}<span>{ftitle}</span></p></a>
					</li>
				)
			})
		}else{
			return null;
		}
	}
	/* 
	*	传递给分页器组件的回掉函数 
	*	n: 当前页码
	*/
	handleClick(n){
		let num = this.state.curPage;

		if(n === 'prev' && num >= 1){
			num--;
		}else if(n === 'next' && num <= this.state.page ){
			num++;
		}else if(n !== 'prev' && n !== 'next'){
			num = n;
		}

		if(num < 1 || num > this.state.page){
			return 
		}
		//设置当前页码
		this.setState({
			curPage: num
		}, () => { this.setCurPageData() })
	}
	/* 设置当前页的数据 */
	setCurPageData(){
		/*复制 当前页的数据*/
		let data = JSON.parse(JSON.stringify(this.curData));
		let cur = this.state.curPage;
		let num = this.pageDataCount;

		data.data = data.data.slice((cur-1)*num, cur*num)

		this.setState({
			curdata: data
		})
	}
	render(){

		return (
			<div>
				<div style={{textAlign: 'center', display: this.state.curdata?'none':'block'}}><img src={loadGif} alt=""/></div>
				<ul className="myRight_center">{this.getList()}</ul>
				<IndexContRightPagination page={this.state.page} curPage={this.state.curPage} onClick={this.handleClick.bind(this)}></IndexContRightPagination>
			</div>
		)
	}

}

export default IndexContRightList