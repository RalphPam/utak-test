import { Card, Typography } from 'antd'
import styled from 'styled-components'
import colors from '../utils/color'

const StyledCard = styled(Card)`
  background-color: ${colors.lightBlack};
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

const Product = () => {
  return (
    <StyledCard>
      <Name>Product Name</Name>
    </StyledCard>
  )
}

export default Product
