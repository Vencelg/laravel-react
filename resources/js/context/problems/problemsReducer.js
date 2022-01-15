import { LOAD_PROBLEMS, 
    LOAD_PROBLEM, 
    CREATE_PROBLEM, 
    DELETE_PROBLEM, 
    FIX_PROBLEM,
    PROBLEM_ERROR } from "../types"

const Reducer = (state, action) => {
    switch (action.type) {
        case LOAD_PROBLEMS: 
            return {
                ...state,
                problem:{},
                problems: action.payload,
                error:null,
                loading: false
            }
        case LOAD_PROBLEM:
            return{
                ...state,
                problem: action.payload.problem,
                error:null,
                loading: false
            }
        case CREATE_PROBLEM:
            return {
                ...state,   
                problems: [action.payload.problem, ...state.problems],
                error:null,
                loading: false
            }
        case DELETE_PROBLEM:
            return {
                ...state,
                problems: state.problems.filter((problem) => problem.id !== action.payload),
                problem:{},
                error:null,
                loading: false
            }
        case FIX_PROBLEM: 
            return {
                ...state,
                problem: action.payload,
                error:null,
                loading: false
            }
        case PROBLEM_ERROR: 
            return {
                ...state,
                error: action.payload,
                loading: false
            }
      
        default:
            return state;
    }
}

export default Reducer