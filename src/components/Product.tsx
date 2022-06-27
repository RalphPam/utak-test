import { Card, Typography } from 'antd'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { FormState } from '../types/form'
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
}

const Product = ({ setFormState }: ProductProps) => {
  return (
    <StyledCard onClick={() => setFormState('view')}>
      <Name>Product Name</Name>
    </StyledCard>
  )
}

export default Product
