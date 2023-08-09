'use client'

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import styles from './subscribe.module.css'
import { manrope } from '/app/lib/fonts'

//creating validation schema for subscription form
const Schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});


export default () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('values', values);
    setSubmitting(false)
    resetForm()
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <h3 className={styles.title}>Join Our Newsletter</h3>

        <Field
          type='email'
          name='email'
          className={styles.input}
          placeholder='Your email address' />
        <button type='submit' className={styles.submit}>Subscribe</button>

        <p className={`${styles.text} ${manrope.className}`}>
          *  Will send you weekly updates for your better tool management.
        </p>
      </Form>
    </Formik>
  )
}