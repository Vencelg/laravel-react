import React from 'react'

const defaultFormValues = {
  room: '',
  description: '',
  name: '',
}
const ProblemForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
  refetch
}) => {

  const [values, setValues] = React.useState(initialValues)

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values).then(() => refetch());

  }

  React.useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Add Problem</label>
        <div className="form-group">

          <input
            type="text"
            placeholder="room"
            name="room"
            value={values.room}
            onChange={e => setValue("room", e.target.value)}
            required
          />
        </div>
        <div className="form-group">

          <input
            type="text"
            placeholder="description"
            name="description"
            value={values.description}
            onChange={e => setValue("description", e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={values.name}
            onChange={e => setValue("name", e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">{submitText}</button>
      </form>
    </div>
  )
}

export default ProblemForm;
