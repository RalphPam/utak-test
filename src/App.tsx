import 'antd/dist/antd.min.css'
import { Layout, Space } from 'antd'
import styled from 'styled-components'
import { Header, ListPlaceholder, Product, ProductForm } from './components'
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
  const [ isLoading, setIsLoading ] = useState(false)
  const [ selectedProduct, setSelectedProduct ] = useState<
    GetProductsResponse[number] | null
  >(null)

  useEffect(() => {
    setIsLoading(true)
    getProducts().then(products => {
      setProducts(products)
      setIsLoading(false)
    })
  }, [])

  const renderProducts = () => {
    if (products.length === 0) return <ListPlaceholder isLoading={isLoading} />
    return (
      <Space wrap size={12}>
        {products.map(item => (
          <Product
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            productDetails={item}
            key={item.id}
            setFormState={setFormState}
          />
        ))}
      </Space>
    )
  }

  return (
    <Layout>
      <Header setFormState={setFormState} />
      <StyledLayout>
        <StyledContent>
          {renderProducts()}
        </StyledContent>
        <ProductForm
          setSelectedProduct={setSelectedProduct}
          setProducts={setProducts}
          selectedProduct={selectedProduct}
          formState={formState}
          setFormState={setFormState}
        />
      </StyledLayout>
    </Layout>
  )
}

export default App
