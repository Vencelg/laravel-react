import React, { useContext, useState } from 'react'
import useProblems from '../../hooks/useProblems'
import useCreateProblem from '../../hooks/useCreateProblem'
import UserContext from '../../context/user/userContext';
import { useMutation } from "react-query";
import api from '../../scripts/api';
import ProblemForm from '../ProblemForm/ProblemForm';
import { Link } from 'react-router-dom';
import ProblemItem from '../ProblemItem/ProblemItem';
import useFixProblem from '../../hooks/useFixProblem';

const Main = () => {



   const userContext = useContext(UserContext);
   const { user, logout } = userContext;

   const problemQuery = useProblems()
   const createProblemQuery = useCreateProblem()
   const createFixQuery = useFixProblem();


   console.log(problemQuery);

   return (
      <main>
         <section>
            {user.id}
            |
            {user.name}
            |
            {user.email}
         </section>
         <hr />
         <section>
            {problemQuery.isError && problemQuery.error}
            {problemQuery.isLoading ? (<span>Loading...</span>) : (
               problemQuery.data.map((problem) => (
                  // <div key={problem.id}>{problem.room} / <Link to={`problem/${problem.id}`}>{problem.description}</Link> / {problem.name} / {problem.id}</div>
                  <ProblemItem key={problem.id} problem={problem} refetch={problemQuery.refetch} onSubmit={createFixQuery.mutateAsync}/>
               )
               )
            )}
         </section>
         <hr />
         <section>
            <div className="flex">
               <div className="form-container">
                  <ProblemForm
                     onSubmit={createProblemQuery.mutateAsync}
                     clearOnSubmit
                     refetch={problemQuery.refetch}
                     submitText={
                        createProblemQuery.isLoading
                           ? 'Saving...'
                           : createProblemQuery.isError
                              ? 'Error!'
                              : createProblemQuery.isSuccess
                                 ? 'Saved!'
                                 : 'Create Problem'
                     }
                  />
               </div>
            </div>
         </section>
         <button onClick={logout}>LOGOUT</button>
      </main>
   )
}

export default Main
