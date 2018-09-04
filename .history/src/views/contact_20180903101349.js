import React from 'react';
import { Header, Footer } from 'containers'
import { ThinSlice, GroupSheet } from 'sheet'

class Me extends React.Component {
	render() {
		window.name = "haha"
		let sheetList = [
			{
				text: '新的朋友',
				icon: 'icon-baibaoxiang'
			},
			{
				text: '群聊',
				icon: 'icon-task-'
			},
			{
				text: '标签',
				icon: 'icon-qiabao'
			},
			{
				text: '表情',
				icon: 'icon-biaoqing'
			}
		]
		return (
			<div>
				<Header></Header>
        <GroupSheet sheetList={sheetList}></GroupSheet>
        <div className="item-dis"></div>
				<ThinSlice obj={{text: '钱包', icon: 'icon-qianbao'}}></ThinSlice>
				<div className="item-dis"></div>
				<GroupSheet sheetList={sheetList}></GroupSheet>
				<div className="item-dis"></div>
				<ThinSlice obj={{text: '设置', icon: 'icon-ordinaryset'}}></ThinSlice>
				<Footer></Footer>
			</div>
		)
	}
}

export default Me
