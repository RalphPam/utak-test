import 'antd/dist/antd.min.css'
import { Layout, Space } from 'antd'
import styled from 'styled-components'
import { getDatabase, ref, set } from 'firebase/database'
import { v4 as uuidV4 } from 'uuid'
import { Header, Product, ProductForm } from './components'
import colors from './utils/color'
import { useEffect, useState } from 'react'
import type { FormState } from './types/form'

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
  const [ formState, setFormState ] = useState<FormState>(null)
  return (
    <Layout>
      <Header setFormState={setFormState} />
      <StyledLayout>
        <StyledContent>
          <Space wrap size={12}>
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
            <Product setFormState={setFormState} />
          </Space>
        </StyledContent>
        <ProductForm formState={formState} setFormState={setFormState} />
      </StyledLayout>
    </Layout>
  )
}

export default App
