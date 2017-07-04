import Head from 'next/head'
import { Layout } from 'antd'
import Footer from './Footer'
import Header from './Header'
import { stylesheet, classNames } from './Layout.css'

const { Content } = Layout
const BaseLayout = (props) => (
  <Layout style={{ background: '#fff' }}>
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="renderer" content="webkit" />
      <meta name="keywords" content="Thonatos,Thonatos.Yang" />
      <meta name="description" content="Life is short, Play more?" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>Next.js Bootstrap - MT-Libraries</title>
      <link rel="stylesheet" href="/static/css/antd.min.css" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    <Content style={{ padding: '80px 0 0 0', margin: '0 16px' }}>
      {props.children}
    </Content>
    <Footer />
  </Layout>
)

export default BaseLayout