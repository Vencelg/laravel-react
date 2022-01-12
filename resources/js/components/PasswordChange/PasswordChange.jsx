import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/user/userContext';
import { Redirect } from 'react-router-dom';

const PasswordChange = () => {
   const userContext = useContext(UserContext);
   const { changePassword, error } = userContext;

   const [paswChanged, setpaws] = useState(false);

   const [formData, setFormData] = useState({
      password: ''
    });

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
     e.preventDefault();
     changePassword(password);
      setpaws(true);
   };

   useEffect(() => {
      if(paswChanged){
         return <Redirect to="/" />
      }
   }, [paswChanged])
  
  


    const { password } = formData;

   return (
      <div className="flex">
      {error && error}
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
         
          <div className="form-group">
            <i className="fas fa-key form-icon"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
   )
}

export default PasswordChange



/* import React, { useContext, useState } from 'react';



const Login = () => {


  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />
  }
  return (
    <div className="flex">
      {error && error}
      <div className="form-container">
        <form className="form" onSubmit={onSubmit}>
          <div className="form-group">
            <i className="fas fa-envelope form-icon"></i>
            <input
              type="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <i className="fas fa-key form-icon"></i>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;
 */