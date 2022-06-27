import { Button, Form, Input, Layout, Row, Select, Space } from 'antd'
import styled from 'styled-components'
import colors from '../utils/color'

const StyledSlider = styled(Layout.Sider)`
  background-color: ${colors.black80};
  padding: 20px 12px 40px;
  height: calc(100vh - 64px);
  overflow-y: auto;
  .ant-layout-sider-children {
    height: auto;
  }
`

const FormItem = styled(Form.Item)`
  .ant-form-item-label > label {
    color: ${colors.white};
  }
`

const StyledInput = styled(Input)`
  &.ant-input {
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.borderColor};
    background-color: transparent;
    color: ${colors.white};
    padding-left: 0;
    &:focus {
      box-shadow: none;
    }
  }
`

const StyledSelect = styled(Select)`
  padding: 0;
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: transparent;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colors.borderColor};
    color: ${colors.white};
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${colors.borderColor};
    box-shadow: none;
  }
  &.ant-select-multiple .ant-select-selection-item {
    background-color: gray;
  }
  &.ant-select-multiple .ant-select-selection-search {
    margin-inline-start: 0px;
  }
  &.ant-select-multiple .ant-select-selector {
    padding: 0px;
  }
  &.ant-select-multiple.ant-select-disabled.ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    background-color: transparent;
    border: none;
  }
  &.ant-select-disabled.ant-select-multiple .ant-select-selection-item {
    color: ${colors.white};
  }
`

const Header = styled(Row)`
  margin-bottom: 14px;
  .ant-btn-dashed {
    background-color: transparent;
  }
`

const Edit = styled(Button)`
 &.ant-btn-dashed {
    border-color: ${colors.orange};
    color: ${colors.orange};
  }
`

const Minimize = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  display: flex;
`

const ProductForm = () => {
  return (
    <StyledSlider width={350} collapsedWidth={0}>
      <Header justify="space-between">
        <Minimize>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Minimize>
        <Space>
          <Edit type="dashed">
            EDIT
          </Edit>
          <Button type="dashed" danger>
            DELETE
          </Button>
        </Space>
      </Header>
      <Form
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}>
        <FormItem label="Category">
          <StyledInput />
        </FormItem>
        <FormItem label="Name">
          <StyledInput />
        </FormItem>
        <FormItem label="Options">
          <StyledSelect mode="tags" open={false} />
        </FormItem>
        <FormItem label="Price($)">
          <StyledInput type="number" />
        </FormItem>
        <FormItem label="Cost($)">
          <StyledInput type="number" />
        </FormItem>
        <FormItem label="Stock">
          <StyledInput type="number" />
        </FormItem>
        <FormItem wrapperCol={{ span: 24 }}>
          <Row justify="end">
            <Space>
              <Button
                type="primary"
                danger>
                CANCEL
              </Button>
              <Button type="primary" htmlType="submit">
                SAVE
              </Button>
            </Space>
          </Row>
        </FormItem>
      </Form>
    </StyledSlider>
  )
}

export default ProductForm
