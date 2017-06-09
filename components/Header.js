import { Layout, Menu } from 'antd'

const { Header } = Layout
const logoEye = 'https://static.insta360.com/assets/mall/eye@2x.png'

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Status', '/status']
]

export default () => (
  <Header style={{ position: 'fixed', width: '100%', background: '#fff', height: '66px', borderBottom: '1px solid #e9e9e9' }}>
    <div className="logo">
      <img src={logoEye} alt="" />
    </div>
    <Menu
      theme="light"
      mode="horizontal"
      style={{ lineHeight: '64px', borderBottom: 'none' }}
    >
      {
        links.map((value, index) =>
          <Menu.Item key={index}>
            <a href={value[1]}>{value[0]}</a>
          </Menu.Item>
        )
      }
    </Menu>

    <style jsx>{`
    .logo{
      width: 31px;
      height: 31px;        
      border-radius: 6px;
      margin: 16px 24px 16px 0;
      float: left;
    }

    .logo img{
      display: block;
      height: 100%;
    }    
    `}</style>
  </Header>
)