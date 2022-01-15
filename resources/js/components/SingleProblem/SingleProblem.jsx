import React, { useEffect, useContext } from "react";
import ProblemContext from "../../context/problems/problemsContext"
import { useStopwatch } from "react-timer-hook";
import { formatTime } from "../../scripts/timerFormat";
import { Link, useHistory } from "react-router-dom";



const defaultFormValues = {
    fix_time: "0",
    fixed: true,
};

const SingleProblem = ({ match }) => {

    const problemsContext = useContext(ProblemContext);
    const {
       error,
       loading,
       problem,
       getProblem,
       deleteProblem,
        fixProblem } = problemsContext;

        useEffect(()=>{
            getProblem(match.params.id);
         }, [])

    const [values, setValues] = React.useState(defaultFormValues);

    const history = useHistory();


    const onDelete = async () => {
        deleteProblem(match.params.id);
        history.push("/");
    };

    const { seconds, minutes, hours, start, pause, reset } =
        useStopwatch({ autoStart: false });

    const handleSubmit = (e) => {
        e.preventDefault();
        fixProblem(match.params.id, values)
    };

    useEffect(() => {
        setValues({ ...values, fix_time: formatTime(seconds,minutes,hours) });
    }, [seconds,minutes,hours]);

    return (
        <div>
            {!error && error}
            {loading ? (
                <span>Loading...</span>
            ) : (
                problem && (  <div>
                    <Link to="/">Back</Link>
                    <div>
                        <div>
                            {problem.name} | {problem.description} |{" "}
                            {problem.id} | {problem.created_at}{" "}
                        </div>
                        <div>
                            {problem.user.name} | {problem.user.admin} |{" "}
                            {problem.user.id}{" "}
                        </div>
                        <div>
                            {problem.fix_time} | {problem.fixed}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="form">
                        
                        <div style={{ fontSize: "30px" }}>
                            <span>{values.fix_time}</span>
                        </div>
                        
                        
                        <button type="button" onClick={start}>Start</button>
                        <button type="button" onClick={pause}>Pause</button>
                        <button type="button" onClick={()=>reset(0,false)}>Reset</button>
                        <button type="submit">Fix</button>
                    </form>
                    <button onClick={onDelete}>Delete</button>
                </div>)
              
            )}
        </div>
    );
};

export default SingleProblem;

