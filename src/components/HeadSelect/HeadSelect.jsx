import React, { Component } from 'react'
import {List,Grid} from 'antd-mobile'
export default class HeadSelect extends Component {
  
     state = {
        headList:[],
        icon:null
     }

     // 每个宫格点击的回调，把当前icon地址保存，然后更改父组件的header状态
     handleClick = ({text,icon}) => {
        this.setState({icon})
        this.props.setHeader(text)
     }


    componentDidMount(){
        let heads = [];
        let newHeads = []
        for(let i = 1;i < 21;i++ ){
            heads.push({
                text:'头像'+i,
                icon: require(`./images/头像${i}.png`)
            })
        }
        heads.forEach((item,i)=> {
            newHeads.push({text:item.text,icon:item.icon.default})
        })

        this.setState({headList:newHeads})
       
    } 

    render() {
        const {headList,icon} = this.state

        const listHeader = !icon ? '请选择头像' : ( <p style={{display:'flex',alignItems:'center',margin:0}}>
              <span style={{marginRight:'10px'}}>已选择头像</span> <img style={{width:'35px',height:'35px'}} src={icon} alt="" />
            </p> )
        return (
            <List renderHeader={ ()=> listHeader}>
                <Grid data={headList} columnNum={5} onClick={this.handleClick} />
            </List>
        )
    }
}
