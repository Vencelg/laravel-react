import React, { useContext } from 'react'
import UserContext from '../../context/user/userContext';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const Profile = () => {

   const userContext = useContext(UserContext);
   const { user } = userContext;


   return (
      <>
         <Header />
         <main>
            <div className='main profile-card'>
               <div className='profilePic'>
                  <img width={"150px"} height={"150px"} src="https://patmat.cz/css/patmat/images/gesto.png" alt="Profile picture" />
               </div>
               <div className='profileData'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <Link to="/password-change">
                  <div className="wrap-login100-form-btn" style={{width: "80%", marginTop:"30px"}} >
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" style={{height:"30px"}}>
                     Změnit heslo
							</button>
						</div>
                  </Link>
               </div>

          


               

            </div>
         </main>
      </>
   )
}

export default Profile
