import styles from 'styles/components/ui/form/row.module.scss'

function Alert({ children }) {
  const containerClasses = `${styles.alert} ${styles.error}`
  return (
    <div className={containerClasses}>
      <small>{children}</small>
    </div>
  )
}

export function FormRow({ htmlFor, label, error, errorMessage, className, children, rules }) {
  const customClass = className ? className : ''
  const containerClasses = `${styles.container} ${customClass}`
  const required = !rules || !rules.required ? '(optional)' : '(required)'

  return (
    <div className={containerClasses}>
      <div className={styles.label}>
        <label htmlFor={htmlFor}>{label}</label> <small>{label && required}</small>
      </div>
      <div className={styles.input}>
        {children}
        {error && <Alert>{errorMessage}</Alert>}
      </div>
    </div>
  )
}
