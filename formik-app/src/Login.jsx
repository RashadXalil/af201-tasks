import React from 'react'
import { useFormik, Formik, Form, Field } from 'formik'
import Validations from './validations/user.validation'
import * as Yup from 'yup'
import { AiFillAndroid } from 'react-icons/ai'

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})
const Login = () => {
  //   const { handleSubmit, handleChange, values } = useFormik({
  //     initialValues: {
  //       username: '',
  //       password: '',
  //     },
  //     onSubmit: (values) => {
  //       console.log(values)
  //     },
  //   })

  return (
    // <Formik
    //   initialValues={{
    //     username: '',
    //     password: '',
    //     accept: false,
    //   }}
    //   onSubmit={(values) => {
    //     console.log(values)
    //     const newUser = new User(values.username, values.password)
    //     Users.push(newUser)
    //     console.log(Users)
    //   }}
    //   validationSchema={UserSchema}
    // >
    //   {({ values, handleSubmit, handleChange }) => {
    //     return (
    //       <Form>
    //         <Field name="username" placeholder="salam" />
    //         <Field name="password" placeholder="sagol" />
    //         <label>
    //           okey
    //           <Field type="checkbox" name="accept" />
    //         </label>
    //         <button disabled={!values.accept} type="submit">
    //           Submit
    //         </button>
    //       </Form>
    //     )
    //   }}
    // </Formik>
    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="username">Username</label>
    //   <input
    //     type="text"
    //     value={values.username}
    //     onChange={handleChange}
    //     id="username"
    //   />{' '}
    //   <br />
    //   <label htmlFor="password">Password</label>
    //   <input
    //     type="password"
    //     onChange={handleChange}
    //     value={values.password}
    //     id="password"
    //   />
    //   <button type="submit">Submit</button>
    // </form>
    <div>
      <h3>
        {' '}
        Lets go for a <AiFillAndroid />?{' '}
      </h3>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div style={{ color: 'red' }}>{errors.firstName}</div>
            ) : null}
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <Field name="email" type="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
