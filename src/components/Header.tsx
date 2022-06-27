import { Layout, Button, Row } from 'antd'
import styled from 'styled-components'

const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <Button type='primary' size='large'>CREATE</Button>
    </StyledHeader>
  )
}

export default Header
