import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  InputLabel,
  TextField,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const AddressForm = () => {
  const initialValues = {
    name: '',
    password: '',
    email: '',
    showPassword: false,
    phone: '',
  }
  const registerSchema = Yup.object().shape({
    name: Yup.string().min(4).max(8).required(),
    email: Yup.string().email().required(),
  })

  const onSubmit = (values) => {
    console.log(values)
  }
  const formik = useFormik({
    validationSchema: registerSchema,
    initialValues,
    onSubmit,
  })

  const { isValid, isSubmitting, values } = formik
  const formikProps = (name, type = 'text', initialValue = '') => ({
    name,
    // label: name,
    type,
    value: typeof values[name] !== 'undefined' ? values[name] : initialValue,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    error: formik.touched[name] && formik.errors[name],
    helperText: formik.touched[name] ? formik.errors[name] : '',
  })
  return (
    <form autoComplete="off" noValidate>
      <Card>
        <CardHeader title="Shipping Address" subheader=" (*)  required" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="First Name"
                {...formikProps('name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Last Name"
                variant="outlined"
                {...formikProps('last-name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Address"
                variant="outlined"
                {...formikProps('addres')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Cod. Postal"
                variant="outlined"
                {...formikProps('cod-postal')}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Email"
                {...formikProps('email', 'email')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Phone Number"
                {...formikProps('phone', 'number')}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <InputLabel>Country</InputLabel>
              <TextField fullWidth variant="outlined" select>
                <option value="Argentina">Argentina</option>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputLabel>City</InputLabel>
              <TextField fullWidth variant="outlined" select>
                <option value="Buenos Aires">Buenos Aires</option>
              </TextField>
            </Grid>

            <Button
              color="primary"
              fullWidth
              variant="contained"
              disabled={!isValid || isSubmitting}
            >
              Save datails
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </form>
  )
}

export default AddressForm
