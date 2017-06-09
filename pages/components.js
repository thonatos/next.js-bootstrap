import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Row, Col, Button } from 'antd'

class Components extends Component {

  state = {
    value: 'null'
  }

  onClick(params, event){
    event.preventDefault()    
    let value = this.state.value   
    this.setState({
      value: 'null'
    }, ()=>{
      console.log(this)
      this.refs.myInput.value = ''      
      alert(`#params: ${params}, #old value: ${value}`)
    })
  }

  onBlur = (ev) => {
    this.setState({
      value: ev.target.value
    })
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <Row style={{ marginTop: '1em' }}>
            <Col span={24}>
              <h2>#Grid</h2>
            </Col>
            <Col span={8}>First</Col>
            <Col span={8}>Second</Col>
            <Col span={8}>Third</Col>
          </Row>

          <Row style={{ marginTop: '1em' }}>
            <Col span={24}>
              <h2>#Input</h2>
            </Col>
            <Col span={12}>
              <input type="text" ref="myInput" onBlur={this.onBlur} /> <span>value: {this.state.value}</span>
            </Col>
            <Col span={12}>
              <Button type="" onClick={this.onClick.bind(this, 'click')}>Clear</Button>
            </Col>
          </Row>
        </div>
      </Layout>
    )
  }
}

export default Components