import { useReducer } from "react";
import api from "../../scripts/api";
import ProblemsContext from "./problemsContext";
import ProblemsReducer from "./problemsReducer";
import { LOAD_PROBLEMS, 
         LOAD_PROBLEM, 
         CREATE_PROBLEM, 
         DELETE_PROBLEM, 
         FIX_PROBLEM,
         PROBLEM_ERROR
      } from "../types"

const ProblemsState = props => {
    const initalState = {
      problems:[],
      problem:{},
      loading: true,
      error: null
    }

    const [state, dispatch] = useReducer(ProblemsReducer, initalState);


    const getProblems = async () => {
      
      try {
           
         const res = await api.get('/problems');

         dispatch({
             type: LOAD_PROBLEMS,
             payload: res.data
         });
     } catch (error) {
         
         dispatch({
             type: PROBLEM_ERROR,
             payload: error.response.data.message
         });
     }
    }

    const getProblem = async (problemId) => {
      try {
           
         const res = await api.get(`/problem/${problemId}`);

         dispatch({
             type: LOAD_PROBLEM,
             payload: res.data
         });
     } catch (error) {
         dispatch({
             type: PROBLEM_ERROR,
             payload: error.response.data.message
         });
     }
    }

    const createProblem = async (values) => {
      try {
           
         const res = await api.post('/problems', values);

         dispatch({
             type: CREATE_PROBLEM,
             payload: res.data
         });
     } catch (error) {
         dispatch({
             type: PROBLEM_ERROR,
             payload: error.response.data.message
         });
     }
    }

    const deleteProblem = async (problemId) => {
      try {
           
         const res = api.delete(`/problem/${problemId}`);

         dispatch({
             type: DELETE_PROBLEM,
             payload: problemId
         });
     } catch (error) {
         dispatch({
             type: PROBLEM_ERROR,
             payload: error.response.data.message
         });
     }
    }

    const fixProblem = async (problemId, values) => {
      try {
           
         const res = api.post(`/problem/${problemId}`, values);

         dispatch({
             type: FIX_PROBLEM,
             payload: res.data
         });
     } catch (error) {
         dispatch({
             type: PROBLEM_ERROR,
             payload: error.response.data.message
         });
     }
    }


    return <ProblemsContext.Provider value={
        {
         problem: state.problem,
         error: state.error,
         loading: state.loading,
         problems: state.problems,
         getProblems,
         getProblem,
         createProblem,
         deleteProblem,
         fixProblem
        }
    } >

        {props.children}
    </ProblemsContext.Provider>
}

export default ProblemsState;