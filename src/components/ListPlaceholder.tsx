import { Empty, Spin } from 'antd'
import styled from 'styled-components'
import colors from '../utils/color'

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

interface ListPlaceholderProps {
  isLoading: boolean
}

const ListPlaceholder = ({ isLoading }: ListPlaceholderProps) => {
  return (
    <Container>
      {isLoading ? <Spin size='large' /> : <Empty />}
    </Container>
  )
}

export default ListPlaceholder
