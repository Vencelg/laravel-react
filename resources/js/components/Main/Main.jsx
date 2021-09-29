import React, {useContext, useState} from 'react'
import useProblems from '../../hooks/useProblems'
import { useCreateProblem } from '../../hooks/useCreateProblem'
import UserContext from '../../context/user/userContext';
import { useMutation } from "react-query";
import api from '../../scripts/api';
import ProblemForm from '../ProblemForm/ProblemForm';


const Main = () => {

   const [formData, setFormData] = useState({
      name:"",
      description:"",
      room:"",
    });
   

   const userContext = useContext(UserContext);
   const {user} = userContext;

   const problemQuery = useProblems()
   const [createProblem, createProblemInfo] = useCreateProblem()

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
            {addError && addError}
            {problemQuery.isLoading || isAddingProblem ?(<span>Loading...</span>):(
                  problemQuery.data.map((problem)=>(
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
            onSubmit={createProblem}
            clearOnSubmit
            submitText={
              createProblemInfo.isLoading
                ? 'Saving...'
                : createProblemInfo.isError
                ? 'Error!'
                : createProblemInfo.isSuccess
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
