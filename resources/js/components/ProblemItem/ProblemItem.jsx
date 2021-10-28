import React from 'react'
import useProblem from '../../hooks/useProblem'
import useFixProblem from '../../hooks/useFixProblem'
import useDeleteProblem from '../../hooks/useDeleteProblem'

const ProblemItem = ({ match }) => {

   const problemQuery = useProblem(match.params.id)
   const { problem } = { ...problemQuery.data };
   return (
      <div>
         {problemQuery.isError && problemQuery.error}
         {problemQuery.isLoading ? (<span>Loading...</span>) : (
            <div>
               <div>{problem.name} | {problem.description} | {problem.id} | {problem.created_at} </div>
               <div>{problem.user.name} | {problem.user.admin} | {problem.user.id} </div>
            </div>




         )}
      </div>
   )
}

export default ProblemItem
