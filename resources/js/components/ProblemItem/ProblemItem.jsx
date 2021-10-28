import React from 'react'
import useProblem from '../../hooks/useProblems'
import useFixProblem from '../../hooks/useFixProblem'
import useDeleteProblem from '../../hooks/useDeleteProblem'

const ProblemItem = ({match}) => {

   const problemQuery = useProblem(match.params.id)

   return (
      <div>
          {problemQuery.isError && problemQuery.error}
            {problemQuery.isLoading ? (<span>Loading...</span>) : (
               
               <div key={problemQuery.data.id}>{problemQuery.data.room} / {problemQuery.data.description} / {problemQuery.data.name}</div>
               
               
            )}
      </div>
   )
}

export default ProblemItem
