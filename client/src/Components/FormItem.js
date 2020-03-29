import React from 'react'
import { Form } from 'antd'

const FormItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 }
  }
}

function FormItem(props) {
  const { children, ...rest } = props
  return (
    <Form.Item {...FormItemLayout} {...rest}>
      {children}
    </Form.Item>
  )
}
export default FormItem
