import 'antd/dist/antd.min.css'
import { Layout, Space } from 'antd'
import styled from 'styled-components'
import { Header, Product } from './components'
import colors from './utils/color'

const { Content, Sider } = Layout

const StyledLayout = styled(Layout)`
  height: calc(100vh - 64px);
`

const StyledContent = styled(Content)`
  background-color: ${colors.black};
  padding: 12px;
`

function App() {
  return (
    <Layout>
      <Header />
      <StyledLayout>
        <StyledContent>
          <Space wrap size={12}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </Space>
        </StyledContent>
        <Sider collapsedWidth={0}>Sider</Sider>
      </StyledLayout>
    </Layout>
  )
}

export default App
