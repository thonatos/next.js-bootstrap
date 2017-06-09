import { Layout } from 'antd'

const { Footer } = Layout
const year = new Date().getFullYear()

export default () => (
  <Footer style={{ textAlign: 'center' }}>
    <p>
      Copyright © {year} . <a href="https://www.thonatos.com/#/">SuYI.</a>
    </p>
  </Footer>
)