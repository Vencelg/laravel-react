import React, {useContext, useState} from 'react'
import { useFetchTasks } from '../../hooks/useFetchTasks'
import { useAddTask } from '../../hooks/useAddTask'
import UserContext from '../../context/user/userContext';


const Main = () => {

   const [formData, setFormData] = useState({
      name:"",
      description:"",
      room:"",
    });
   const [isAdding, setAdding] = useState(false);
   const [addError, setAddError] = useState(false);

   const userContext = useContext(UserContext);
   const {error} = userContext;
   console.log(error);

   //const { data:problems, isError, error, isLoading, refetch } = useFetchTasks();
   //console.log({ data, isError, error, isLoading });

   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = (e) => {
     e.preventDefault();
     const {isAdding, addError}=useAddTask(formData,refetch);
     setAdding(isAdding);
     setAddError(addError);
    };
   
   return (
      <main>
         <section>
           {/* {user.id}
            {user.name}
            {user.email} */}
         </section>
         <hr />
         <section>
            {/* {isError && error}
            {addError && addError}
            {isLoading || isAdding ?(<span>Loading...</span>):(
                  problems.map((problem)=>(
                     <div>{problem.room} {problem.description} {problem.name}</div>
                     )
                  )
            )} */}
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
