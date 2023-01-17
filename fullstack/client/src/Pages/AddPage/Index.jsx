import axios from 'axios'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import styles from './Index.module.css'

function Index() {
  return (
    <div>
      <Formik
        initialValues={{ name: '', price: '', description: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          price: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
          description: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          axios
            .post('http://localhost:8080/products', values)
            .then((res) => console.log(res.data))
          console.log(values)
        }}
      >
        {(props) => (
          <div className={styles.cardCreator}>
            <form onSubmit={props.handleSubmit}>
              <h1>Card Create</h1>
              <input
                type="text"
                placeholder="name"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="name"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <input
                type="text"
                placeholder="price"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.price}
                name="price"
              />
              {props.errors.price && (
                <div id="feedback">{props.errors.price}</div>
              )}
              <input
                type="text"
                placeholder="desciption"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.description}
                name="description"
              />

              <button
                type="submit"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  toast.success('Card created!')
                }}
              >
                Submit
              </button>
            </form>

            <Toaster position="top-center" reverseOrder={false} />
          </div>
        )}
      </Formik>
    </div>
  )
}

export default Index
