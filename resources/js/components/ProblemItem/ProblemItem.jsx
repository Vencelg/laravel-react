import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ProblemContext from "../../context/problems/problemsContext"
import UserContext from "../../context/user/userContext"
import { useHistory } from "react-router-dom";
import userContext from '../../context/user/userContext';

const ProblemItem = ({problem}) => {

   const problemContext = useContext(ProblemContext);
   const { deleteProblem  } = problemContext;

   const userContext = useContext(UserContext);
   const { user  } = userContext;


   const history = useHistory();

   const onDelete =  () => {
      deleteProblem(problem.id).then(()=> history.push("/"));
     
    }
 
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
