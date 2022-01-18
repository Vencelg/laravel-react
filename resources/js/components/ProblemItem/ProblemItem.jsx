import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ProblemContext from "../../context/problems/problemsContext"
import UserContext from "../../context/user/userContext"
import { useHistory } from "react-router-dom";


const ProblemItem = ({problem}) => {

   const problemContext = useContext(ProblemContext);
   const { deleteProblem  } = problemContext;

   const userContext = useContext(UserContext);
   const { user } = userContext;

   console.log(problem)
   const history = useHistory();

   const onDelete =  () => {
      deleteProblem(problem.id).then(()=> history.push("/"));
     
    }
 
   return (
      
      <tr>
          <td>{problem.user.name}</td>
         <td>{problem.room} </td>
         <td>{problem.name}</td>
         <td>{problem.created_at.slice(0,10)}</td>
         <td className={problem.fixed ? "done" : "warn"}>{problem.fixed ? "Opraveno" : "Čekající"}</td>
         <td>{problem.fix_time ? problem.fix_time : "0"}</td>
         <td>{user.admin &&<Link to={`problem/${problem.id}`}><button title="Upravit" className='edit'><i className="fas fa-wrench"></i></button></Link>}</td>
         <td>{user.admin || user.id==problem.user.id ?<button title="Smazat" onClick={onDelete} className='edit'><i className="fas fa-trash"></i></button>: <></>}</td>
         
         
      
        
      </tr>
   )
}

export default ProblemItem
