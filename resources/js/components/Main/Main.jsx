import React, { useContext, useEffect } from 'react'
import ProblemsContext from "../../context/problems/problemsContext"

import ProblemForm from '../ProblemForm/ProblemForm';
import ProblemTable from '../ProblemTable/ProblemTable';

import Header from '../Header/Header';

const Main = () => {

   const problemsContext = useContext(ProblemsContext);
   const {createProblem } = problemsContext;

   

   


   return (
      <>
         <Header/>
           <main>
              <div className="main">
              <section>
                  <ProblemForm
                     onSubmit={createProblem}
                     clearOnSubmit
                  />
             
            </section>
      
            <section>
                     <ProblemTable/>
     
            </section>     
              </div>
              
         </main>
      </>
    
   )
}

export default Main
