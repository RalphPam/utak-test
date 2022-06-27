import { Card, Typography } from 'antd'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { FormState } from '../types/form'
import { GetProductsResponse } from '../types/response'
import colors from '../utils/color'

const StyledCard = styled(Card)`
  background-color: ${colors.black90};
  width: 100px;
  height: 100px;
  border-radius: 7px;
  border-color: ${colors.borderColor};
  .ant-card-body {
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &.active {
    box-shadow: 0 0 0 5px ${colors.green25};
    border-color: ${colors.green};
  }
`

const Name = styled(Typography.Text)`
  text-align: center;
  color: ${colors.white};
  font-weight: 500;
  font-size: 16px;
  .ant-typography {
    color: ${colors.white};
  }
`

interface ProductProps {
  setFormState: Dispatch<SetStateAction<FormState>>
  productDetails: GetProductsResponse[number]
  selectedProduct: GetProductsResponse[number] | null
  setSelectedProduct: Dispatch<SetStateAction<GetProductsResponse[number] | null>>
}

const Product = ({
  setFormState,
  productDetails,
  selectedProduct,
  setSelectedProduct,
}: ProductProps) => {
  return (
    <StyledCard
      className={selectedProduct?.id === productDetails.id ? 'active' : ''}
      onClick={() => {
        setFormState('view')
        setSelectedProduct(productDetails)
      }}>
      <Name>{productDetails.name}</Name>
    </StyledCard>
  )
}

export default Product
