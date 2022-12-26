import React from 'react'
import { useFormik } from 'formik'
import User from './User'

const Formm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      username: '',
      surname: '',
    },
    onSubmit: (values) => {
      const { name, surname, email, password, username } = values

      let newUser = new User(name, surname, email, password, username)

      localStorage.setItem('user', JSON.stringify(newUser))
    },
  })
  //   const UserSchema = Yup.object().shape({
  //     name: Yup.string().min(2).max(8).required('Required'),
  //     surname: Yup.string().min(2).max(8).required('Required'),
  //     email: Yup.email().required('Required'),
  //     password: Yup.string().min(2).max(8).required('Required'),
  //     username: Yup.string().min(2).max(8).required('Required'),
  //   })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        placeholder="surname"
        name="surname"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={formik.handleChange}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={formik.handleChange}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Formm
