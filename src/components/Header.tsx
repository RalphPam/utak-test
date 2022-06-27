import { Layout, Button } from 'antd'
import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'
import { FormState } from '../types/form'
import colors from '../utils/color'

const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${colors.black90};
  border-bottom: 1px solid ${colors.borderColor};
`

interface HeaderProps {
  setFormState: Dispatch<SetStateAction<FormState>>
}

const Header = ({ setFormState }: HeaderProps) => {
  return (
    <StyledHeader>
      <Button type='primary' size='large' onClick={() => setFormState('create')}>CREATE</Button>
    </StyledHeader>
  )
}

export default Header
