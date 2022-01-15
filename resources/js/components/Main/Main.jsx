import React, { useContext, useEffect } from 'react'
import UserContext from '../../context/user/userContext';
import ProblemsContext from "../../context/problems/problemsContext"
import ProblemForm from '../ProblemForm/ProblemForm';
import { Link } from 'react-router-dom';
import ProblemItem from '../ProblemItem/ProblemItem';


const Main = () => {

   const problemsContext = useContext(ProblemsContext);
   const {
      error,
      loading,
      problems,
      getProblems,
      createProblem } = problemsContext;

   const userContext = useContext(UserContext);
   const { logout } = userContext;

   useEffect(()=>{

      getProblems();
    
   }, [])


   return (
      <main>
         
         <hr />
         <section>
            {!error ? (
               loading ? (<span>Loading...</span>) : (
                  problems && (
                     problems.map((problem) => (
                        <ProblemItem key={problem.id} problem={problem} />
                     )
                     )
                  )
                 
               )
            ) : "Chyba!!"}
     
         </section>
         <hr />
         <section>
            <div className="flex">
               <div className="form-container">
                  <ProblemForm
                     onSubmit={createProblem}
                     clearOnSubmit
                     submitText={
                        loading
                           ? 'Saving...'
                           : error
                              ? 'Error!'
                                 : 'Create Problem'
                     }
                  />
               </div>
            </div>
         </section>
         <Link to={`profile`}>Profile</Link>
         <button onClick={logout}>LOGOUT</button>
         
      </main>
   )
}

export default Main
