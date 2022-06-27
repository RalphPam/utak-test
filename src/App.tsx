import 'antd/dist/antd.min.css'
import { Layout, Space } from 'antd'
import styled from 'styled-components'
import { Header, Product, ProductForm } from './components'
import colors from './utils/color'
import { useEffect, useState } from 'react'
import type { FormState } from './types/form'
import { getProducts } from './services'
import { GetProductsResponse } from './types/response'

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
  const [ products, setProducts ] = useState<GetProductsResponse>([])
  const [ selectedProduct, setSelectedProduct ] = useState<
    GetProductsResponse[number] | null
  >(null)

  useEffect(() => {
    getProducts().then(products => setProducts(products))
  }, [])

  const renderProducts = () => {
    if (products.length === 0) return null
    return products.map(item => (
      <Product
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        productDetails={item}
        key={item.id}
        setFormState={setFormState}
      />
    ))
  }

  return (
    <Layout>
      <Header setFormState={setFormState} />
      <StyledLayout>
        <StyledContent>
          <Space wrap size={12}>
            {renderProducts()}
          </Space>
        </StyledContent>
        <ProductForm formState={formState} setFormState={setFormState} />
      </StyledLayout>
    </Layout>
  )
}

export default App
