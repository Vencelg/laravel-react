import React, { useContext } from 'react'
import ProblemsContext from "../../context/problems/problemsContext"

import ProblemForm from '../ProblemForm/ProblemForm';
import ProblemTable from '../ProblemTable/ProblemTable';
import AlertBox from '../AlertBox/AlertBox';
import Header from '../Header/Header';

const Main = () => {

   const problemsContext = useContext(ProblemsContext);
   const {createProblem } = problemsContext;

   

   


   return (
      <>
         <Header/>
         <AlertBox/>
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
