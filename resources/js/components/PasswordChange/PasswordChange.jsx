import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/user/userContext';

import { useHistory } from "react-router-dom";





const PasswordChange = () => {

   const userContext = useContext(UserContext);
   const { changePassword, error } = userContext;

   const history = useHistory();

   const [formData, setFormData] = useState({
      password: ''
    });

    const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = (e) => {
     e.preventDefault();
     changePassword(password);
     history.push("/");
   };

  


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



