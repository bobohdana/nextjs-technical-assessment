'use client'

//using Formik library for forms and yup - for validation
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import styles from './contactForm.module.css'

import TextField from 'app/common/textField'
import RadioField from 'app/common/radioField'

import { subjects } from 'app/lib/utils'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '0',
  message: '',
}

//creating validation schema for a form
const phoneRegExp = /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/
const Schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  message: Yup.string()
    .required('Required'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid!')
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
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.root}>
        <div className={styles.data}>
          <TextField
            name='firstName'
            label='First Name'
            placeholder='I'
          />
          <TextField
            name='lastName'
            label='Last Name'
            placeholder='Doe'
          />
          <TextField name='email' label='Email' />
          <TextField name='phone' label='Phone Number' placeholder='+' />
        </div>

        <h6 className={styles.subtitle}>Select Subject?</h6>
        <div className={`${styles.radioGroup} horizontal`}>
          {subjects.map(({ label, value }) => (
            <RadioField key={value} name={'subject'} label={label} value={value} />
          ))}
        </div>

        <TextField
          name='message'
          label='Message'
          placeholder='Write your message..'
        />

        <button type='submit' className={styles.submit}>Send Message</button>
      </Form>
    </Formik>
  )
}