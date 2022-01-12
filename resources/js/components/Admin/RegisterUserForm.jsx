import React from 'react'
import { Redirect } from 'react-router-dom';

const defaultFormValues = {
   email: '',
   name:'',
   admin: 1
}
const RegisterUserForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit
}) => {

  const [values, setValues] = React.useState(initialValues)

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values).then(() => console.log("created"));

  }

  React.useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Register User</label>
        <div className="form-group">
        <i className="fas fa-envelope form-icon"></i>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={e => setValue("email", e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <i className="fas fa-user form-icon"></i>
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={values.name}
            onChange={e => setValue("name", e.target.value)}
            required
          />
        </div>
        <div className="form-group">
        <i className="fas fa-user-shield form-icon"></i>
          <label htmlFor="admin">is admin</label>
          {/* <input
            type="checkbox"
            name="admin"
            value={values.admin}
            onChange={e => setValue("admin", e.target.value)}
          /> */}
        </div>
        <button type="submit" className="btn btn-primary">{submitText}</button>
      </form>
    </div>
  )
}

export default RegisterUserForm;
