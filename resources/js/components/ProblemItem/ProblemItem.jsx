import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext';
import useDeleteProblem from '../../hooks/useDeleteProblem';

const ProblemItem = ({problem}) => {
   const userContext = useContext(UserContext);
   const { user } = userContext;
   const [deleteProblem, deleteProblemInfo] = useDeleteProblem()
  

   const onDelete = async () => {
      await deleteProblem(problem.id);
    }
   console.log(problem);
   console.log(user);

   return (
      
      <div>
      
         <div>{problem.room} / {problem.description}/ {problem.name} / {problem.id}/
         {user.admin &&<Link to={`problem/${problem.id}`}><button>Fix</button></Link>}
         {user.admin || user.id==problem.user.id ?<button onClick={onDelete}>Delete</button>: <></>}
         </div>

      </div>
   )
}

export default ProblemItem
