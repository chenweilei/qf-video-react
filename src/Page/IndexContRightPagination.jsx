import React, {Component} from 'react'
import './pagination.css'
import './IndexContRightPagination.css'

class IndexContRightPagination extends Component{

	getPagination(){
		if(!this.props.page){
			return null;
		}
		let arr = [];
		let prev = (
			<li key="prev" className="paginationjs-prev disabled">
				<a href="javascript:;" onClick={ () => {this.props.onClick('prev')}} > « </a>
			</li>
		)
		let next = (
			<li key="next" className="paginationjs-next disabled">
				<a href="javascript:;" onClick={ () => {this.props.onClick('next')}} > » </a>
			</li>
		)


		arr.push(prev);
		for(let i=0; i<this.props.page; i++){
			let pageN = null;

			pageN = (
				<li key={i+1} className={`paginationjs-page J-paginationjs-page ${this.props.curPage===(i+1)?'active':''}`} onClick={ () => {this.props.onClick(i+1)} } >
					<a href="javascript:;">{(i+1)}</a>
				</li>
			);

			arr.push(pageN);
		}

		arr.push(next);
		return arr;
	}
	render(){
		return (
			<div className="page" id="pagination">
				<div className="paginationjs paginationjs-theme-blue">
					<div className="paginationjs-pages">
						<ul>{this.getPagination()}</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default IndexContRightPagination;