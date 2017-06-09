import Layout from '../components/Layout'

const features = [
  '关键字、技术栈：React.js & Next.js & Express.js',
  '短连算法：base58作为短连接生成算法（减少oO0等字符干扰）'
]

export default () => (
  <Layout>
    <div className="container">
      <h2>About</h2>
      <div>
        <ul>
          {
            features.map((v, k) => {
              return (
                <li key={k}>
                  <p>{v}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </Layout>
)
