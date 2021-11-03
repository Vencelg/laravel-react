import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/user/userContext';
import useDeleteProblem from '../../hooks/useDeleteProblem';

const ProblemItem = ({problem, refetch}) => {
   const userContext = useContext(UserContext);
   const { user } = userContext;
   const [deleteProblem, deleteProblemInfo] = useDeleteProblem()
  

   const onDelete =  () => {
      deleteProblem(problem.id).then(()=>refetch());
     
    }
   console.log(deleteProblemInfo);
   return (
      
      <div>
      
         <div>{problem.room} / {problem.description}/ {problem.name} / {problem.id}/
         {user.admin &&<Link to={`problem/${problem.id}`}><button>Fixx</button></Link>}
         {user.admin || user.id==problem.user.id ?<button onClick={onDelete}>Delete</button>: <></>}
         </div>
        
      </div>
   )
}

export default ProblemItem
