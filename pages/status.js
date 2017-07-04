import React, { Component } from 'react'
import { Layout } from '../components/'

class Status extends Component {
  render() {
    const { name, params } = this.props.query
    return (
      <Layout>
        <div className="container">
          <h2>#Status</h2>
          <article>
            <h3>data passed from express.</h3>
            <p>#name: {name}</p>
            <p>#params: {JSON.stringify(params)}</p>
          </article>
        </div>
      </Layout>
    )
  }
}

Status.getInitialProps = function (ctx) {
  const query = ctx.query
  return {
    query
  }
}

export default Status