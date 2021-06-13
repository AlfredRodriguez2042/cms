import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const ProfileForm = () => {
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
    label: name,
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
        <CardHeader title="Profile" subheader="Edit you information" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                {...formikProps('name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                {...formikProps('email', 'email')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                {...formikProps('phone', 'number')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                {...formikProps('password', 'password')}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth variant="outlined" select>
                <option value="Argentina">Argentina</option>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
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

export default ProfileForm
