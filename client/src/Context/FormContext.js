import React, { createContext, useState, useEffect } from 'react'

const FormContext = createContext()
const FormProvider = ({ children }) => {
  const [values, setValues] = useState()
  const handleChange = ({ target }) => {
    const type = target.type
    const name = target.name
    const value = type === 'checkbox' ? target.checked : target.value
    setValues({ ...values, [name]: value })
  }
  console.log(values)
  return (
    <FormContext.Provider value={{ values, handleChange }}>
      {children}
    </FormContext.Provider>
  )
}

export { FormProvider, FormContext }
