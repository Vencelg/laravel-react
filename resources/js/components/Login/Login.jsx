import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';

const Login = () => {
   const userContext = useContext(UserContext);
   const {isAuthenticated, login, error} = userContext;
   
   const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const { email, password } = formData;
  
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
