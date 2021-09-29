import React, { useContext, useState } from 'react'
import useProblems from '../../hooks/useProblems'
import useCreateProblem from '../../hooks/useCreateProblem'
import UserContext from '../../context/user/userContext';
import { useMutation } from "react-query";
import api from '../../scripts/api';
import ProblemForm from '../ProblemForm/ProblemForm';


const Main = () => {

   const [formData, setFormData] = useState({
      name: "",
      description: "",
      room: "",
   });


   const userContext = useContext(UserContext);
   const { user } = userContext;

   const problemQuery = useProblems()
   const createProblemQuery = useCreateProblem()
   console.log(createProblemQuery);
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   const onSubmit = async (e) => {
      e.preventDefault();


   };



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
                  <div key={problem.id}>{problem.room} / {problem.description} / {problem.name}</div>
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
      </main>
   )
}

export default Main
