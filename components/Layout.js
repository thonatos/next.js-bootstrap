import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

import {stylesheet, classNames} from './Layout.css'

const Layout = (props) => (
  <div className={classNames.wrap}>
    <Head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="renderer" content="webkit" />
      <meta name="keywords" content="Thonatos,Thonatos.Yang" />
      <meta name="description" content="Life is short, Play more?" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <title>ShortenURL - MT-Libraries</title>      
      <link rel="stylesheet" href="/static/css/antd.min.css" />            
      <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    </Head>    
    <Header />
    <section className={classNames.content}>
      {props.children}
    </section>
    <Footer />
  </div>
)

export default Layout