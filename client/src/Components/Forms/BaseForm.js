import { Button, TextField } from '@material-ui/core'
import { Form, Formik } from 'formik'
import React from 'react'

//  inputs [...{}]
const BaseForm = ({ initialState, validateSchema, onsubmit, inputs }) => {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={validateSchema}
      onSubmit={onsubmit}
    >
      {(props) => {
        const { values, touched, errors } = props
        const { handleBlur, handleChange } = props
        const { isSubmitting, isValid } = props
        const formikProps = (name, type = 'text', initialValue = '') => ({
          name,
          // label: name,
          type,
          value:
            typeof values[name] !== 'undefined' ? values[name] : initialValue,
          onChange: handleChange,
          onBlur: handleBlur,
          error: touched[name] && errors[name],
          helperText: touched[name] ? errors[name] : '',
        })

        return (
          <Form>
            {inputs.map((item, i) => (
              <TextField
                fullWidth
                key={i}
                placeholder={item.placeholder}
                {...formikProps(item.name, item.type)}
              />
            ))}

            <Button
              type="submit"
              fullWidth
              disabled={!isValid || isSubmitting}
              color="primary"
            >
              Submit
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default BaseForm
