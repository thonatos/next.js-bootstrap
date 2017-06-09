import Document, { Head } from 'next/document'
import { DOMProperty } from 'react-dom/lib/ReactInjection'
import { properties as DOMProperties } from 'react-dom/lib/DOMProperty'

// By default React limit the set of valid DOM elements and attributes
// (https://github.com/facebook/react/issues/140) this config whitelist
// Amp elements/attributes
if (typeof DOMProperties.amp === 'undefined') {
  DOMProperty.injectDOMPropertyConfig({
    Properties: { amp: DOMProperty.MUST_USE_ATTRIBUTE },
    isCustomAttribute: attributeName => attributeName.startsWith('amp-')
  })
}

export default class MtDocument extends Document {
  render() {
    const { html } = this.props
    return (
      <html amp=''>
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
        </Head>
        <body>
          <div id='__next' dangerouslySetInnerHTML={{ __html: html }} />
        </body>
      </html>
    )
  }
}