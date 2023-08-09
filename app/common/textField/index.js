import { Field, getIn, useFormikContext } from 'formik'

import styles from './textfield.module.css'

export default (props) => {
  const {
    label,
    name,
    ...other
  } = props
  const { isSubmitting, errors, touched } = useFormikContext()

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && Boolean(fieldError)

  return (
    <div className={`${styles.root} ${showError && styles.withError}`}>
      <p className={styles.label}>{label}</p>
      <Field
        type='text'
        name={name}
        disabled={isSubmitting}
        className={styles.input}
        {...other}
      />
      <hr className={styles.line} />
      {showError && <div className={styles.error}>{fieldError}</div>}
    </div>
  )
}