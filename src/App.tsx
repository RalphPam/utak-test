import 'antd/dist/antd.min.css'
import { Layout } from 'antd'
import styled from 'styled-components'
import { Header } from './components'

const { Content, Sider } = Layout

const StyledLayout = styled(Layout)`
  height: calc(100vh - 64px);
`

function App() {
  return (
    <Layout>
      <Header />
      <StyledLayout>
        <Content>Content</Content>
        <Sider collapsedWidth={0}>Sider</Sider>
      </StyledLayout>
    </Layout>
  )
}

export default App
