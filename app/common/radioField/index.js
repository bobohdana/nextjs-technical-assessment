import React from 'react'
import { useFormikContext } from 'formik'

import styles from './radiofield.module.css'

export default (props) => {
  const {
    label,
    name,
    ...other
  } = props
  const { values: { subject }, setFieldValue } = useFormikContext()

  const handleChange = () => {
    setFieldValue(name, other.value)
  }

  return (
    <div className={styles.root} onClick={handleChange}>
      <p className={`${styles.label} horizontal`}>
        <span className={`${styles.tick} ${subject == other.value ? styles.cheked : null}`} />
        {label}
      </p>
    </div>
  )
}