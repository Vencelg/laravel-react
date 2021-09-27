import React, {useContext, useState} from 'react'
import { useFetchTasks } from '../../hooks/useFetchTasks'
import { useAddTask } from '../../hooks/useAddTask'
import UserContext from '../../context/user/userContext';


const Main = () => {
  const {isAdding, addError, mutateAsync}=useAddTask(formData,refetch);
   const [formData, setFormData] = useState({
      name:"",
      description:"",
      room:"",
    });
   

   const userContext = useContext(UserContext);
   const {user} = userContext;

   const { data:problems, isError, error, isLoading, refetch } = useFetchTasks();
   console.log({ problems, isError, error, isLoading });

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async (e) => {
     e.preventDefault();
     const data = await mutateAsync({
      ...formData
    });
     
     /* setAdding(isAdding);
     setAddError(addError); */
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
            {isError && error}
            {addError && addError}
            {isLoading || isAdding ?(<span>Loading...</span>):(
                  problems.map((problem)=>(
                     <div key={problem.id}>{problem.room} / {problem.description} / {problem.name}</div>
                     )
                  )
            )}
         </section>
         <hr />
         <section>
         <div className="flex">
      <div className="form-container">
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
      
          <input
            type="text"
            placeholder="room"
            name="room"
            value={formData.room}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
      
          <input
            type="text"
            placeholder="description"
            name="description"
            value={formData.description}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
      </div>
      </div>
         </section>
      </main>
   )
}

export default Main
