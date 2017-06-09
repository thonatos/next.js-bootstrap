import Layout from '../components/Layout'
import React, { Component } from 'react'
import Head from 'next/head'
import { Button } from 'antd'

import {stylesheet, classNames} from './index.css'

const Card = ({ post }) => {
  return (
    <div className={classNames.card}>
      <img src={post.cover} alt="" className={classNames.thumb} />
      <div>
        <h2>
          <a href={post.url} target="_blank" className={classNames.link}>{post.title_cn}</a>
        </h2>
        <span>{post.create_time}</span>&nbsp;<span>{post.location_cn}</span>
      </div>
    </div>
  )
}

class Index extends Component {

  render() {
    const { recommends } = this.props.data

    let cards = []
    for (let key in recommends) {
      cards = cards.concat(recommends[key])
    }

    return (
      <Layout>
        <Head><style dangerouslySetInnerHTML={{__html: stylesheet}} /></Head>             
        <Button type="primary">Primary</Button>
        <div className={classNames.index}>
          {
            cards.map((v, k) => {
              return (
                <div key={k} className={classNames.column}>
                  <Card key={k} post={v} />
                </div>
              )
            })
          }          
        </div>
      </Layout>
    )
  }
}

Index.getInitialProps = function (ctx) {
  const next_data = ctx.req.next_data
  return {
    data: next_data.data || {}
  }
}

export default Index