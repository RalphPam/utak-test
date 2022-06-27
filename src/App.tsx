import 'antd/dist/antd.min.css'
import { Layout, Space } from 'antd'
import styled from 'styled-components'
import { Header, Product, ProductForm } from './components'
import colors from './utils/color'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  height: calc(100vh - 64px);
`

const StyledContent = styled(Content)`
  background-color: ${colors.black};
  padding: 12px;
  height: calc(100vh - 64px);
  overflow-y: auto;
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
        <ProductForm />
      </StyledLayout>
    </Layout>
  )
}

export default App
