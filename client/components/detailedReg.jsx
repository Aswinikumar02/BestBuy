import React from 'react';
import Collapsible from 'react-collapsible';
import {
  Form,
  Dropdown,
  Grid,
  Checkbox,
  Accordion,
  Icon,
  Input,
  Table,
  Radio
} from 'semantic-ui-react';
import MenuBar from './MenuBar.jsx';
import WebLayout from './webLayout.jsx'
export default class Detailed extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0,
      value1: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, titleProps) {
    const {index} = titleProps
    const {activeIndex} = this.state
    const newIndex = activeIndex === index
      ? -1
      : index

    this.setState({activeIndex: newIndex})
  }


  render() {
    const options = [
      {
        key: 'angular',
        text: 'Angular',
        value: 'angular'
      }, {
        key: 'css',
        text: 'CSS',
        value: 'css'
      }, {
        key: 'design',
        text: 'Graphic Design',
        value: 'design'
      }, {
        key: 'ember',
        text: 'Ember',
        value: 'ember'
      }, {
        key: 'html',
        text: 'HTML',
        value: 'html'
      }, {
        key: 'ia',
        text: 'Information Architecture',
        value: 'ia'
      }, {
        key: 'javascript',
        text: 'Javascript',
        value: 'javascript'
      }, {
        key: 'mech',
        text: 'Mechanical Engineering',
        value: 'mech'
      }, {
        key: 'meteor',
        text: 'Meteor',
        value: 'meteor'
      }, {
        key: 'node',
        text: 'NodeJS',
        value: 'node'
      }, {
        key: 'plumbing',
        text: 'Plumbing',
        value: 'plumbing'
      }, {
        key: 'python',
        text: 'Python',
        value: 'python'
      }, {
        key: 'rails',
        text: 'Rails',
        value: 'rails'
      }, {
        key: 'react',
        text: 'React',
        value: 'react'
      }, {
        key: 'repair',
        text: 'Kitchen Repair',
        value: 'repair'
      }, {
        key: 'ruby',
        text: 'Ruby',
        value: 'ruby'
      }, {
        key: 'ui',
        text: 'UI Design',
        value: 'ui'
      }, {
        key: 'ux',
        text: 'User Experience',
        value: 'ux'
      }
    ]
    const {activeIndex} = this.state
    return (<div>
      <MenuBar/>
      <div>
        <Grid>
          <Grid.Column width={4}/>
          <Grid.Column width={10}>
        <Accordion styled="styled" style={{
            marginTop: '10%'
          }}>
          <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' size='tiny'/>
            Product Category
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Form inline="inline">
              <Form.Field>
                <label>Category</label>
                <Input placeholder=''/>
              </Form.Field>
              <label>Additional Filters
              </label>
              <Table celled="celled" fixed="fixed" singleLine="singleLine">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Field</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell><Dropdown fluid="fluid" multiple="multiple" search="search" selection="selection" placeholder='Select' option={options}/></Table.Cell>
                    <Table.Cell><Input fluid="fluid"/></Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Form>
          </Accordion.Content>

          <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown'/>
            Home page selection
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Radio label='Default Home Page' name='radioGroup' value='Default' checked={this.state.value === 'Default'} onChange={()=>{this.setState({ value: 'Default' })}} /><br/><br/>
            <Radio label='Dynamic Home Page' name='radioGroup' value='Dynamic' checked={this.state.value === 'Dynamic'} onChange={()=>{this.setState({ value: 'Dynamic' })}}/><br/><br/>
            <Radio label='Static Home Page' name='radioGroup' value='Static' checked={this.state.value === 'Static'} onChange={()=>{this.setState({ value: 'Static' })}}/><br/><br/>
            <Form>
    <Form.Field required inline>
      <label>Header Style1</label>
      <Dropdown placeholder='Select' />
    </Form.Field>
  </Form><br/><br/>
  <Form>
<Form.Field required inline>
<label>Header Style2</label>
<Dropdown placeholder='Select' />
</Form.Field>
</Form><br/><br/>
<Form>
<Form.Field required inline>
<label>MastHead URL</label>
<Input placeholder='' />
<a style={{marginLeft:'2%'}} href=''>Select MastHead URL</a>
</Form.Field>
</Form><br/><br/>
<Checkbox label='Enable Geek Squad Banner' />

          </Accordion.Content>

          <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown'/>
            Template Selection
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <WebLayout/>
          </Accordion.Content>
        </Accordion>
      </Grid.Column>
      <Grid.Column width={4}/>
        </Grid>
      </div>
    </div>);
  }
}
