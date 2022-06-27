import { Button, Form, Input, Layout, Row, Select, Space } from 'antd'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import { uuidv4 } from '@firebase/util'
import { createProduct, deleteProduct, updateProductDetails } from '../services'
import { FormState, ProductDetails } from '../types/form'
import { GetProductsResponse } from '../types/response'
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
  &.ant-input-status-error:not(.ant-input-disabled):not(.ant-input-borderless).ant-input {
    background-color: transparent;
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

interface ProductFormProps {
  formState: FormState
  setFormState: Dispatch<SetStateAction<FormState>>
  setProducts: Dispatch<SetStateAction<GetProductsResponse>>
  selectedProduct: GetProductsResponse[number] | null
  setSelectedProduct: Dispatch<SetStateAction<GetProductsResponse[number] | null>>
}

const ProductForm = ({
  formState,
  setFormState,
  selectedProduct,
  setProducts,
  setSelectedProduct,
}: ProductFormProps) => {
  const [ form ] = Form.useForm()
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isDeleting, setIsDeleting ] = useState(false)
  const [ isEdited, setIsEdited ] = useState(false)

  const onFinish = async (values: ProductDetails) => {
    if (parseFloat(values.cost) > parseFloat(values.price)) {
      form.setFields([
        {
          name: 'cost',
          errors: [ 'Cost must be less than price' ],
        },
      ])
      return
    }
    setIsLoading(true)
    if (formState === 'create') {
      const id = uuidv4()
      const res = await createProduct(id, values)
      if (res) {
        setProducts(prev => [ ...prev, { ...values, id } ])
        setFormState('view')
      }
    } else if (formState === 'edit' && selectedProduct) {
      const res = await updateProductDetails(selectedProduct.id, values)
      if (res) {
        const updatedDetails = {
          ...values,
          id: selectedProduct.id,
        }
        setSelectedProduct(updatedDetails)
        setProducts(prev => prev.map(item => item.id === selectedProduct.id ? updatedDetails : item))
        setFormState('view')
      }
    }
    setIsLoading(false)
  }

  const onDelete = async () => {
    if (!selectedProduct) return
    setIsDeleting(true)
    const res = await deleteProduct(selectedProduct.id)
    if (res) {
      setProducts(prev => prev.filter(item => item.id !== selectedProduct.id))
    }
    setFormState(null)
    setIsDeleting(false)
  }

  const onFieldsChange = () => {
    setIsEdited(true)
  }

  useEffect(() => {
    // Reset fields when hiding form
    if (formState === null) form.resetFields()
    if (formState === 'view') form.setFieldsValue(selectedProduct)
  }, [ formState ])

  return (
    <StyledSlider width={350} collapsedWidth={0} collapsed={formState === null}>
      <Header justify="space-between">
        <Minimize onClick={() => {
          setFormState(null)
          setSelectedProduct(null)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Minimize>
        <Space>
          {formState === 'view' && (
            <Edit type="dashed" onClick={() => setFormState('edit')}>
              EDIT
            </Edit>
          )}
          {formState !== 'create' && (
            <Button
              type="dashed"
              danger
              onClick={onDelete}
              loading={isDeleting}>
              DELETE
            </Button>
          )}
        </Space>
      </Header>
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 17,
        }}
        onFieldsChange={onFieldsChange}
        form={form}
        onFinish={onFinish}>
        <FormItem
          label="Category"
          name="category"
          rules={[ { required: true, message: 'Category is required' } ]}>
          <StyledInput readOnly={formState === 'view'} />
        </FormItem>
        <FormItem
          label="Name"
          name="name"
          rules={[ { required: true, message: 'Name is required' } ]}>
          <StyledInput readOnly={formState === 'view'} />
        </FormItem>
        <FormItem label="Options" name="options" initialValue={[]}>
          <StyledSelect
            disabled={formState === 'view'}
            mode="tags"
            open={false}
          />
        </FormItem>
        <FormItem
          label="Price($)"
          name="price"
          rules={[ { required: true, message: 'Price is required' } ]}>
          <StyledInput readOnly={formState === 'view'} type="number" />
        </FormItem>
        <FormItem
          label="Cost($)"
          name="cost"
          rules={[ { required: true, message: 'Cost is required' } ]}>
          <StyledInput readOnly={formState === 'view'} type="number" />
        </FormItem>
        <FormItem
          label="Stock"
          name="stock"
          rules={[ { required: true, message: 'Stock is required' } ]}>
          <StyledInput readOnly={formState === 'view'} type="number" />
        </FormItem>
        {formState && [ 'create', 'edit' ].includes(formState) && (
          <FormItem wrapperCol={{ span: 24 }}>
            <Row justify="end">
              <Space>
                <Button
                  type="primary"
                  danger
                  onClick={() =>
                    setFormState(prev => {
                      if (prev === 'create') return null
                      else {
                        form.setFieldsValue(selectedProduct)
                        return 'view'
                      }
                    })
                  }>
                  CANCEL
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={isLoading}
                  disabled={formState === 'edit' ? !isEdited : false}>
                  SAVE
                </Button>
              </Space>
            </Row>
          </FormItem>
        )}
      </Form>
    </StyledSlider>
  )
}

export default ProductForm
