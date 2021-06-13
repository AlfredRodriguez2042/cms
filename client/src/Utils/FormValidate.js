import * as Yup from 'yup'

export const createUserSchema = Yup.object().shape({
  username: Yup.string().min(4).max(12).required(),
  email: Yup.string().email().required(),
  password: Yup.string()
    .min(8)
    .max(16)
    .matches(
      /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
      'Invalid password must be a number and one capital letter'
    ),
})
export const loginUserSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
})
