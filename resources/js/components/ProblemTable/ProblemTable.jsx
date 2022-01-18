import React, {useEffect, useContext} from 'react'
import ProblemsContext from "../../context/problems/problemsContext"
import ProblemItem from '../ProblemItem/ProblemItem';

const ProblemTable = () => {

   const problemsContext = useContext(ProblemsContext);
   const {
      error,
      loading,
      problems,
      getProblems,
      } = problemsContext;



   useEffect(()=>{

      getProblems();
    
   }, [])

   return (
      <table className='problemTable'>
         <thead>
            <tr>
               <td>Autor</td>
               <td>Místnost</td>
               <td>Co nefunguje?</td>
               <td>Datum</td>
               <td>Stav</td>
               <td>Délka opravy</td>
               <td></td>
               <td></td>
            </tr>
         </thead>
         <tbody>

         
            {!error && (
               !loading && (
                  problems && (
                     problems.map((problem) => (
                        <ProblemItem key={problem.id} problem={problem} />
                        
                     )
                     )
                  )
                 
               )
            )}
            </tbody>
      </table>
   )
}

export default ProblemTable
