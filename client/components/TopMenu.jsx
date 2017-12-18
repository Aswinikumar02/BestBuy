import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class TopMenu extends Component {
  constructor(props){
    super(props);
      this.state = { activeElement: 'call' }
  }

  render() {
    const { activeElement } = this.state
    const TopMenuStyle = {
      marginTop:'-0.5%'
    }
    return (
      <Menu  text style={TopMenuStyle}>
      <Menu.Menu position='right'>
        <Menu.Item style={{ color:'white',fontWeight:'bolder'}} name='Call 1-877-393-1038' active onClick={()=>{this.setState({activeElement:'call'})}} />
        <Menu.Item style={{ color:'white',fontWeight:'bolder'}} name='Education Clients' active onClick={()=>{this.setState({activeElement:'Education Clients'})}} />
        <Menu.Item style={{ color:'white',fontWeight:'bolder'}}  name='My Account' active onClick={()=>{this.setState({activeElement:'My Account'})}} />
        <Menu.Item style={{ color:'white',fontWeight:'bolder'}} name='Sign In or Register' active onClick={()=>{this.setState({activeElement:'Sign In or Register'})}} />
</Menu.Menu>
      </Menu>
    )
  }
}
