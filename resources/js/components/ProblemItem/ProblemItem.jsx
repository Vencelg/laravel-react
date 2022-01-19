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

 
   const history = useHistory();

   const onDelete =  () => {
      deleteProblem(problem.id).then(()=> history.push("/"));
     
    }
 
   return (
      
      <tr>
         <td className='sm-none'>{problem.user.name}</td>
         <td className='sm-none'>{problem.room} </td>
         <td>{problem.name}</td>
         <td className='sm-none'>{problem.created_at.slice(0,10)}</td>
         <td className={problem.fixed ==  "Čekající" ? "warn" : problem.fixed=="Probíhá" ? "" : "done"}>{problem.fixed}</td>
         <td className='sm-none'>{problem.fix_time ? problem.fix_time : "0"}</td>
         <td>{user.admin ==1 &&<Link to={`problem/${problem.id}`}><button title="Upravit" className='edit'><i className="fas fa-wrench"></i></button></Link>}</td>
         <td  className={`${user.admin && "sm-none"}`} >{user.admin || user.id==problem.user.id ?<button title="Smazat" onClick={onDelete} className='edit'><i className="fas fa-trash"></i></button>: ""}</td>
         
         
      
        
      </tr>
   )
}

export default ProblemItem
